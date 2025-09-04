#include <stdio.h>

 void meow(int n);

int main(void)
{
    meow(40);
}

void meow(int n)
{
    for ( int i = 0; i < n; i++)
    {
        printf("meow\n");
    }
}

/////////////////////


// void meow(void);

// int main(void)
// {
//     for ( int i = 0; i < 3; i++)
//     {
//         meow();
//     }
// }

// void meow(void)
// {
//     printf("meow\n");
// }

/////////////////////

// int main(void)
// {
//     int i = 0;
//     while (i < 3)
//     {
//         printf("meow\n");
//         i++;
//     }
    
// }