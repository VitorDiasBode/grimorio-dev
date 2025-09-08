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

// int main(void)
// {
//     char string[10] = "";
//     printf("Before: ");
//     scanf("%s", string);

//     printf("\nAfter: ");
//     for(int i=0, n=strlen(string); i<n; i++)
//     {
//         if(string[i] >= 'a' && string[i] <= 'z'){
//             printf("%c", toupper(string[i]));
//         }else{
//             printf("%c", string[i]);
//         }
        
//     }

//     printf("\n");
// }