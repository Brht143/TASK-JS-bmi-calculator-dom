function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let result =  (weight / Math.pow(height, 2) * 10000) 
  let bmi = result.toFixed(2)
  console.log(bmi);


// BMI State
  let bmiState = "Unknown"
if (bmi < 18.5) bmiState = "Underweight"
else if (bmi >= 18.5 && bmi < 24.9) bmiState = "Healthy Weight"
else if (bmi >= 25 && bmi < 29.9) bmiState = "Overweight"
else if (bmi > 30) bmiState = "Above Obesity"

console.log(bmiState);

// BMI basesd on Age
let bmiBasedOnAge = "Unknown"
if (age >= 19 && age < 24) bmiBasedOnAge = (bmi >= 19 && bmi < 24 ) ? "Healthy" : "Not Healthy";
else if (age >= 25 && age < 34) bmiBasedOnAge = (bmi >= 20 && bmi < 25 ) ? "Healthy" : "Not Healthy";
else if (age >= 35 && age < 44) bmiBasedOnAge = (bmi >= 21 && bmi < 26 ) ? "Healthy" : "Not Healthy";
else if (age >= 45 && age < 54) bmiBasedOnAge = (bmi >= 22 && bmi < 27 ) ? "Healthy" : "Not Healthy";
else if (age >= 55 || age < 64) bmiBasedOnAge = (bmi >= 23 && bmi < 28 ) ? "Healthy" : "Not Healthy";
else if (age > 65) bmiBasedOnAge = (bmi >= 24 && bmi < 29 ) ? "Healthy" : "Not Healthy";

alert(`
  Result: >> ${bmi}
  State:  >> ${bmiState}
  Health: >> ${bmiBasedOnAge}`);
}
