#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
    int number;
    struct node *next;
}node;

int main(void)
{
    node *list = NULL;

    for (int i=0; i < 3; i++)
    {
        node *n = malloc(sizeof(node));
        if (n == NULL)
        {
            return 1;
        }

        printf("Number: ");
        scanf("%i", &n->number);
        n->next = NULL;

        n->next = list;
        list = n;
    }

    //Time Passes

    // node *ptr = list;
    // while (ptr != NULL)
    // {
    //     printf("VALOR :%i\n", ptr->number);
    //     node *last_n = ptr;
    //     ptr = ptr->next;
    //     free(last_n);
    // }

    for (node *ptr = list; ptr != NULL; )
    {
        printf("VALOR :%i\n", ptr->number);
        node *tmp = ptr->next;
        free(ptr);
        ptr = tmp;
    }
    
    return 0;
}