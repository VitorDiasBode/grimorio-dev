# 6 erros com State que desenvolvedores React Junior podem cometer

## Ignorar Functional Update
A função **Set** do **Hook** `useState()` que realiza atualização do estado é assíncrona e podem ser agrupadas (batched) por medidas de performance. O seguinte código simula uma situação onde a função daquele estado depende de um tempo para ser executado. 

```jsx
const FunctionalUpdate = () => {
    const [number, setNumber] = useState(0);
    
    const increase = () => {
	    // Problema: number pode estar desatualizado aqui
		setNumber(number + 1);
    };
    const increaseAsync = () => {
    	// Problema: number pode estar desatualizado aqui
        setTimeout(() => {
            setNumber( number + 1);
        }, 2000);
    }
	
    return (
    <div className='main'>
        <h1>Counter</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={increaseAsync}>Increase Async</button>
        <div className="contador">{number}</div>
    </div>
  )
}
```

No caso em que o botão **Increase Async** é clicado e depois o botão **Increase** é clicado 5 vezes em menos de 2 segundos, o valor de `number` passa para 1, mesmo que os botões tenham sido clicados 6 vezes. Isso acontece por que o valor do estado é passado para a `promise` quando o botão é clicado e depois de 2 segundos o cálculo vai ser 0+1.

Para lidar com situações como essa, a função **Set** de um estado pode receber uma função. Nesse caso o parâmetro que essa função vai receber é o valor do estado no momento em que a expressão estiver sendo executada, não será o valor passado para a promise.

```jsx
setNumber( (prev) => prev+1);
```

## Iniciando States com dados vazios
Um estado em **React** armazena dados **JavaScript** que podem ser usados na página. Quando acessamos uma propriedade inexistente de um objeto **JavaScript**, o resultado é `undefined`. Isso não quebra o código, mas causa problemas ao renderizar com **JSX**. 

```jsx
// Problema: Cannot read properties of undefined”
const [user, setUser] = useState();
return (
	<UserCard>
		<div className="data">
			<img src={user.images[1]} alt="Banner" className='banner'/>
			<img src={user.images[0]} alt="Profile" className='profile'/>
			<h2>{user.name}</h2>
			<p>{user.email}</p>
		</div>
	</UserCard>
)
```

No exemplo acima, a página não seria renderizada por que o **React** tenta acessar propriedades de um objeto `undefined`. Essa situação poderia ser resolvida com um objeto sendo passado, mas ainda poderia ter outros problemas.

```jsx
const [user, setUser] = useState({});
```

O acesso a `user.name` apenas retornaria `undefined`, mas não quebraria a renderização. Mas o problema estaria em `user.images[0]`, o `images` também seria `undefined`.

Para evitar esse erro, a renderização condicional pode ser usada. Validando que `user` e `user.images` existem antes de acessar os seus dados, não impediria o **JSX** de ser renderizado.

```jsx
{user && user.images &&(
	<div className="data">
		<img src={user.images[1]} alt="Banner" className='banner'/>
		<img src={user.images[0]} alt="Profile" className='profile'/>
		<h2>{user.name}</h2>
		<p>{user.email}</p>
	</div>
)}
```


Outra solução é iniciar o estado objetos definidos, mesmo que eles estejam vazios.

```jsx
const [user, setUser] = useState({
	name:'',
	email:'',
	images: []
});
```

## Atualizar uma propriedade específica do objeto

A função **Set** de um estado substitui o todo o valor do estado, por isso o ideal é que o parâmetro seja o dado que vai ser armazenado no estado. Tentar atribuir valor de apenas uma propriedade específica pode substituir o objeto inteiro. No exemplo a seguir, a função `handleInputChange()` é chamada quando um input receber alteração do usuário. Com ela o estado recebe o valor que seria atribuído a propriedade `name` e deixaria de ser um objeto. 

```jsx
///ERRO: character passa a ser o valor do input
function UpdateSpecificObjProperty() {
    const [character, setCharacter] = useState({
      name:'Tannis',
      race:'Meio-Elfo',
      class:'Ranger'
    })

    function handleInputChange(e) {
      const value = e.target.value;
      setCharacter(character.name = value)
    }
```

Para evitar problemas como esse, é necessário usar **atualização funcional** combinado com **spread operator**. No exemplo a seguir a função **callback** retorna um novo objeto imutável, uma cópia do anterior (`prev`) com a propriedade `name` atualizada.

```jsx
///O parâmetro sendo passado é um novo objeto
function handleInputChange(e) {
	const value = e.target.value;
	setCharacter((prev) => ({...prev, name: value}));
}
```

Em casos onde muitos inputs diferentes são necessários, o ideal é manter uma função responsável por lidar com a atualização dos valores. Cada input deve ter um identificador (`id` ou `name`) para determinar qual atributo do objeto vai ser acessado.

```jsx
function handleInputChange(e) {
	const value = e.target.value;
	const key = e.target.name;
	setCharacter((prev) => ({...prev, [key]: value}));
}
```

## Usar somente o Hook useState com objetos complexos
Objetos complexos podem ter **arrays** e outros **objetos** aninhados. Usar **spread operator** em situações como essa pode causar mais erros e dar trabalho demais. Para lidar com situações como essa, o **Hook** **useReducer** é preferível.

```jsx
const initialCharacter = {
	name:'Selene', 
    hp:4,
    power:3, 
    facts:[
	    {
		    fact:'esgrima avançada', 
		    charge:3, 
		    description:'combate com espada refinado e mortal.'
		},
        {
	        fact:'presença intimidante', 
	        charge:3,
	        description:'inimigos fracos hesitam antes de atacar.'
	    },
        {
	        fact:'contrato vampírico', 
	        charge:4, 
	        description:'aumenta força e velocidade em combate, mas exige "alimentação" de energia vital de inimigos.'
	    }
    ]
}
```

Esse **hook** é declarado de forma similar com o **useState**. 
- `character` é o estado desse exemplo. 
- `dispatch()` é a função usada para executar as ações que vão lidar com o estado.
- `reducer()` é a função onde as ações que afetam o estado são declaradas.
- `initialCharacter` é o valor inicial do estado.

```jsx
const [character, dispatch] = useReducer(reducer, initialCharacter);
```

A função `reducer()` vai checar `action` e realizar as ações necessárias.

```jsx
function reducer(state, action){
    switch (action.type) {
        case 'hpIncrement':
            return {...state, hp:state.hp+1};
        case 'hpDecrement':
            return {...state, hp:state.hp-1};
        case 'powerIncrement':
            return {...state, power:state.power+1};
        case 'powerDecrement':
            return {...state, power:state.power-1};
        case 'incrementFactPower':
            const updatedFacts = state.facts.map((fact, idx) => {
                return idx === action.factIndex ? {...fact, charge:fact.charge+1 } : fact}
            );
            return {...state, facts:updatedFacts};
        case 'decrementFactPower':
            const updatedFacts = state.facts.map((fact, idx) => {
                return idx === action.factIndex ? {...fact, charge:fact.charge-1 } : fact}
            );
            return {...state, facts:updatedFacts};
        default:
            return state;
    }
}
```

Para modificar o estado, a função `dispatch()` é chamada e recebe um objeto com os dados necessários para determinar e realizar a ação.

```jsx
<PirateButton onClick={() => dispatch({
type:'decrementFactPower', 
factIndex:1
})}>-</PirateButton>
```
## Inconsistência com estados que derivam de outro

Um estado pode depender de outro estado, mas isso pode trazer erros em situações onde um desses estados é modificado. 

No exemplo anterior, o estado `character` possui um array com fatos. Cada fato é um objeto com `fact` e `charge`. Quando o usuário clicar em um elemento que mostra o fato, um modal é aberto e o fato é apresentado. O modal exibe mais detalhes do fato e pode aumentar o valor de `charge`.

Caso o fato selecionado esteja em um estado, haverá uma inconsistência quando esse estado for modificado no modal. Os estados não armazenam referencia a outros estados, então os dois dados são isolados entre si.

Para evitar esse erro, a prática recomendada é não armazenar o fato no estado, mas armazenar só o id do fato. Assim o modal acessa o estado do `character`, acessa a lista de fatos e acessa o fato desejado.

```jsx
<SectionTitle>Fatos</SectionTitle>
{character.facts.map((f, index) => (
	<FactCard key={index} onClick={() => setSelectedFactID(index)}>
		<span>{f.fact}</span>
		<AttributeBox>
			<AttributeValue>{f.charge}</AttributeValue>
		</AttributeBox>
	</FactCard>
))}
```