//Find the Product.
const Find_Prod = (array, N) => 
{
 let sum=1;
     for(let i=0;i<N;i++){
       sum=sum*array[i];
     }
     return sum;

};

//Find the Sum

const Find_Sum = (array, N) => 
{
  let sum=0;
  for(let i=0;i<N;i++){
    sum+=array[i];
  }  
  return sum;

};

//Count Occurrences

const findCount = (N, K, Arr) => 
{
  let count=0;
    for(let i=0;i<N;i++){
      if(Arr[i]==K){
        count++;
      }
    } 
    return count;
};

//Even Odd

const findEvenOdd = (N, Arr) => 
{
  let odd=0,even=0;
    for(let i=0;i<N;i++){
      if(Arr[i]%2===0){
        even+=Arr[i];
      }else{
        odd+=Arr[i];
      }
    }
    let B=[even,odd];
    return B;
};
 

//Find whether the number is present or not

const Find_Num = (array,N,M) => 
{
  let res="NO";
  for(let i=0;i<N;i++){
    if(array[i]==M){
      res="YES";
      return res;
    }
  }
  return res;
};

//Higher Age

const highAge = (N, Arr) => 
{
  let array=[];
  let count=0;
    for(let i=0;i<N;i++){
      if(Arr[i]>=18){
        
        array[count]=Arr[i];
        count++;
      }
    }
    return array;
};

//Increment the Array Elements

const Inc_Arr = (array,N) => 
{
  for(let i=0;i<N;i++){
    console.log(array[i]+1);
  }

};

//Pass or Fail

const isAllPass = (N, Arr) => 
{
  let res="YES";
    for(let i=0;i<N;i++){
      if(Arr[i]>=32){
        res="YES";
      }else{
        res="NO";
        return res;
      }
    }
    return res;
};

//Unique Color Shirt

function Unique_Shirts (arr,n) {
    arr=arr.sort();
    let count=0;
    for(let i=0;i<n;i++){
      if((arr[i-1]===arr[i]) || (arr[i]===arr[i+1])){
        count++;
      }
    }
    return (n-count);
   }

   //Min and Max

   function arrayMin(arr) {
  
    let min=arr[0];
   for(let i=1;i<arr.length;i++){
      if(min>arr[i]){
         min=arr[i];
       }
     }
    return min;
      
    }
   
   function arrayMax(arr) {
   
     let max=arr[0];
     for(let i=1;i<arr.length;i++){
       if(max<arr[i]){
         max=arr[i];
       }
     }
    return max;
   }

   //Birthday Game

   function Birthday_Game(arr,D ,M) {
 
    let counter = 0;
       for(let i = 0; i < arr.length - 1; i++){
            let subArray = arr.slice(i, i+M);
            if (subArray.length === M) {
               let sum = subArray.reduce((a,b) => a + b, 0);
               if(sum === D){
                    counter += 1;
                }
             }
       }
       return counter;
  
  
  }