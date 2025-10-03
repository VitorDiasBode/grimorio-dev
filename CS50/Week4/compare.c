#include <stdio.h>
#include <string.h>

int main (void)
{
    char *s = "Hello, World!";
    char *t = "Hello, World!";
    // char s[25] = "Hello, World!";
    // char t[25] = "Hello, World!";

    if ( s == t )
    {
        printf("Same\n");
    }else
    {
        printf("Different\n");
    }

}