// Write a JavaScript program to compute the union of two arrays.
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]
let arr1 = [1,2,3,5,6,7];
let arr2 = [100,2,1,10, 6, 50];

console.log(union(arr1, arr2));

function union(arr1, arr2){

	arr1.forEach(function(element){
		if(arr2.indexOf(element) > -1){
		}else{
			arr2.push(element);
			arr2.sort(function(a,b){
				return a - b;
			});
		}
	});
	return arr2;
}