function convertToRoman(num) {
  	// const obj = {
   //    0:['M',1000], 
   //    1:['D', 500], 
   //    2:['C', 100], 
   //    3:['L', 50], 
   //    4:['X', 10], 
   //    5:['V', 5], 
   //    6:['I', 1]
   //  };

  //your code here
	const values = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	// const symbol = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
	const symbol = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	let ans = "";
	for(let i=0; i<values.length; i++){
		while(num >= values[i]){
			ans += symbol[i];
			num -= values[i];
		}
	}
	return ans;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// Get the necessary DOM elements
const numberInput = document.getElementById("number-input");
const convertButton = document.getElementById("convert-button");
const resultDiv = document.getElementById("result");

// Add click event listener to the convert button
convertButton.addEventListener("click", () => {
  const inputNumber = parseInt(numberInput.value, 10);
  const romanNumeral = convertToRoman(inputNumber);
  resultDiv.textContent = `Roman Numeral: ${romanNumeral}`;
});
console.log(convertToRoman(36));



// do not edit below this line
// module.exports = convertToRoman
