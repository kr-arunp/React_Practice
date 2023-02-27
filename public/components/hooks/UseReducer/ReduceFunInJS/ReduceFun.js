let a = [1, 2, 3, 4, 5];
let curr_sum = 0;
let total_sum = a.reduce((i, sum) => sum + i, curr_sum);

console.log(total_sum);

let even=0;
let count_even=a.reduce((i,count)=>{
   if(i%2==0){
	   count++;
   }
   
},even)
console.log(count_even)
