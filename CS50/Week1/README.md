## Week 1 - C
Aqui é apresentado o **Visual Studio Code** e qual o seu papel para desenvolver aplicação em C. O para o desenvolvimento do primeiro código é explicado que a linguagem de programação serve para que possamos nos comunicar com o computador, que armazena valores binários. O **código fonte** é convertido para binário pelo compilador. No meu caso, fiz a instalação do **MSYS2**.

### hello.c
O primeiro código usado foi um clássico **Hello World** para apresentar texto no terminal e em sequência fazer concatenação de string.

No curso ele usava uma biblioteca para tornar algumas coisas mais simples, como o processo para ler input e declarar variáveis. Eu não consegui acessar essa biblioteca e estudei como fazer o código [[How to use scanf() in C]].

```c
#include <stdio.h>

int main(void)
{
    char answer[] = ""; 
    scanf("%s", answer);
    printf("\nHello, %s", &answer);
}
```

### compare.c
Para a apresentação do compare ele já tinha explicado sobre variáveis e sobre tipos de dados. No código o valor de `x` e `y` eram lidos e comparados. A estrutura de decisão foi uma para determinar se `x` era maior, menor ou igual a `y`.

Considerei importante que ele apresentou que um código não precisa somente **funcionar**, ele pode ser **aprimorado** em termos de performance ou legibilidade. Isso ele faz desde a apresentação anterior.

```c
#include <stdio.h>

int main(void)
{
    int x;
    int y;
     
    printf("What's x? ");
    scanf("%i", &x);
	
    printf("What's y? ");
    scanf("%i", &y);
	
    if (x < y)
    {
        printf("x is less than y\n");
    }else if (x > y)
    {
        printf("x is not less than y\n");   
    }else
    {
        printf("x is equal to y \n");
    }
	
}
```

### agree.c
Esse código recebe do usuário uma resposta e devolve uma mensagem baseada nisso. A resposta do usuário nesse caso é um caractere ao invés de uma `string` ou `int`. Com essa resposta do usuário podendo ser maiúscula ou minúscula, ele fala sobre validação.

Para isso ele usa o **operador lógico OU** e comenta sobre o **operador lógico E**.
```c
#include <stdio.h>

int main(void)
{
    char c;
    printf("Do you agree? ");
    scanf("%c", &c);
	
    if (c  == 'y' || c == 'Y')
    {
        printf("Agreed.\n");
    }else if (c == 'n' || c == 'N')
    {
        printf("Not Agreed.\n");
    }
}
```

### cat.c
Nesse código ele faz mais uma referência ao que foi realizado no **Scratch**. O programa é feito printar *meow* várias vezes, de acordo coma  escolha do usuário. Mais uma vez ele reforça sobre **aprimorar** o código e algumas versões são feitas. 

Essa parte ele apresenta sobre **funções com retorno** e sobre **laços de repetição** (`for`, `while` e `do while`).
```c
#include <stdio.h>

void meow(int n);
int get_positive_int(void);

int main(void)
{
    int times = get_positive_int();
    meow(times);
}

int get_positive_int(void)
{
    int n;
    do
    {
        printf("Number: ");
        scanf("%d", &n);
    } while (n < 1);
	
    return n;
}

void meow(int n)
{
    for ( int i = 0; i < n; i++)
    {
        printf("meow\n");
    }
}
```

### Correctness, design, style
Mais uma vez é reforçado a importância desses 3 tópicos. Primeiro o código deve estar **correto**, para depois ele ser mais bem **planejado** e seguindo um **estilo padronizado** 



Ambos **corretos** e bem **planejados**, mas sem **estilo**
```c
void meow(int n)
{
    for ( int i = 0; i < n; i++)
    {
        printf("meow\n");
    }
}
```

```c
void meow(int n){for ( int i = 0; i < n; i++){printf("meow\n");}}
```

Ambos **corretos** e seguindo um **estilo**, mas sem bom **planejamento**:
```c
#include <stdio.h>

int main(void)
{
    char c;
    printf("Do you agree? ");
    scanf("%c", &c);

    if (c  == 'y' || c == 'Y')
    {
        printf("Agreed.\n");
    }else if (c == 'n' || c == 'N')
    {
        printf("Not Agreed.\n");
    }
}
```

```c
int main(void)
{
    char c;
    printf("Do you agree? ");
    scanf("%c", &c);

    if (c  == 'y')
    {
        printf("Agreed.\n");
    }else if (c == 'Y')
    {
        printf("Agreed.\n");
    }
    else if (c == 'n')
    {
        printf("Not Agreed.\n");
    }
    else if (c == 'N')
    {
        printf("Not Agreed.\n");
    }
}
```

### calculator.c
Nesse parte ele cria códigos envolvendo matemática entre os dados e apresenta alguns limites relacionados com números muito longos ou a operação entre números inteiros que deveriam retornar um número racional.

Uma operação é realizada para aumentar exponencialmente o valor de um número inteiro até que ele atinja um limite o cálculo para dobrar seu valor retorna 0 e depois um valor negativo. Mesmo tornando a variável em um `long integer`, o erro ainda pode acontecer, mas sendo mais capaz de manter aumentando.

```c
#include <stdio.h>
#include <stdbool.h>

int main(void)
{
    long dollars = 1;

    while(true)
    {
        printf("Here's $%li. Double it and give it to the next person? ", dollars);
        
        char answer;
        scanf(" %c", &answer);
        
        if (answer == 'y')
        {
            dollars *= 2;
        }else{
            break;
        }
    }
    printf("Here's $%li.\n", dollars);
}
```

O último código divide dois valores inteiros e usa **casting** para apresentar no terminal o valor correto.

```c
int main(void)
{
    int x;
    int y;

    printf("x: ");
    scanf("%i", &x);
    printf("y: ");
    scanf("%i", &y);

    printf("result: %.5f\n", (float) x/y);
}
```
