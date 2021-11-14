function primeNum(num)
{
    var fac = 0;
    for(var i = 1; i <= num; i++)
    {
        if(num % i == 0)
        fac++;
    }
    if(fac == 2)
    return 1;
    else
    return 0;
}

var res = primeNum(8);
if(res == 1)
console.log("Prime number");
else
console.log("Non prime number");