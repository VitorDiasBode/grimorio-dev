#include <stdio.h>
#include <string.h>

int main(void)
{
    char *names[] = {"David", "John", "Yuliia"};
    char *numbers[] = {"617", "949", "617"};

    char name[50];
    printf("Name: ");
    scanf("%s", name);

    for (int i = 0; i < 3; i++)
    {
        if (strcmp(names[i], name) == 0)
        {
            printf("Found %s\n", numbers[i]);
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}