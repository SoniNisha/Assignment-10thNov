function frequent(arr) 
{
    var maxOccur = 1;
    var val;
    var count = 0;
    for (var i = 0; i<arr.length; i++)
    {
        for (var j = i; j<arr.length; j++)
        {
            if (arr[i] == arr[j])
            count++;
            if (maxOccur < count)
            {
                maxOccur = count;
                val = arr[i];
            }
        }
        count = 0;
    }
    return val;
}

let arr1 = [3, 'a', 'a', 8, 6, 'a', 'b', 'a', 9, 0, 3, 'a', 3, 'b'];
var freq = frequent(arr1);
console.log(val + " occurs frequently");