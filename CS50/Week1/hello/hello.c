#include <stdio.h>

int main(void)
{
    char answer[] = ""; 
    scanf("%s", answer);
    printf("\nHello, %s", &answer);
}
