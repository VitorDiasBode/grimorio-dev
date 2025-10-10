## Week 4 - Memory
### Memory
Para apresentar o conceito de memória, David inicia explicando sobre Pixel Art e, em seguida, sobre Hexadecimal. Pixel Art é um estilo interessante de criar desenhos porque usa quadrados que se conectam para gerar uma forma. Tudo aquilo mostrado em telas de um computador funciona assim, mas possuem muitos quadrados pequenos que se tornam imperceptíveis.

Para desenhar uma carinha feliz usando 8 quadradinhos de largura e altura, alguns quadrados vão ser pretos e outros vão ser brancos. Essa imagem poderia ser vista como um array de 8 linhas e cada linha é um array de 8 colunas. Cada posição desse array vai ter 0 para representar branco e 1 para representar o preto. Dessa forma, o programa pode armazenar dados que representam uma imagem.

Pensando nas cores usadas em uma Pixel Art, cada quadrado pode ir além de branco e preto. O **RGB** serve para isso, um termo referente a combinação de vermelho, verde e azul. A combinação de valores numéricos para essas 3 cores básicas forma uma variedade de cores. Os valores numéricos usados não sabe base 10, de 0 até 9. São números **hexadecimal**, base 16. Os números hexadecimais usam caracteres do `A` ao `F` para representar números de 10 ao 15.

Valores em base hexadecimal também são usados para representar endereços de memória que armazenam dados em bit.

### Pointers
As variáveis geralmente representam dados armazenados em determinado endereço de memória. Mas também podem ser criadas para armazenar o endereço de outra variável, essas variáveis são chamadas **ponteiros**.

No exemplo do programa `addresses.c`, a variável `n` armazena um número inteiro e o ponteiro `p` aponta para a variável `n`. Para declarar um ponteiro, usa-se a keyword para definir o tipo de dado armazenado pela variável que ele aponta. O símbolo `*` é usado antes do nome do ponteiro, ele quem define que a expressão `p` é um ponteiro. O ponteiro recebe o endereço da variável, por isso o símbolo `&`.

```c
int main(void)
{
    int n = 50;
    int *p = &n;
}
```

Durante a apresentação, o autor mostra diferentes formas de usar ponteiros e sua relação com os símbolos `*` e `&`.  Primeiro, ao apresentar o valor do ponteiro com `printf()`, o [[How to use scanf() in C#Conversion Specifiers e Type Specifiers|conversion specifier]] usado é `%p`.

```c
printf("%p\n", p);
```

Como visto anteriormente, símbolo `&` é usado para acessar o endereço de uma variável. Por isso o código seguinte também mostra o endereço de `n`.

```c
printf("%p\n", &n);
```

Usando o ponteiro `p` também é possível acessar e mostrar o valor da variável que ele aponta.

```c
printf("%i\n", *p);
```

### Strings
Em **C**, mesmo que strings existam e possam ser armazenadas, elas não são um tipo de dado nativo da linguagem. Uma string, sendo uma cadeia de caracteres, é declarado como um array de caracteres. Como array é uma estrutura que armazena diversos valores, ele funciona como um ponteiro apontando para um endereço que armazena um dado.

Por isso, `printf("%p\n", s);` mostra o endereço do primeiro elemento desse array.

```c
int main(void)
{
    char s[10] = "HI!";
	
    printf("%p\n", s);
    printf("%p\n", &s[0]);
	printf("%p\n", &s[0]);
    printf("%p\n", &s[1]);
    printf("%p\n", &s[2]);
    printf("%p\n", &s[3]);
}
```

Outra forma de declarar uma string é criar um ponteiro de caracteres. O ponteiro `s2` aponta para uma string literal.

```c
int main(void)
{
    char s[10] = "HI!";
    char* s2 = "BYE!";
	
    printf("%p\n", s2);
    printf("%p\n", &s2[0]);
    printf("%p\n", &s2[1]);
    printf("%p\n", &s2[2]);
    printf("%p\n", &s2[3]);

    printf("%s\n", s2);

    printf("%c\n", s2[0]);
    printf("%c\n", s2[1]);
    printf("%c\n", s2[2]);
    printf("%c\n", s2[3]);
    
}
```

### Pointer Arithmetic's
Ponteiro armazenam um endereços de memória que são definidos por um valores numéricos, por isso é possível usar aritmética para declarar expressões. Um ponteiro que aponta para uma string ( `char *s = "HI!"` ), pode ter o seu primeiro caractere acessado com o símbolo `*`. Usando o operador de soma, os caracteres posteriores também podem ser acessados. O caractere `*` faz desreferência, por isso acessa o valor armazenado no endereço de memória.

```c
int main(void)
{
    char *s = "HI!";
    printf("%c\n", *s);
    printf("%c\n", *(s + 1));
    printf("%c\n", *(s + 2));
}
```

Usando aritmética também é possível acessar um fragmento da string a partir de determinado caractere. `s+1` faz o ponteiro avançar para o segundo caractere da string e o `printf()` vai escrever todos os caracteres até o caractere nulo `\0`.

```c
int main(void)
{
    char *s = "HI!";
	printf("\n%s\n", s+1);
}
```

### Copying and malloc
A função `malloc` serve para alocar memória é gerar um novo ponteiro. Isso é importante para controlar memória manualmente e para gerar cópia dos dados que estariam armazenados no endereço de alguma variável. 

No código a baixo, somente a inicial de `s2` deveria ser maiúscula, mas o resultado é que as duas são alteradas. Isso acontece por que `s2` é um ponteiro, ele leva ao mesmo endereço que `s1`, então os dois acessam o mesmo dado.

```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void)
{
    char s1[] = "hi!";
    char *s2 = s1;

    printf("Antes:\n");
    printf("s1: %s\n", s1);
    printf("s2: %s\n", s2);

    s2[0] = toupper(s2[0]);

    printf("Depois:\n");
    printf("s1: %s\n", s1);
    printf("s2: %s\n", s2);
}


```

Com a função `malloc` a variável `s2` recebe um bloco de memória suficiente para o texto na variável `s1`. Lá em baixo a função `strcpy` pode copiar os dados armazenados na variável para outro endereço que é representado pela variável `s2`.

```c
int main(void)
{
    char s1[] = "hi!";
    char *s2 = malloc(strlen(s1) + 1);

    if (s2 == NULL) 
    {
        return 1;
    }

    strcpy(s2, s1);

    printf("Antes:\n");
    printf("s1: %s\n", s1);
    printf("s2: %s\n", s2);

    s2[0] = toupper(s2[0]);

    printf("Depois:\n");
    printf("s1: %s\n", s1);
    printf("s2: %s\n", s2);

    free(s2);
}
```

Para liberar essa memória a função `free` recebe como parâmetro o ponteiro e aquele endereço de memória vai estar disponível para o sistema pode usar. Os dados não vão estar perdidos em algum endereço de memória.

O código a seguir declara um array com 1024 espaços, todos não inicializados. Quando o laço de repetição percorre o array, dados aleatórios são apresentados na tela. Esses dados são valores que foram armazenados na memória e não foram sobrescritos ainda.

```c
#include <stdio.h>

int main(void)
{
    int scores[1024];
    for (int i = 0; i < 1024; i++)
    {
        printf("%i\n", scores[i]);
		
    }
}
```

### Swapping
Como as variáveis são limitadas ao escopo em que estão declaradas, uma função que recebe 2 variáveis como parâmetros para trocar os seus valores.

No exemplo abaixo, quando a função `swap` é chamada, variáveis `a` e `b` são declaradas com o valor das variáveis `x` e `y`. Mas isso não modifica o valor das variáveis originais.
 
```c
#include <stdio.h>

void swap(int a, int b);

int main(void)
{
    int x = 1;
    int y = 2;

    printf("X is %i, Y is %i\n", x, y);
    swap(x, y);
    printf("X is %i, Y is %i\n", x, y);
}

void swap(int a, int b)
{
    int tmp = a;
    a = b;
    b = tmp;
}
```

Para solucionar esse problema, a função `swap` deve receber ponteiros como parâmetro. Para que a variável `tmp` possa receber o valor apontado por `a`, o símbolo `*` é usado. A linha seguinte tem a mesma lógica e o seu valor trocado pelo valor no endereço do ponteiro `b`. E por último o valor no ponteiro `b` é trocado pelo valor que estava em `tmp`.

É necessário que o endereço de `x` e `y` sejam passados como parâmetros com o símbolo `&`.

```c
#include <stdio.h>

void swap(int* a, int* b);

int main(void)
{
    int x = 1;
    int y = 2;

    printf("X is %i, Y is %i\n", x, y);
    swap(&x, &y);
    printf("X is %i, Y is %i\n", x, y);
}

void swap(int* a, int* b)
{
    int tmp = *a;
    *a = *b;
    *b = tmp;
}
```