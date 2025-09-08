#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[10];
    printf("Name: ");
    scanf("%s", &name);

    printf("%i", strlen(name));
}

/////////////////////////

// int string_length(char s[]);

// int main(void)
// {
//     char name[10];
//     printf("Name: ");
//     scanf("%s", &name);

//     printf("%i", string_length(name));
// }

// int string_length(char s[])
// {
//     int n = 0;
//     while (s[n] != '\0')
//     {
//         n++;
//     }
//     return n;
// }