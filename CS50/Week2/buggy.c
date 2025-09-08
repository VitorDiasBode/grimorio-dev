# include <stdio.h>

void print_column(int height);

int main(void)
{
    int h;
    printf("Height: ");
    scanf("%i", &h);

    print_column(h);
}

void print_column(int height){
    for (int i=0; i<=height; i++)
    {
        printf("#\n");
    }
}