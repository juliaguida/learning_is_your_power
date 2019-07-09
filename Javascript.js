
document.write("You live you learn, if knowledge is the power learning is your power.");

/*function addSomething (num,str) {

//all elements go inside the parentheses.

///var add = num + str;

//alert (add);

//}
 
//addSomething (44 , "Pink starts");



// A statement has end with a ; sign as the statement above.

// var day; //Declare var without assigning value.
// var assignValue = 1144; //Declare var and assign a value.
// var years = 35; //Js is a loosely laguage as you don't really have to explicit declare a variable you can simpley say years = 35; however is not recommended.

 //Java in ethe other hand is a strongly language it means you must explicit declare 
//int var years = 35,

// var someText = "Peace";//Must use single '' or double" quotation marks for strings.
// var love = "True"; //Boolean- True or False.

//var can only start with letters.
//var can only start with lower case or _ space is replaced by _

//Function is the action the behaviour. where we work with our variable.
// alert (assignValue + someText);



//arithmetic and assigment operators

//var number1 = 7;
//var number2 = 4;

//number1  +=  number2;
//number1++

//document.write (number1);

//Conditions:

// var food = "3";

// if (food === "3") {


// alert (" We love strings");

// }

//var number1 = 4 + 3*5;
//the multiplicator * and division/ operator is executed first than addition  and subtraction.
//the above var on the console will give a result of 19 because it will excute first the multiplication operator 3*5 + 4 = 19.


// to avoid that put inside parentheses the operator you would to be excuted first.


console.log("Hello");

console.log(" you are !");

/*document.getElementById("demo").innerHTML = "My name is Blue";

 var general;

 general = 6;

 console.log(typeof general);

 let a =[ 1, 2, 4,];

a[0]

Assignment operators console.log(2-1);

let diff= 3-2;

console.log("diff ->" +diff);

diff++;

console.log(diff);

 Comparison  Operators */


let s=9;
let s2=8;

if (s==s2){

	console.log("Oh look we are so alike");
}

else {

console.log("We dont look so alike")};



if ("blue" != "Blue"){

	console.log("We are not too blue");
}
else {

	console.log( "We are both blue")};


	if (32 >= 30){

		console.log( "You are greater or equal");
	}

else {

	console.log("We are not great");
}


// boolean operators

function f () {
	// var b;
	let b;

	if (true) {
		b = 'bus' // b = 'bus'
		let c = 'cat'
		const d = 'dog'
	}

	b === 'bus' // b is not de
	c // variable c is not declared
}

                                                                                                            Data Types


Data types are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types:
Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". 
Though we prefer single quotes. Some people like to think of string as a fancy word for text.
Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
Object: Collections of related data.
The first 6 of those types are considered primitive data types. They are the most basic data types in the language. 
Objects are more complex, and you’ll learn much more about them as you progress through JavaScript. At first, seven types may not seem like that many, but soon you’ll observe the world opens 
with possibilities once you start leveraging each one. As you learn more about objects, you’ll be able to create complex collections of data.

But before we do that, let’s get comfortable with strings and numbers!

console.log('Location of Codecademy headquarters: 575 Broadway, New York City');
console.log(40);

In the example above, we first printed a string. Our string isn’t just a single word; it includes both capital and lowercase letters, spaces, and punctuation.

Next, we printed the number 40, notice we did not use quotes.


console.log(Math.floor(Math.random()) *50);

let levelUp = 10;
levelUp += 5;

console.log(levelUp);

let powerLevel = 9001;
powerLevel  -= 100;

console.log(powerLevel);

let multiplyMe = 32;
multiplyMe *= 11;

console.log(multiplyMe);

let quarterMe = 1152;
quarterMe /=  4;

                                                                                                                  Excercise



console.log('JavaScript');

console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);
console.log(20.49);



 																												Arithmetic Operators


Basic arithmetic often comes in handy when programming.
An operator is a character that performs a task in our code.
JavaScript has several built-in in arithmetic operators, that allow us to perform mathematical calculations on numbers.
These include the following operators and their corresponding symbols:

Add: +
Subtract: -
Multiply: *
Divide: /
Remainder: %
The first four work how you might guess:

console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3

Note that when we console.log() the computer will evaluate the expression inside the parentheses and print that result to the console. 
If we wanted to print the characters 3 + 4, we would wrap them in quotes and print them as a string.
The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many 
times as it evenly can: 11 % 3 equals 2 because 3 fits into 11 three times, leaving 2 as the remainder.

																												Excercise

console.log(10 + 3.5)
console.log(2018 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);


                                                                                                                String Concatenation

Operators aren’t just for numbers! When a + operator is used on two strings, it appends the right string to the left string:

console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
// Prints 'I love to code.'
This process of appending one string to another is called concatenation. Notice in the third example we had to make sure to include a space at the end of the first string. 
The computer will join the strings exactly, so we needed to make sure to include the space we wanted between the two strings.

console.log('front ' + 'space'); 
// Prints 'front space'
console.log('back' + ' space'); 
// Prints 'back space'
console.log('no' + 'space'); 
// Prints 'nospace'
console.log('middle' + ' ' + 'space'); 
// Prints 'middle space'
Just like with regular math, we can combine, or chain, our operations to get a final result:

console.log('One' + ', ' + 'two' + ', ' + 'three!'); 
// Prints 'One, two, three!'

                                                                                                               Excercise


console.log('Hello' + 'World');
console.log('Hello'+ ' ' + 'World');


                                                                                                               Properties

When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. 
Every string instance has a property called length that stores the number of characters in that string. You can retrieve property information by appending the string with a period and the property name:


console.log('Hello'.length); // Prints 5
The . is another operator! We call it the dot operator.

In the example above, the value saved to the length property is retrieved from the instance of the string, 'Hello'. The program prints 5 to the console, because Hello has five characters in it.

																										

																											  Excercise		


console.log('Teaching the world how to code'.length);


                                                                                                               Methods

Remember that methods are actions we can perform. JavaScript provides a number of string methods.
We call, or use, these methods by appending an instance with a period (the dot operator), the name of the method, and opening and closing parentheses: ie. 'example string'.methodName().

Does that syntax look a little familiar? When we use console.log() we’re calling the .log() method on the console object. Let’s see console.log() and some real string methods in action!

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
Let’s look at each of the lines above:

On the first line, the .toUpperCase() method is called on the string instance 'hello'. The result is logged to the console. This method returns a string in all capital letters: 'HELLO'.
On the second line, the .startsWith() method is called on the string instance 'Hey'. This method also accepts the character 'H' as an input, or argument, between the parentheses.
 Since the string 'Hey' does start with the letter 'H', the method returns the boolean true.
You can find a list of built-in string methods in the JavaScript documentation. Developers use documentation as a reference tool. It describes JavaScript’s keywords, methods, and syntax.


                                                                                                             Excercise


console.log('Codecademy');
console.log('codecademy'.toUpperCase());


                                                                                                            Built-in Objects

In addition to console, there are other objects built into JavaScript. Down the line, you’ll build your own objects, but for now these “built-in” objects are full of useful functionality.
For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.
The great thing about objects is that they have methods! Let’s call the .random() method from the built-in Math object:

console.log(Math.random()); // Prints a random number between 0 and 1
In the example above, we called the .random() method by appending the object name with the dot operator, the name of the method, and opening and closing parentheses.
 This method returns a random number between 0 and 1.To generate a random number between 0 and 50, we could multiply this result by 50, like so:

Math.random() * 50;
The example above will likely evaluate to a decimal. To ensure the answer is a whole number, we can take advantage of another useful Math method called Math.floor().

Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this:

Math.floor(Math.random() * 50);
In this case:

Math.random generates a random number between 0 and 1.
We then multiply that number by 50, so now we have a number between 0 and 50.
Then, Math.floor() rounds the number down to the nearest whole number.
To see all of the properties and methods on the Math object, take a look at the documentation here.
// Use the mathematical assignments in the space below:

                                                                                                          Excercise


console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));
console.log(Math.floor(Math.random() *100));



  
                                                                                                          Review


Let’s take one more glance at the concepts we just learned:

Data is printed, or logged, to the console, a panel that displays messages, with console.log().
You can write single-line comments with // and multi-line comments between /* and */.
There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.
Numbers are any number without quotes: 23.8879
Strings are characters wrapped in single or double quotes:  'Sample String'
The built-in arithmetic operators include +, -, *, /, and %.
Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.
Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().
We can access properties and methods by using the ., dot operator.
Built-in objects, including Math, are collections of methods and properties that JavaScript provides.
                                                                                                     

                                                                                                     Variables
RVariables
Nice work! This lesson introduced you to variables, a powerful concept you will use in all your future programming endeavors.
Let’s review what we learned:

Variables hold reusable data in a program and associate it with a name.
Variables are stored in memory.
The var keyword is used in pre-ES6 versions of JS.
let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
Variables that have not been initialized store the primitive data type undefined.
Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
The + operator is used to concatenate strings including string values held in variables
In ES6, template literals use backticks ` and ${} to interpolate values into a string.
The typeof keyword returns the data type (as a string) of a value.

                                                                                                    Excercise

 console.log(test1);

let test1 = 'figuring out quirks';

                                                                                                   

                                                                                                    Conditional statement

Way to go! Here are some of the major concepts for conditionals:
An if statement checks a condition and will execute a task if that condition evaluates to true.
if...else statements make binary decisions and execute different code blocks based on a provided condition.
We can add more conditions using else if statements.
Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
The logical operator ||, or “or”, checks if either provided expression is truthy.
The bang operator, !, switches the truthiness and falsiness of a value.
The ternary operator is shorthand to simplify concise if...else statements.
A switch statement can be used to simplify the process of writing multiple else if statements. 
The break keyword stops the remaining cases from being checked and executed in a switch statement.


                                                                                                    Excercise


 let school = 'Tenager';

switch ( school === 'Tenager') {
  case 'Adult':
    console.log(' You are not a school boy');
    break;
    
  case 'Tenager':
     console.log('You are a school boy');
    break;
    
  default:
    console.log('Either of the cases');
    break;
}


                                                                                              
  console.log('The loop will itenarate until the condition is true');
};
  

let x = 20;
x -= 5
console.log(x);


let gainedDollar = 3;

 gainedDollar ++;

console.log(gainedDollar);

let gainedDollar = 3;

 gainedDollar ++;

console.log(gainedDollar);


let lostDollar = 50;

lostDollar --;

console.log(lostDollar);

                                                                                                          Template literals


//Concadenating a var value.//

let favoriteAnimal = 'Dog';

console.log(`My favourite animal is ${favoriteAnimal}`);




let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);

 newVariable = 1;

console.log(typeof newVariable);


let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
};

                                                                                                           Logical Operators.


Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. 
We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)
When we use the && operator, we are checking that two things are true: 


let mood = 'sleepy';
let tirednessLevel = 6;

if ((mood === 'sleepy' ) && ( tirednessLevel < 10)){
    
    console.log('Time to Sleep');
  
} else {
  
    console.log('Not bed time yet');
  
};


Truthy and Falsy

Let’s consider how non-boolean data types, like strings or numbers, are evaluated when checked inside a condition.

Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value— you’ll only check to see if the variable has been assigned a value.

Here’s an example: 

let myVariable = 'I Exist!';

if (myVariable) {

   console.log(myVariable)

} else {

   console.log('The variable does not exist.');


};

The code block in the if statement will run because myVariable has a truthy value; even though the value of myVariable is not explicitly the value true, when used in a boolean or conditional context, it evaluates to true because it has been assigned a non-falsy value.

So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:

0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number
Here’s an example with numbers: 


   let numberOfApples = 0;

if (numberOfApples){

   console.log('Let us eat apples!');

} else {

   console.log('No apples left!');
}

// Prints 'No apples left!'

//The condition evaluates to false because the value of the numberOfApples is 0. Since 0 is a falsy value, the code block in the else statement will run.//


                                                                                                              Truthy and Falsy Assignment

Truthy and falsy evaluations open a world of short-hand possibilities!
Say you have a website and want to take a user’s username to make a personalized greeting.
Sometimes, the user does not have an account, making the username variable falsy.
The code below checks if username is defined and assigns a default string if it is not: 

let defaultName;

if (username) {

  defaultName = username;

} else {

  defaultName = 'Stranger';

} 

Ask Michael

If you combine your knowledge of logical operators you can use a short-hand for the code above. 
In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment:

let defaultName = username || 'Stranger';

Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username 
if is truthy, and it will be assigned the value of 'Stranger' if username is falsy.
This concept is also referred to as short-circuit evaluation. *


                                                                                                                Ternary Operator

In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.

Take a look at the if...else statement example:

let isNightTime = true;

if (isNightTime) {

  console.log('Turn on the lights!');
} else {

  console.log('Turn off the lights!');
}

We can use a ternary operator to perform the same functionality:

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');





In the example above:

The condition, isNightTime, is provided before the ?.
Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.
Like if...else statements, ternary operators can be used for conditions which evaluate to true or false.


let clarity = 'of mind';

clarity ? console.log('The mind is clean you can be present and focus now' ) : console.log( 'We need to meditate more');


Else If Statements
We can add more conditions to our if...else with an else if statement. The else if statement allows for more than two possible outcomes.
You can add as many else if statements as you’d like, to make more complex conditionals!
The else if statement always comes after the if statement and before the else statement. The else if statement also takes a condition. Let’s take a look at the syntax:

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}


The else if statements allow you to have multiple possible outcomes. 
if/else if/else statements are read from top to bottom, 
so the first condition that evaluates to true from the top to bottom is the block that gets executed.
In the example above, since stopLight === 'red' evaluates to false and stopLight === 'yellow' 
evaluates to true, the code inside the first else if statement is executed. 
The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the else statement would have executed.

 let tLight = 'Pink!';

if (tLight === 'Green!') {
  console.log('Go!');

} else if (tLight === 'Yellow!') {
  console.log( 'Attention');
    
} else if (tLight ==='red') {
  console.log('Stop!');

} else {
  console.log(' Caution the signal may change');
}


CONDITIONAL STATEMENTS

Review
Way to go! Here are some of the major concepts for conditionals:

An if statement checks a condition and will execute a task if that condition evaluates to true.
if...else statements make binary decisions and execute different code blocks based on a provided condition.
We can add more conditions using else if statements.
Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
The logical operator ||, or “or”, checks if either provided expression is truthy.
The bang operator, !, switches the truthiness and falsiness of a value.
The ternary operator is shorthand to simplify concise if...else statements.
A switch statement can be used to simplify the process of writing multiple else if statements.
 The break keyword stops the remaining cases from being checked and executed in a switch statement.




Calling a Function

As we saw in previous exercises, a function declaration binds a function to an identifier.

However, a function declaration does not ask the code inside the function body to run, it just declares the existence of the function. The code inside a function body runs, or executes, only when the function is called. To call a function in your code, you type the function name followed by parentheses.

Diagram showing the syntax of invoking a function
This function call executes the function body, or all of the statements between the curly braces in the function declaration. Function execution diagram

We can call the same function as many times as needed.

Let’s practice calling functions in our code.

Instructions
1.
Imagine that you manage an online store. When a customer places an order, you send them a thank you note. Let’s create a function to complete this task:

Define a function called sayThanks() as a function declaration.
In the function body of sayThanks(), add code such that the function writes the following thank you message to the console when called: 'Thank you for your purchase! We appreciate your business.' 


function sayThanks () {

	console.log( 'Thank you for purchase.! We appreciate your business');
}

sayThanks();

function sayThanks(name){


  name = 'Joana';

console.log(`Thank you for your purchase ${name} business.We appreacite your business`);

}

sayThanks();



Parameters and Arguments
So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. 
Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.

Let’s observe how to specify parameters in our function declaration:

JavaScript syntax for declaring a function with parameters
In the diagram above, calculateArea(), computes the area of a rectangle, based on two inputs, width and height. The parameters are specified between the parenthesis as width and height, and inside the function body, 
they act just like regular variables. width and height act as placeholders for values that will be multiplied together.

When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments.
 Arguments can be passed to the function as values or variables.

JavaScript syntax for invoking a function with arguments as values
In the function call above, the number 10 is passed as the width and 6 is passed as height. Notice that the order in which arguments are passed and assigned follows the order that the parameters are declared.

JavaScript syntax for invoking a function with arguments as variables
The variables rectWidth and rectHeight are initialized with the values for the height and width of a rectangle before being used in the function call.

By using parameters, calculateArea() can be reused to compute the area of any rectangle! Functions are a powerful tool in computer programming so let’s practice creating and calling functions with parameters.

Instructions

1.

The sayThanks() function works well, but let’s add the customer’s name in the message.

Add a parameter called name to the function declaration for sayThanks().

Syntax for a function declaration with parameters:

function functionName(parameter) {

  // Function body of someFunction
}

function sayThanks(name){
 
console.log('Thank you for your purchase '+ name +'. We appreaciate your business');

}
sayThanks('Cole');