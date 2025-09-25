#include <stdio.h>
#include <string.h>

int main(void)
{
    char *strings[] = {"battleship", "boot", "cannon", "iron", "thimble", "top hat"};
    
    char s[50];
    printf("String: ");
    scanf("%s", s);

    for (int i = 0; i < 6; i++)
    {
        if (strcmp(strings[i], s ) == 0)
        {
            printf("Found\n");
            return 0;
        }
    }

    printf("Not found\n");
    return 1;

}

/////////////////////////////////////

// #include <stdio.h>

// int main(void)
// {
//     int numbers[] = {20, 500, 10, 5, 100, 1, 50};

//     int n;
//     printf("Number: ");
//     scanf("%i", &n);

//     for (int i = 0; i < 7; i++)
//     {
//         if (numbers[i] == n)
//         {
//             printf("Found\n");
//             return 0;
//         }
//     }
//     printf("Not found\n");
//     return 1;

// }