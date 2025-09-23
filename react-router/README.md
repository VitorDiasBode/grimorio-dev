# Navegação com Link e NavLink do React Router
Nesse projeto eu criei a aplicação `nav-oceano-da-conquista` para experimentar e estudar navegação usando o framework **React Router**.

Esse projeto vai ser composto por páginas para mostrar os personagens do cenário de RPG, Oceano da Conquista. Os personagens apresentados podem ser de categorias diferentes, piratas, marinheiros e espectros. Na página principal todos os personagens são exibidos e cada categoria vai ter sua página para mostrar somente os personagens daquela categoria. No cabeçalho de cada página, vai ter uma barra de navegação com as opções para cada página de categoria. Em cada personagem vai ter uma opção de "Saiba Mais".

A barra de navegação vai usar os componentes `NavLink` para o usuário acessar cada uma das páginas de categoria. Com esse componente estilos são aplicados para que o usuário veja qual a página ele está atualmente.

Na lista onde os personagens são apresentados, um `Link` pode ser usado para o usuário navegar até a página dinâmica daquele personagem.
## Iniciando a aplicação.

Usando [[Criando uma aplicação React com Vite|Vite]], criei o projeto com nome `nav-oceano-da-conquista`.

```bash
npm create vite@latest nav-oceano-da-conquista -- --template react
```

No diretório criado para esse projeto, instalei o **react-router-dom**.

```bash
npm i react-router-dom
```

## Inicia a estrutura de rotas
O primeiro passo foi configurar o sistema de rotas no arquivo `App.jsx`. Escolhi estruturar as rotas seguindo o fluxo inicial de renderização do **React**, esse fluxo segue,  `index.html` -> `main.jsx` -> `App.jsx`. 

Os componentes de rotas usados foram:
- `BrowserRouter` - É o container principal do **React Router**, ele usa a API de histórico do navegador para controlar a rota sem precisar recarregar a página. Nele é definido para onde a navegação vai levar e de onde ela vem;
- `Routes` - É o componente que agrupa e gerencia rotas, ele vai apontar qual a rota a ser seguida de acordo com a URL;
- `Route` - Define rotas individuais com `path=` para definir qual o endpoint daquela rota, `element=` para definir qual componente React vai ser renderizado naquela rota e `:param1` para definir os parâmetros dinâmicos de uma página.

```jsx
import { BrowserRouter, Routes, Route } from "react-router";

//Paginas
import Home from "./pages/Home";
import Piratas from "./pages/Piratas";
import Marinheiros from "./pages/Marinheiros";
import Espectros from "./pages/Espectros";
import Personagem from "./pages/Personagem/Personagem";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/piratas" element={<Piratas />} />
         <Route path="/marinheiros" element={<Marinheiros />} />
         <Route path="/espectros" element={<Espectros />} />
         <Route path="/personagem/:id" element={<Personagem />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

```

As páginas que foram importadas eram simples e só tinham um texto com o seu nome, fui construindo a página de acordo com a prioridade. Nesse momento a prioridade era fazer a navegação entre as páginas.

Com a estrutura de rotas configurada, defini uma versão simples do componente que vai representar a barra de navegação.  No diretório `src/components/Navbar` criei o arquivo `Navbar.jsx`. 

```jsx
import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
	  <div>
		<NavLink to='/'>Principal</NavLink>
		<NavLink to='/piratas'>Piratas</NavLink>
		<NavLink to='/marinheiros'>Marinheiros</NavLink>
		<NavLink to='/espectros'>Espectros</NavLink>
	  </div>
  )
}
```

Cada página no sistema de rotas recebeu o componente `Navbar` para testar os links

```jsx
import React from "react";
import Navbar from "../components/Navbar/Navbar";

function Home() {
    return (
        <div>
            <Navbar />
            Home
	    </div>
    )
}

export default Home
```
## Implementa lista de personagens na Página Principal
Os elementos `Navbar` funcionaram e a primeira funcionalidade de navegação de rotas foi concluída. A próxima seria usar o componente `Link` para acessar a página dinâmica de personagem.

A página é acessada com um parâmetro `id` que declara qual personagem deve ser mostrado. Selecione um personagem de cada categoria e criei uma lista de objetos no diretório `src/data.js`

```js
export const personagens = [
	{ 
		id: 1,
		nome: "Capitã Selene",
		categoria: "piratas",
		citacao: "Foi quando meu pai me disse, 'filha você é a ovelha negra da família agora é hora de você assumir e sumir",
		imagem: "/cartas/IMG OC-Selene.png"
	},
	{ 
		id: 2,
		nome: "Elias Corda Solta",
		categoria: "marinheiros",
		citacao: "Então Sorte, me ilumine pois preciso crescer.",
		imagem: "/cartas/IMG OC-Elias.png"
	},
	{ 
		id: 3,
		nome: "Aiaaiis",
		categoria: "espectros",
		citacao: "Uma aproximadora para a capacidade de conhecer o mundo.",
		imagem: "/cartas/IMG OC-Aiaaiis.png"
	}
];
```

Na página `Home` eu importei a lista de personagem e mapiei ela para criar um item da lista para cada um. Nesse item da lista eu adicionei o nome do personagem e o elemento `Link` que levaria para a página `Personagem`.

```jsx
function Home() {
    return (
        <div>
            <Navbar />
            <main>
                <h1>Todos do Oceano da Conquista!</h1>
                <ul>
                    {personagens.map( (personagem) => (
                        <li key={personagem.id}>
	                        {personagem.nome} - 
	                        <Link to={`/personagem/${personagem.id}`}>
		                        Saiba Mais
	                        </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
        
    )
}
```

## Destaca o NavLink de acordo com a página ativa
Os componente `NavLink` do `ReactRouter` possuem uma propriedade para determinar se a rota que ele aponta está ativa. Usei isso para destacar aquele elemento declarando qual seria a sua classe quando sua propriedade fosse verdadeira.

Com o operador ternário declarei que a classe desse elemento seria `active` quando a propriedade `isActive` dele for verdadeira. Quando não for verdadeira, ele recebe uma classe vazia.

```jsx
<NavLink 
	to='/' 
	className={({isActive}) => isActive?"active":""}
>Principal</NavLink>
```

## Adiciona página para mostrar dados de um personagem
Antes essa página só mostrava o nome do personagem selecionado. Atualizei a estrutura dessa página para mostrar todos os dados do personagem, incluindo sua imagem.

Como retirei a descrição dos personagens do meu Obsidian, eles forma originalmente escritos com padrões de um arquivo Markdown. Adicionei o pacote `ReactMarkdown` para formatar o texto que seria mostrado.

```jsx
<p className="personagem-descricao">
  {personagem.descricao.split("\n").map((paragrafo, i) => (
	<span key={i}>
	  <ReactMarkdown>{paragrafo}</ReactMarkdown>
	  <br />
	  <br />
	</span>
  ))}
</p>
```

## Resultado do Projeto
O projeto terminou simples e com o objetivo concluído. Experimentei na prática a diferença entre Link e NavLink. Além disso, conheci o pacote `ReactMarkdown`, para projetos futuros isso pode me ajudar. 
