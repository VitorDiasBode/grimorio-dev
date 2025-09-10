## Week 2 - Arrays
Essa aula se inicia com o David apresentando níveis de leitura e criptografia. Essas questões iniciais serão vistas no decorrer dos ensinamentos dessa aula.

### Processo para compilar o código
Enquanto explicava sobre criptografia, tornou-se necessário passar para a explicação de compilação do código. O **código fonte** é passado para o **compilador**, que o transforma em **código de máquina** (instruções em binário). O processo do compilador é quebrado em 4 passos.

1. **Preprocessing** - Nesse processo o compilador remove comentários e identifica quais são as expressões vindas de bibliotecas e quais são as funções prototipadas. Com isso as expressões vindas de fontes externas, como funções vindas de bibliotecas (`#include <stdio.h>`) possam ser unidas para o processo de compilação.  
   
2. **Compiling** - O código escrito na linguagem **C** é convertido para linguagem **assembly**. Essa linguagem deve ser convertida por que o **assembly** tem um conjunto de instruções de baixo nível que correspondem a operações do processador, por exemplo ler dados inseridos pelo terminal.
   
3. **Assembling** - O código **assembly** ser torna uma sequência de 0s e 1s, que vai ser lida e interpretada pelo processador. O código **assembly** é convertido em **código de máquina**. 
   
4. **Linking** - Aquelas expressões que foram processadas por virem de arquivos externos, são ligadas e integradas ao programa final em binário. Esse programa final é o executável gerado pelo comando `make`.
### buggy.c
Ele apresenta um sentido para o termo debugging e mostra como esse processo pode ser feito em diferentes níveis. Inicialmente ele lê o código linha por linha e vai conversando com alguém imaginário para determinar o que está acontecendo. Esse processo se chama **rubber ducking debugging**, onde se conversa com um pato de borracha para identificar o erro. 

O próximo passo é usar `printf()` para mostrar no terminal o valor das variáveis em determinados momentos do código. Ele traz para o exemplo um código para escrever no terminal uma coluna de `#`. No `for` o sinal de `<=` é usado para criar um `#` além do necessário. Com o `printf()` ele mostra que o número de repetições está aumentando por que a contagem inicia com `0`.

 O último passo ele mostra funcionalidades do **VSCode**, junto com algum tipo de plugin do **CS50**, onde o código pode ser pausado e lido em linha por linha para ter mais clareza do que está acontecendo dentro do código.
### Types
Aqui ele passa a falar sobre diferentes tipos de dados e como eles se relacionam com a memória. Cada tipo de variável direciona para um conjunto de **bits** da memória e o valor da variável fica armazenada naquele endereço de memória. Por isso uma variável `long` ocupa mais memória que uma variável `int`, seu número depende de mais bit para ser representado.

O novo conceito apresentado é o de arrays. Ao invés de armazenar valores inteiros em 3 variáveis diferentes, um array representa uma lista com os valores necessários, definidos pelo seu comprimento.

### scores.c
Esse programa calcula a média de 3 notas diferentes usando um array para armazenar esse valores. O array é declarado com comprimento 3 e um tipo. Em seguida os valores de cada um são definidos, para serem somado e divididos por 3. Novamente o conceito de **casting** é utilizado para que o resultado dessa operação não seja um inteiro.
```c
#include <stdio.h>

int main(void)
{
    int scores[3];
    scores[0] = 72;
    scores[1] = 73;
    scores[2] = 33;
	
    printf("Average: %f\n", (scores[0] + scores[1] + scores[2]) / (float) 3);
}
```

A segunda versão desse código se torna mais interessante, o comprimento da array depende de uma constante que possa ser modificada para adicionar novas notas. Cada elemento dessa lista é adicionado com um laço de repetição que depende do valor da constante que iniciou o array. Depois uma função `average()` é implementada para iterar o array e calcular a média, mesmo que o array tenha sido iniciado com um comprimento que não seja 3. 
```c
#define N 5

float average(int length, int array[]);

int main(void)
{
    int scores[N];
    for (int i=0; i<N; i++)
    {
        int new_score;
        printf("Score: ");
        scanf("%i", &new_score);
        scores[i] = new_score;
    }
    printf("Average: %f\n", average(N, scores));
}

float average(int length, int array[])
{
    float sum = 0.0;
    for (int i=0; i<length; i++)
    {
        sum += array[i];
    }
    return sum / length;
}
```

### hi.c
Esse programa simplesmente apresenta 2 textos no terminal. O principal desse programa foi explicar que uma string é um array de caracteres, mas uma vez trazendo explicação sobre os diferentes tipos de dados e a como se relacionam com a memória. O array bidimensional recebe as palavras com a função `strcpy()`, da biblioteca `string.h`. Cada caractere desse array é usado para mostrar no terminal cada palavra.
```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char words[2][10];
    strcpy(words[0], "HI!");
    strcpy(words[1], "BYE!");
	
    printf("%c%c%c\n", words[0][0], words[0][1], words[0][2]);
    printf("%c%c%c%c", words[1][0], words[1][1], words[1][2], words[1][3]);
}
```

### length.c
Esse programa recebe uma string e retorna a quantidade de caracteres. Esse programa serve para explicar que uma string é um array de caracteres, mas se a palavra não tiver caracteres suficiente para ocupar todo o array, `'\0'` é o caractere que representa o fim da string. Usando o `while` ele percorre cada caractere enquanto o caractere não for `'\0'` a variável que conta a quantidade de caracteres aumenta. No final desse laço de repetição a função retorna a variável com a quantidade de caracterres.
```c
int string_length(char s[]);

int main(void)
{
    char name[10];
    printf("Name: ");
    scanf("%s", &name);
	
    printf("%i", string_length(name));
}

int string_length(char s[])
{
    int n = 0;
    while (s[n] != '\0')
    {
        n++;
    }
    return n;
}
```

Em seguida ele mostra como usar bibliotecas é prático e necessário para ganhar produtividade. O código feito está na biblioteca `string.h` e o código fica mais simples.
```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[10];
    printf("Name: ");
    scanf("%s", &name);
	
    printf("%i", strlen(name));
}

```

### string.c
Esse programa usa laço de repetição e a função `strlen()` para escrever uma string no terminal. O mais interessante desse programa foi declarar duas variáveis no `for`, uma que seria implementada e outra para definir a condição para terminar o laço. Isso é interessante por reduzir a quantidade de vezes que uma função deve ser chamada.
```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char string[10] = "";
    printf("Input: ");
    scanf("%s", string);

    for(int i=0, n=strlen(string); i<n; i++)
    {
        printf("%c", string[i]);
    }
	
    printf("\n");
}
```

### uppercase.c
Esse programa recebe lê uma string do terminal e retorna uma string com as mesmas letras maiúsculas. É feito parecido com o `length.c`, no sentido de fazer criar uma solução para depois mostrar uma biblioteca que já faz isso. Outra parte importante é usar a **tabela ascii** para determinar se o caractere é uma letra e depois para tornar a letra maiúscula.
```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void)
{
    char string[10] = "";
    printf("Before: ");
    scanf("%s", string);
	
    printf("\nAfter: ");
    for(int i=0, n=strlen(string); i<n; i++)
    {
        printf("%c", string[i] - 32);        
    }
	
    printf("\n");
}
```

```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void)
{
    char string[10] = "";
    printf("Before: ");
    scanf("%s", string);
	
    printf("\nAfter: ");
    for(int i=0, n=strlen(string); i<n; i++)
    {
        printf("%c", toupper(string[i]));        
    }
	
    printf("\n");
}
```

### greet.c
Esse programa é usado para explicar como um programa pode receber parâmetros do terminal. A função `main()` pode ser declarada com 2 argumentos. Primeiro `int argc` é a quantidade de argumentos e segundo `char *argv[]` é um vetor de argumentos recebidos. O `argv` é recebe como primeiro argumento o nome do próprio arquivo, seguido de cada palavra que tenha sido escrito no terminal depois de chamar o comando de executar.

Mais uma vez ele explica sobre a importância de validar os dados para garantir a resposta correta para o usuário e define que se a quantidade de argumentos não estiver correta, o programa vai ter uma resposta padrão.
```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    if (argc == 2){
        printf("Hello, %s\n", argv[1]);
    }else{
        printf("Hello World!");
    }
}
```

### status.c
Esse último programa apresenta o que são status de um programa e como pode ser lido via terminal. A função `main()` retorna um inteiro que representa o status do programa. Nesse caso, se a quantidade de argumentos for incorreta, o status retornado é 1. Se não, a saudação é entregue ao usuário e o status 0 é retornado. 

O comando `echo $?` pode ser passado via terminal e traz o status do último comando que tenha sido passado.
```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    if (argc != 2){
        return 1;
    }else{
        printf("Hello, %s\n", argv[1]);
        return 0;
    }
}

//echo $? 
```

### Terminando a aula
Para o final da aula ele apresenta como funciona o processo de criptação usando os conceitos usados anteriormente com cadeia de caracteres. 