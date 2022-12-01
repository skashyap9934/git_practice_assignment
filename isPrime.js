// Program to check if the given number is a prime number
let number = 7;
let flag = true;
for(let i = 2; i < num; i++) {
	if(number % i == 0) {
		flag = false;
		break;
	}
}
if(flag) {
	console.log(number, "is not Prime");
}
else {
	console.log(number, "is Prime");
}