#include <stdio.h>

int main()
{
  // Arithmatic oparetors
  // int a;     //a, b
  // float b;
  // a = 30;
  // b = 6.63;

  // printf("a + b = %f\n", a+b);   //%d
  // printf("a - b = %f\n", a-b);
  // printf("a * b = %f\n", a*b);
  // printf("a / b = %f\n", a/b);  // ++, --

  // Raletional oparetos
  // int a, b;
  // a = 34;
  // b = 34;

  // printf("a + b = %d\n", a==b);   //%d
  // printf("a - b = %d\n", a-b);
  // printf("a * b = %d\n", a*b);
  // printf("a / b = %d\n", a/b);    // ==, !=, >, <, >=, <=

  // logical oparetors
  // int a, b;
  // a = 40;
  // b = 40;

  // printf("a || b = %d\n", !b); // ||, &&, !
  // printf("a - b = %d\n", a-b);
  // printf("a * b = %d\n", a*b);
  // printf("a / b = %d\n", a/b);

  // Array
  // int marks[4] = {23, 41, 14, 39};

  // for (int i = 0; i < 4; i++)
  // {
  //   printf("The value of %d elemant of the array%d\n", i, marks[i]);  //one d array
  // }

  // marks[0] = 34;
  // printf("Marks of student 1 is %d\n", marks[0]);
  // marks[0] = 42;
  // marks[1] = 45;
  // marks[2] = 44;
  // marks[3] = 43;
  // printf("Marks of student 1 is %d\n", marks[0]);

  int marks[2][4] = {{23, 41, 14, 19}, {7, 8, 9, 10}};

  for (int i = 0; i < 2; i++)
  {
    for (int j = 0; j < 4; j++)
    {
      // printf("The value of %d, %d elemant of the array%d\n", i, j, marks[i][j]);
      printf("%d ", marks[i][j]);
    }
    printf("%d\n");   // two d arrays
  }
  return 0;
}