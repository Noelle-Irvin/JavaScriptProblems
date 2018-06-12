//Flatten a nested array. You must account for varying levels of nesting
let arr1 = [];

function steamrollArray(arr){
	for(let i = 0; i < arr.length; i++){
		if(typeof(arr[i]) === 'number'){
			arr1.push(arr[i]);
		}else{
			steamrollArray(arr[i]);
		}
	}
	return arr1;
}

let array = steamrollArray([1, [2], [3, [[4, 5, 6]], [7,[8]]]]);
console.log(array);