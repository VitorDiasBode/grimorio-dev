#include <stdio.h>
#include <stdbool.h>

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

//////////////////////

// #include <stdio.h>
// #include <stdbool.h>

// int main(void)
// {
//     long dollars = 1;

//     while(true)
//     {
//         printf("Here's $%li. Double it and give it to the next person? ", dollars);
        
//         char answer;
//         scanf(" %c", &answer);
        
//         if (answer == 'y')
//         {
//             dollars *= 2;
//         }else{
//             break;
//         }
//     }
//     printf("Here's $%li.\n", dollars);
// }