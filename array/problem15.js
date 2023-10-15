/*
We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -
Note : Use ordinal numbers to tell their position.-->means 1st,2nd ,3rd
 */

function colors(color) {
  let ordinal = ["st", "nd", "rd"];
  for (let i = 0; i < color.length; i++) {
    if (i >= 3) {
      ordinal[i] = "th";
    }
    console.log(`${i + 1}${ordinal[i]} choice is ${color[i]}`);
  }
}

colors(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]);

