#include <stdio.h>

#define N 5

float average(int length, int array[]);

int main(void)
{
    int scores[N];
    for (int i=0; i<N; i++)
    {
        int new_score;
        printf("Score: ");
        scanf("%i", &new_score);
        scores[i] = new_score;
    }

    printf("Average: %f\n", average(N, scores));
}

float average(int length, int array[])
{
    float sum = 0.0;
    for (int i=0; i<length; i++)
    {
        sum += array[i];
    }

    return sum / length;

}
//////////////////////////

// #include <stdio.h>

// int main(void)
// {
//     #define N 3
//     int scores[N];
//     scores[0] = 72;
//     scores[1] = 73;
//     scores[2] = 33;

//     printf("Average: %f\n", (scores[0] + scores[1] + scores[2]) / (float) N);
// }