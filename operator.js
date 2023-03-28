// declaration and assign of variable to num1 and num2
let num1 = 5;
let num2 = 10;
let result = num1 * num2;
console.log(result);
result = num2 % num1;
console.log(result);
result = num1 - num2;
console.log(result);
num1++;
num2--;
console.log(num1);
console.log(num2);
let input1 = prompt("How many brothers do you have?");
let input2 = prompt("How many sisters do you have?");
let resultInput1 = parseFloat(input1);
let resultInput2 = parseFloat(input2);
let totalSiblings = resultInput1 + resultInput2;
if (totalSiblings >= 7) {
  alert(
    `Your dad is a polygamous man having ${totalSiblings} numbers of children`
  );
} else {
  alert(
    `Your dad is a mongamous man having ${totalSiblings} numbers of children`
  );
}
