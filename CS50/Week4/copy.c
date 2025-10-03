#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

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

// // // // //

// #include <stdio.h>
// #include <string.h>
// #include <ctype.h>

// int main(void)
// {
//     char s1[] = "hi!";
//     char *s2 = s1;

//     printf("Antes:\n");
//     printf("s1: %s\n", s1);
//     printf("s2: %s\n", s2);

//     s2[0] = toupper(s2[0]);

//     printf("Depois:\n");
//     printf("s1: %s\n", s1);
//     printf("s2: %s\n", s2);
// }

