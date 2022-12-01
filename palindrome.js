// Program to check if the given string is a palindrome

let str = "madam";
let rev_str = "";
for(let i = (str.length - 1); i <= 0; i++) {
	rev_str += str[i];
}
if(rev_str == str) {
	console.log(str, "is a Palindorme");
}
else {
	console.log(str, "is not a Palindrome");
}