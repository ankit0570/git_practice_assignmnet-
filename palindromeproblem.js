let str="naman";
let new_str="";
for(i=str.length-1; i>=0; i--){
    new_str+=str[i];
}if(new_str==str){
    console.log("palindrome string");
}else{
    console.log("not a palindrome string");
}