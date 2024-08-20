#include <stdio.h>

int main() {
    
    int i,j;
    
    for(int i=0;i<=10;i++){
        for(int j=0;j<=i;j++){
            printf("inner=>%d\n",j);
        }
        printf("outter=>%d\n",i);
    }
    for(int i=1;i<=10;i++){
            printf("%d\n",i*3);
        }
    
    for(int i=1;i<=10;i++){
            printf("%d\n",i*4);
        }
    for(int i=1;i<=10;i++){
            printf("%d\n",i*5);
        }
    for(int i=1;i<=10;i++){
            printf("%d\n",i*6);
        }
        int i,j;
    for(int i=0;i<=10;i++){
        for(int j=0;j<i;j++){
            printf("*");
        }
        printf("\n");
    }
    if(printf("Hello World!")){
        
    }
    
    
    
int num1,num2,num3;

printf("Enter Your First Number==>");
scanf("%d",&num1);

printf("Enter Your Second Number==>");
scanf("%d",&num2);

printf("Enter  Your Third Number==>");
scanf("%d",&num3);

if(num1>num2){
    printf("Your First Number is Greater than Second and Third");
}

else if(num2>num3){
    printf("Your Second Number is Greater than First and Third");
}

else{
    printf("Your Third Number is Greatest");
}
 if(num%2==0){
    printf("Your Number is Even");
}

else{
    printf("your numnber is odd");
    
}


    return 0;
}