//Exercise 1
// let weekArray = [0,1,2,3,4,5,6];
// for (number of weekArray){
// 	if((number == 0) || (number ==6)){console.log("Sleep In")}
// 		else if((number >= 1) && (number<=5)){console.log("Go to Work")}
// }

//Exercise Number 2
// let month = 2;
// let year = 2021;

// if((month==1)||(month==3)||(month==5)||(month==7)||(month==8)||(month==10)||(month==12)){
// 	console.log("31")
// }else if((month==4)||(month==6)||(month==9)||(month==11)){console.log("30")}
// else if((month==2)&&(year%4==0)){console.log("29")}
// else if(month==2){console.log("28")}

//Exercise 3
// let num = 10.00;
// let level = 'good';
// let total = 0;

// if(level == 'good'){
// 	total = num*.2 + num;
// }else if(level == 'fair'){
// 	total = num*.15 + num;
// }else if(level == 'bad'){
// 	total = num*.10 + num;
// }
// console.log("Bill = " + num + ". Total with Tip = " + total);

//Exercise 4
let princessArr = ['Cinderally','Belle','Aurora','Ariel', 'Snow White', 'Merida'];
let newArr = princessArr.filter(function(String){
	if((String[0] == 'A')||(String[0] == 'B')||(String[0] == 'M')){
		return String;
	}
})
console.log(princessArr);
console.log(newArr);