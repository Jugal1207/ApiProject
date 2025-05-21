//Accept the five number & display sum of even number and sum of odd number

let i=1,n,se=0,so=0;

let numbers=[2,4,5,3,6];

while(i<=5)
{
    n = numbers[i - 1];
    if(n%2==0)
    {
        se=se+n;
    }else
    {
        so=so+n;
    }
    i++;
}
console.log("sum of even numbers are :"+ se);
console.log("sum of odd numbers are :"+ so);

