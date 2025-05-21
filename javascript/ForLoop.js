let i=1,n,se=0,so=0;
let numbers=[2,3,6,5,10];

for(i=1;i<=5;i++)
{
    n=numbers[i-1];
    if(n%2==0)
    {
        se=se+n;
    }else{
        so=so+n;
    }}

    console.log("sum of even no are : " + se);
    console.log("sum of odd no  : " + so);


