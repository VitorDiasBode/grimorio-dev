## Week 3 - Algorithm
O David inicia essa aula falando o conceito de algoritmo e relembrando algumas partes que foram apresentadas nas primeiras aulas. Para isso ele volta a mostrar que a ciência da computação trabalha para resolver problemas. Essa solução envolve uma **entrada**, um **processamento** e uma **saída** sendo o resultado dessa solução. O **algoritmo** é a sequência de passos que realiza essa solução.

### Linear Search
Semelhante ao exemplo anterior que ele usa para buscar um número na lista telefônica de forma mais produtiva, aqui ele mostra uma sequência de armários com dinheiro do Monopoly.  O problema a ser resolvido é encontrar se a nota de 50 está dentro de um dos armários. Ele esclarece que cada armário representa um espaço de memória com um valor numérico e que o computador precisa verificar cada elemento individualmente chegar ao resultado.

Partindo para exemplos mais claros, ele usa pseudocódigos e exemplos visuais para ensinar sobre **Linear Search**. Esse algoritmo percorre toda a lista de elementos e checa um por um. Quando o elemento buscado é encontrado, a função retorna **true**. Quando toda a lista é varrida, o sistema retorna **false**.

### Binary Search
Mais uma vez voltando para o exemplo da lista telefônica, ele mostra que o algoritmo **Linear Search** não vai ser muito produtivo quando o elemento buscado está no final da lista. 

Para melhorar esse ponto, considerando que a lista está ordenada, o algoritmo **Binary Search** é usado. Ele vai até o elemento que estiver no meio da lista. Caso ele seja maior que o número buscado, ele repete esse processo indo do primeiro elemento até o elemento que estava checando. Novamente o elemento que estiver no meio dessa sublista é checado para definir se o elemento que está sendo buscado está para a esquerda ou para a direita.
```
| a | b | c | d | e | f | g | h |
---------------------------------
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |

elemento buscado = f 
inicio = 0
meio = 4
final = 8

enquanto o inicio for menor que o final
	se o elemento do meio for igual ao elemento buscado, retorna verdadeiro
	
	se o elemento do meio estiver à frente do elemento buscado, o final recebe o valor do meio - 1
	
	se o elemento do meio estiver atrás do elemento buscado, o inicio recebe o valor do meio + 1
	
```

### Running Time
Nessa seção o David questiona sobre como definir que o algoritmo **Binary Search** é melhor que o **Linear Search**. O primeiro é mais eficiente em fazer buscas, para ajudar a categorizar algoritmos ele apresenta o conceito de **running time**. Esse conceito é declarado a partir do número de passos necessários para concluir um algoritmo.

Um algoritmo **Linear Search** buscando um elemento em uma lista com `n` elementos iria passar por `n` passos caso o elemento buscado esteja no final. Claro que ele poderia estar no meio ou no início mas é possível que ele esteja na última posição da lista. Para esse conceito, alguns valores são irrelevantes para determinar esse **tempo de execução** (**running time**). Esse tempo de execução é considerando o pior caso.

Um algoritmo **Binary Search** iria passar por no máximo `log n` passos para encontrar um elemento na lista ordenada de `n` elementos. Matematicamente, logaritmo representa quantas vezes uma lista pode ser dividida pela metade até restar um único elemento. Por exemplo, quantas vezes uma metade da lista pode ser cortada pela metade.

O símbolo usado para representar esse **tempo de execução** de um algoritmo é a notação **Big O ("O" maiúsculo)** então:
- `O(n)` - Linear Search
- `O(log n)` - Binary Search

A notação **Big O** é usada para determinar o tempo de execução no pior dos casos, quando se avalia o melhor dos casos, o símbolo Ω é usado. No melhor dos casos um algoritmo de **Linear Search** encontra o elemento na primeira tentativa, o mesmo aconteceria com um algoritmo de **Binary Search**, por isso;
- `Ω(1)` - **Linear Search** e **Binary Search**

A notação `Θ( )` é usada quando o melhor e o pior caso usam o mesmo número ações. Exemplos desse tipo de algoritmo virão mais à frente.

Essas notações que definem a eficiência de um algoritmo conforme o tamanho da entrada cresce recebem o nome **asymptotic notation** ou **notação assintótica** em português.
### search.c
Nessa seção da apresentação ele parte do pseudocódigo para código em C. No primeiro exemplo um array de números é criado e um laço de repetição percorre o array em busca do valor informado pelo usuário. Caso o valor seja encontrado o programa imprime uma mensagem e o status é 0. Caso o valor não seja encontrado, o programa imprime outra mensagem e o status é 1.
```c
#include <stdio.h>

int main(void)
{
    int numbers[] = {20, 500, 10, 5, 100, 1,50};
	
    int n;
    printf("Number: ");
    scanf("%i", &n);
	
    for (int i = 0; i < 7; i++)
    {
        if (numbers[i] == n)
        {
            printf("Found\n");
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
	
}

```

Esse código é adaptado para ler e buscar strings ao invés de inteiros. A biblioteca `string.h` é usada para comparar o valor das strings. Ele explica como a função `strcmp()` é flexível porque pode retornar 3 valores diferentes. Com valor de retorno igual a zero, as duas palavras são iguais, com valor de retorno maior que zero, as strings são diferentes mas a primeira é maior que a segunda. Com valor de retorno menor que zero, as strings são diferentes, mas a primeira é menor que a segunda.
```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char *strings[] = {"battleship", "boot", "cannon", "iron", "thimble", "top hat"};
    
    char s[50];
    printf("String: ");
    scanf("%s", s);
	
    for (int i = 0; i < 6; i++)
    {
        if (strcmp(strings[i], s ) == 0)
        {
            printf("Found\n");
            return 0;
        }
    }
	
    printf("Not found\n");
    return 1;

}
```
### phonebook.c
Esse programa é similar com aos anteriores, usando o algoritmo **Linear Search**, com a adição de uma segunda lista relacionados à primeira. O nome passado pelo usuário é buscado para o programa apresentar o número associado com aquele nome e retornar status 0. É interessante como o David fez esse exemplo preparando a introdução do conceito de **estrutura de dados**.

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char *names[] = {"David", "John", "Yuliia"};
    char *numbers[] = {"617", "949", "617"};

    char name[50];
    printf("Name: ");
    scanf("%s", name);

    for (int i = 0; i < 3; i++)
    {
        if (strcmp(names[i], name) == 0)
        {
            printf("Found %s\n", numbers[i]);
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}
```
### Structs
Existem diferentes tipos de dados para diferentes tipos de informações. Mas em situações onde uma informação é composta por dados diferentes é necessário criar uma `struct`. Seguindo o exemplo da agenda telefônica, a estrutura de dados struct pode ser usada para definir uma pessoa composta por nome e um número de telefone.
```c
#include <stdio.h>
#include <string.h>

typedef struct
{
    char name[25];
    char number[25];
}person;

int main(void)
{
    person people[3];
	
    strcpy(people[0].name, "David");
    strcpy(people[0].number, "617");
	
    strcpy(people[1].name, "John");
    strcpy(people[1].number, "949");
	
    strcpy(people[2].name, "Yuliia");
    strcpy(people[2].number, "617");
    
	
    char name[50];
    printf("Name: ");
    scanf("%s", name);
	
    for (int i = 0; i < 3; i++)
    {
        if (strcmp(people[i].name, name) == 0)
        {
            printf("Found %s\n", people[i].number);
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}

```
### Sorting
Essa seção tem conexão com o algoritmo de **Binary Search** onde os dados devem estar ordenados. De maneira visual, com pessoas segurando números, David mostra como o computador vai lidar com a necessidade de ordenar uma lista. O exemplo inicial é simples para que o conceito possa ser entendido antes de ser implementado em código.

### Selection Sort
Esse método percorre a lista diversas vezes. Em cada repetição, o menor número é identificado e colocado na sua posição à esquerda. Na lista, `i` representa a posição que deve receber o menor valor. Depois da primeira repetição, `i` é atualizado para que o segundo menor valor esteja na posição correta. Esse processo continua até que todos os números estejam ordenados.

Voltando a lidar com a eficiência no tempo de execução, a notação para esse método é `O(n²)`. No melhor dos casos, onde a lista já esteja ordenada, todo o processo de verificação do menor número ainda acontece, então a notação é `Ω(n²)`. Como foi dito anteriormente, quando o melhor e o pior caso tem a mesma eficiência, a **notação assintótica** usada é `Θ(n²)`.   

### Bubble Sort
Esse método trabalha de forma similar ao **Selection Sort**, mas ao invés de procurar o menor valor, ele vai percorrer toda a lista ajustando pares de posição. No final da primeira execução, o maior elemento vai estar no final da lista e os valores comparados em pares foram reposicionados. Quando nenhuma troca é necessária entre os pares comparados, o algoritmo é finalizado.

A **notação assintótica** desse algoritmo também é `O(n²)`, mas no melhor dos casos, com a lista ordenada, é `Ω(n)`.
### Recursion
A recursão é um conceito usado para se referir a um passo ou função que volta para si mesmo. Para mostrar esse conceito ele usa um exemplo da semana 0. Para buscar um contato na lista de agenda telefônica, vai até a metade e compara se o nome buscado está para a esquerda. Em seguida repete o processo na metade correspondente, seguindo a lógica de sempre dividir a lista para definir a direção da busca.

### iteration.c
Recursão é a técnica em que uma função chama a si mesma para repetir comandos. Laços de repetição também repetem comandos mas são chamados de iteração. O programa criado para apresentar esse conceito escreve uma pirâmide de caracteres. O algoritmo recebe um valor inteiro que representa a altura dessa pirâmide. Para cada camada ele escreve uma quantidade de `#` igual ao número da camada atual.
```c
#include <stdio.h>

void draw(int n);

int main(void)
{
    int height;
    printf("Height: ");
    scanf("%i", &height);

    draw(height);
}

void draw(int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < i + 1; j++)
        {
            printf("#");
        }
        printf("\n");
    }
}
```

### recursion.c
Esse programa continua escrevendo uma pirâmide de caracteres, agora usando recursão junto com iteração. O primeiro passo da função `draw` é checar se o parâmetro que define a camada é igual a zero. Nesse caso, a função termina. Por exemplo, se `n = 4`, para fazer a camada 4 precisa da camada 3 e para fazer a camada 3, precisa da camada 2. Com essa lógica a função draw pode ser chamada com o parâmetro sendo o número de camadas - 1. Assim a função recursiva vai desenhar a camada anterior à atual.
```c
#include <stdio.h>

void draw(int n);

int main(void)
{
    int height;
    printf("Height: ");
    scanf("%i", &height);
	
    draw(height);
}

void draw(int n)
{
    if (n <= 0)
    {
        return;
    }
	
    draw(n -1);
	
    for (int i = 0; i < n; i++)
    {
        printf("#");    
    }
    printf("\n");
}
```
 
### Merge Sort
Com o conceito de recursividade, o algoritmo de **Merge Sort** é apresentado. A lista que vai ser ordenada é dividida pela metade de maneira recursiva. Isso significa que a lista inteira vai ser separada até cada sublista ter um elemento. Cada elemento dessas sublistas é reposicionado de acordo com o seu valor. Dessa forma, cada sublista vai ter seus elementos comparados e combinados com os elementos da sua outra metade já ordenada, formando progressivamente a lista final ordenada. 

Esse algoritmo separa os elementos da lista ao máximo possível. Cada divisão corta a lista ao meio, resultando em aproximadamente `log₂(n)` divisões. Por isso a **notação assintótica** é `O(n log n)`.

```
                | a | b | c | d | e | f | g | h |
	
              | a | b | c | d |---| e | f | g | h |   
		
          | a | b |---| c | d |---| e | f |---| g | h |   

| a |---| b |---| c |---| d |---| e |---| f |---| g |---| h |
```
### Sort Race
Para finalizar, ele mostra dados sendo ordenados por **Selection Sort**, **Merge Sort** e **Bubble Sort**. No final, fica claro que o **Merge Sort** foi mais eficaz com um grande volume de dados, apesar de ser mais complexo e tenha mais código para ser implementado.