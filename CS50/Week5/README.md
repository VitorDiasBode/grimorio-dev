## Week 5 - Data Structures

### Stacks and Queues
Usando exemplos práticos, com pessoas em fila, David explica dois tipos de estruturas de dados. O primeiro é onde pessoas entram na parte de trás da fila (1 - 2 - 3 - 4). Nessa lista, a primeira pessoa a entrar é a primeira pessoa a ser retirada. Essa estrutura funciona como uma fila de atendimento de caixa, novas pessoas vão para o final da fila até que as primeiras pessoas sejam atendidas. Esse exemplo representa uma **queue**, que segue o princípio FIFO (*First in First Out*).

No segundo tipo de estrutura que ele apresenta, novas pessoas entram no começo da fila (4 - 3 - 2 - 1). Nesse caso a primeira pessoa que entrou na fila vai estar no final. Essa estrutura funciona como uma pilha de pratos, o último prato empilhado é aquele que vai ser pego primeiro. Esse exemplo representa uma **stack**, com o princípio LIFO (*Last in First Out*).

Um exemplo de caso com as duas estruturas, é a situação onde um personagem usa sempre as mesmas roupas. Esse personagem lava suas roupas quando termina de usar e guarda novamente no seu armário. Ele organiza suas vestimentas em uma **stack**, então quando a roupa é adicionada ao armário, ela vai estar por cima de todas as outras. Quando ele for se vestir, a roupa escolhida é aquela no topo (*Last in First Out*).

Para lidar com essa situação para que ele possa usar roupas variadas, elas passam a ser organizadas em uma **queue**. Ao invés de guardar elas em pilha, ele usa um cabide. Quando a roupa for lavada, é adicionada no final do cabide. Assim a próxima roupa a ser usada não vai ser a que foi adicionada recentemente (*First in First Out*).
### Resizing Arrays
Voltando para o código com alocação de memória, esse conceito vai ser importante para declarar estruturas de **stack** e **queue** forem implementadas, ele aloca dinamicamente um array para armazenar números de 1 até 3. O ponteiro dessa lista recebe um novo valor com a função `realloc`. Um novo bloco de memória é definida, com tamanho suficiente para 4 números inteiros e o novo valor é adicionado ao final do array.

Cada valor do array é escrito no terminal e no final do programa a memória dessa lista é liberada para evitar memory leak.
```c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *list = malloc(3 * sizeof(int));
    list[0] = 1;
    list[1] = 2;
    list[2] = 3;
	
    // Time passes
	
    int *tmp = realloc(list, 4 * sizeof(int));
    if (tmp == NULL)
    {
        free(list);
        return 1;
    }
    list = tmp;
	
    list[3] = 4;
	
    for(int i = 0; i < 4; i++)
    {
        printf("%i\n", list[i]);
    }
	
    // Time passes
	
    free(list);
    return 0;
}
```
### Linked Lists
Uma forma eficiente de lidar com uma lista de dados que tenham um tamanho dinâmico é usar ponteiros e `struct` para conectar os dados, formando uma estrutura de dados chamada **Linked List**. Adicionar novas elementos nessa estrutura é mais eficiente por não precisar realocar memória. Cada elemento dessa lista, chamada de `node` tem duas propriedades, uma para armazenar o valor e outra que aponta para o próximo `node`. O `node` vai ser declarado pela seguinte `struct`.

`typedef struct` torna `node` um tipo personalizado disponível para ser usado no programa.

```c
typedef struct node
{
    int number;
    struct node *next;
}node;
```

A lista também vai ser um ponteiro que leva para o `node` inicial. Essa lista inicia vazia, por não apontar para nenhum `node`.
```c
node *list = NULL;
```

Novos `node`s podem ser alocados e conectados com essa lista. Nesse caso, foi usado um laço de repetição para criar 3 `node`s para essa lista. 
```c
for (int i=0; i < 3; i++)
{
	
}
```

Usando `malloc` o endereço de memória com tamanho suficiente para esse `node` é reservado, caso não tenha endereço disponível o programa finaliza. 
```c
node *n = malloc(sizeof(node));
if (n == NULL)
{
	return 1;
}
```

Caso o endereço seja guardado no ponteiro, o valor escolhido pelo usuário é armazenado no `node`. Em seguida, o ponteiro `next` do `node` aponta para a lista. Inicialmente a lista apontava para `NULL`, então o primeiro `node` também vai apontar para `NULL`. Mas em seguida a lista passa a apontar para o primeiro `node` da lista.

O `next` do segundo `node` vai apontar para a lista, que aponta para o primeiro `node`, e depois a lista passa a apontar para o segundo `node` que foi recentemente criado. 

Esse ciclo faz cada `node` ser adicionado no inicio da lista, enquanto o primeiro node adicionado esteja lá no final (*Last in First out*). 
```c
printf("Number: ");
scanf("%i", &n->number);

n->next = list;
list = n;
```

Para finalizar o programa e evitar **memory leak**, o laço de repetição foi criado para percorrer a cadeia de nodes e liberar cada um. O ponteiro `ptr` percorre a lista e vai representar o `node` sendo liberado. O ponteiro `tmp` vai apontar para o próximo `node` que deve ser liberado. Quando `ptr` for liberado, ele passa a apontar para o mesmo endereço que `tmp`, ou seja, para o próximo `node` da cadeia. Quando alcançar o último `node`, o laço de repetição chega ao fim porque `ptr` vai ser tornar nulo.

O ponteiro `tmp` é indispensável por guardar referência de qual o próximo elemento da lista. Quando `ptr` é liberado, essa referência é perdida.
```c
for (node *ptr = list; ptr != NULL; )
{
	printf("VALOR :%i\n", ptr->number);
	node *tmp = ptr->next;
	free(ptr);
	ptr = tmp;
}

return 0;
```

Essa lista funciona como um **stack**,  cada elemento adicionado vai estar no "topo" da lista, por isso o  último elemento é o primeiro a ser removido, *Last in First Out*.

Essa estrutura de nodes também pode ser ordenada e passar por algoritmos de busca. Depois que o `node` é alocado e recebe o seu valor, existem 3 possibilidades, inserir no início, no meio ou no fim. Caso a lista esteja vazia, o seu ponteiro passa a apontar para o  `node` que vai estar no inicio da lista.
```c
if (list == NULL){
	list = n;
}
```

Caso o valor do `node` seja menor que o `node` no topo da lista, o `node` recém criado aponta para o `node` no início e a lista passa a apontar para esse `node` recém criado.
```c
else if (n->number < list->number)
{
	n->next = list;
	list = n;  
}
```

Quando o valor do novo `node` for maior ou igual ao valor que está no início da lista, a lista vai ser percorrida com o ponteiro `ptr` enquanto ele não for vazio e no final de cada laço ele passa para o próximo node na fila. 

Se o ponteiro `next` do `ptr` for vazio, a lista inteira foi percorrida e o `node` apontado por `n` vai ser adicionado como o próximo da fila. Isso finaliza o laço de repetição e faz o `node` com maior valor ir para o final da fila. 

Se o ponteiro `next` do `ptr` da lista não for vazio, o valor do `node` `n`  é comparado com o valor de `next` do `node` `ptr`. Nesse caso, `n` aponta para o `node` apontado por `ptr` e o node em `ptr` aponta para o `node` `n`.    
```c
else
{
	for (node *ptr = list; ptr != NULL; ptr = ptr->next)
	{
		if (ptr->next == NULL)
		{
			ptr->next = n;
			break;
		}
		else if (n->number < ptr->next->number)
		{
			n->next = ptr->next;
			ptr->next = n;
			break;
			
		}
	}
	
}    
```

### Trees
**Tree** é uma estrutura de dados onde um node é a raiz que se conecta com nodes filhos que crescem como ramos de uma árvore. Em uma **Binary Tree**, um node vai ter dois ponteiros para conectar com outros nodes. Um ponteiro leva aos valores menores que e outro leva aos valores maiores, essa comparação é feita com o node atual. No exemplo que o David apresenta, uma lista de sete valores onde o node raiz no representa o valor médio, seus filhos da direita seriam maiores e seus filhos da esquerda seriam menores.
```
         |4|
   |2|        |6|
|1|   |3|  |5|   |7|
```
### Dictionaries
**Dicionário** é mais uma estrutura de dados com a associação de chaves e valores. Cada chave aponta para um valor, assim como um dicionário gramatical onde a palavra representa a chave, e o seu significado é o valor. Isso torna a busca de elementos muito mais efetiva por que não é necessário percorrer os elementos da lista para retornar determinado valor.

### Hashing and Hash Tables
Uma implementação eficiente de um dicionário é uma **Hash Table**. Essa estrutura separa seus dados em **buckets**, criando grupos de valores relacionados entre si. Essa relação é definida por um **função hash**, que vai processar o valor sendo adicionado na tabela e vai retornar um valor que representa o seu **bucket**. É importante que o retorno da **função hash** seja consistente, um valor específico sempre vai ter o mesmo resultado. O motivo de separar valores em **buckets** ser mais eficiente é parecido com o motivo que torna **Binary Search** mais eficiente, separar grupos de valores permite acessar dados rapidamente sem precisar percorrer toda a estrutura. Os **buckets** de uma **Hash Table** podem ser outras estruturas, como **arrays** ou **linked lists**, isso pode variar dependendo do caso em que vai ser usado. Isso também vai depender do método de tratamento de colisões. Quando dois valores recebem a mesma chave pela **hash function**, acontece uma colisão.

### Tries
Uma **Trie** é outra estrutura de dados que usa uma árvores de arrays para armazenar dados. No exemplo usado por David, ele apresenta um array com espaço para cada letra do alfabeto. Quando um nome deve ser armazenado, o elemento daquela array que tem o primeiro caractere do nome aponta para o elemento de outro array que tenha o próximo caractere. Esse ciclo se repete até o último caractere da palavra ter um elemento com o seu valor e um sinal representando que ali é o final da palavra. Fazer busca e inserção de novos dados é bem eficiente, mas o espaço de memória usado é maior porque cada caractere pode estar ligado com mais um array de caracteres. 

### Resultado de Estruturas de Dados
Ao longo das aulas anteriores, mas principalmente essa, estruturas de dados podem se tornar mais eficientes em troca de espaço de memória ou algoritmos mais complexos. Identificar qual a estrutura adequada para cada situação é necessário para o programa fazer seu papel de forma mais eficiente possível.
