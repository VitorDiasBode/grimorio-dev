#include <stdio.h>

int main(void)
{
    char *s = "HI!";
    printf("%c\n", *s);
    printf("%c\n", *(s + 1));
    printf("%c\n", *(s + 2));

    printf("\n%s\n", s+1);
}

// // // // //

// #include <stdio.h>

// int main(void)
// {
//     char s[10] = "HI!";
//     char* s2 = "BYE!";

//     printf("%p\n", s2);
//     printf("%p\n", &s2[0]);
//     printf("%p\n", &s2[1]);
//     printf("%p\n", &s2[2]);
//     printf("%p\n", &s2[3]);

//     printf("%s\n", s2);

//     printf("%c\n", s2[0]);
//     printf("%c\n", s2[1]);
//     printf("%c\n", s2[2]);
//     printf("%c\n", s2[3]);
    
// }

// // // // //

// #include <stdio.h>

// int main(void)
// {
//     int n = 50;
//     int *p = &n;

//     printf("%p\n", p);
//     printf("%p\n", &n);
//     printf("%i\n", n);
//     printf("%i\n", *p);

// }