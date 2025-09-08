#include <stdio.h>

int main(void)
{
    int x;
    int y;
     
    printf("What's x? ");
    scanf("%i", &x);

    printf("What's y? ");
    scanf("%i", &y);

    if (x < y)
    {
        printf("x is less than y\n");
    }else if (x > y)
    {
        printf("x is not less than y\n");   
    }else
    {
        printf("x is equal to y \n");
    }

}