#include <stdio.h>

int main(){
   int a1 = 7;
   
   unsigned short integer = 8;
   long integer1 = 8;
   short integer2 = 8;

   float b1 = 0.8;
   double myfloat1 = 7.45;
   long double myfloat2 = 7.43453455;

   char c1 = "t";

   printf("hello %c", c1);
   printf("the size taken by int is %d/n",sizeof(int));
   printf("the size taken by unsinged int is %d/n",sizeof(unsigned int));
   printf("the size taken by float is %d/n",sizeof(float));
   printf("the size taken by double is %d/n",sizeof(double));
   printf("the size taken by long double is %d/n",sizeof(long double));

   printf("\n********rulls for creating variabals********");
   int _amit;

   const int i = 9;
   //int i = 10;

   //arithmetic operators
   int a = 60, b = 7, c =8;
   printf("the sum of a end b is %d\n", a+b);
   printf("the difference of a and b is %d\n", a-b);
   printf("the multiplication result of a and b is %d\n", a*b);
   printf("the the division of a and b is %d\n", a/b);
   printf("the the division of a and b is %d\n", a%b);
   printf("the the division of a and b is %d\n", ++a);
   printf("the the division of a and b is %d\n", --a);

   //Relational operators
   int amit = 9, love = 7;
   printf("%d\n",amit==love);
   printf("%d\n",amit!=love);
   printf("%d\n",amit>love);
   printf("%d\n",amit<love);

   //logocal operators
   int A = 0, l = 1;
   printf("The logical operator returned %n\n", A && l);
   printf("The logical operator returned %n\n", A || l);
   printf("The logical operator returned %n\n", !l);
   printf("The logical operator returned %n\n", !A);

   //Bitwise operators
   //A = 60, B = 13
   //A = 00111100;
   //B = 00001100;
   int A = 60, B =14;
   printf("The Bitwise and operator returned %n\n", A&B);
   printf("The logical or operator returned %n\n", A|B);
   printf("The logical xor operator returned %n\n", A^B);
   printf("The logical ones complement operator returned %n\n", ~B);
   printf("The logical left shift operator returned %n\n", A<<B);
   printf("The logical right shift operator returned %n\n", A>>B);

   //Assignment operators
   //=, +=, -=, *=, %=, etc
   int ha = 9;
   ha +=9;
   printf("ha is %d\n", ha);

   

    return 0;
}