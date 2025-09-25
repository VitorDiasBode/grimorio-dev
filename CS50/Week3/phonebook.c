#include <stdio.h>
#include <string.h>

typedef struct
{
    char name[25];
    char number[25];
}person;

int main(void)
{
    person people[3];

    strcpy(people[0].name, "David");
    strcpy(people[0].number, "617");

    strcpy(people[1].name, "John");
    strcpy(people[1].number, "949");

    strcpy(people[2].name, "Yuliia");
    strcpy(people[2].number, "617");
    

    char name[50];
    printf("Name: ");
    scanf("%s", name);

    for (int i = 0; i < 3; i++)
    {
        if (strcmp(people[i].name, name) == 0)
        {
            printf("Found %s\n", people[i].number);
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}

///////////////////////////////////

// #include <stdio.h>
// #include <string.h>

// int main(void)
// {
//     char *names[] = {"David", "John", "Yuliia"};
//     char *numbers[] = {"617", "949", "617"};

//     char name[50];
//     printf("Name: ");
//     scanf("%s", name);

//     for (int i = 0; i < 3; i++)
//     {
//         if (strcmp(names[i], name) == 0)
//         {
//             printf("Found %s\n", numbers[i]);
//             return 0;
//         }
//     }
//     printf("Not found\n");
//     return 1;
// }

