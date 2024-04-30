function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	// const values = [1000, 500, 100, 50, 10, 5, 1];
	// const symbol = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
	// let ans = '';
	// for(let i=0; i<values.length; i++){
	// 	while(num >= values[i]){
	// 		ans += symbol[i];
	// 		num -= values[i];
	// 	}
	// }
	// return ans;

	  let str = ''; 
  
    for (let i of Object.keys(obj)) { 
        let q = Math.floor(num / obj[i]); 
        num -= q * obj[i]; 
        str += i.repeat(q); 
	}
	return str
		// console.log(str);

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));
// console.log(ans);



// do not edit below this line
module.exports = convertToRoman
