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

    for (int i=0; i < 8; i++)
    {
        node *n = malloc(sizeof(node));
        if (n == NULL)
        {
            return 1;
        }

        printf("Number: ");
        scanf("%i", &n->number);

        if (list == NULL){
            list = n;
        }
        else if (n->number < list->number)
        {
            n->next = list;
            list = n;  
        }
        else
        {
            for (node *ptr = list; ptr != NULL; ptr = ptr->next)
            {
                if (ptr->next == NULL)
                {
                    ptr->next = n;
                    break;
                }
                else if (n->number < ptr->next->number)
                {
                    n->next = ptr->next;
                    ptr->next = n;
                    break;

                }
            }
            
        }    
    }

    //Time Passes

    for (node *ptr = list; ptr != NULL; )
    {
        printf("VALOR :%i\n", ptr->number);
        node *tmp = ptr->next;
        free(ptr);
        ptr = tmp;
    }
    
    return 0;
}