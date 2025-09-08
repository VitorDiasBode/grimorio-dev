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