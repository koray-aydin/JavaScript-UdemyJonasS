
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log("Koray"); // tarayıcı konsolu için
console.log(22);

//değişken isimlendirme: camelCase birden fazla sözcük varsa ilk sözlücüğün ilk harfi küçük olur,diğerlerinin ilk harfi büyük olur. firstNamePerson, camelCase vb... değişkenlerin ilk karakteri number olamaz, sayı ile başlayamaz.değişken adı sadece sayı,harf,çizgi (-)(_),dolarişareti içerebilir. değişken adı "function" veya "name" olamaz, _ veya $ eklenebilir. değişken adının ilk karakteri büyük harf olmamalı.
let firstName = "Koray"; // variables değişken defalarca kullanılabilir.
console.log(firstName); // tarayıcı konsolda görünüyor
console.log(firstName);// defalarca kulanılabiliyor
console.log(firstName);

let person = "jonas";
let PI = 3.1415; //bu gerçek bir sayı

let job1 = "programmer"; //anlaşılması zor değişken ismi
let job2 = "teacher"; //anlaşılması zor değişken ismi

let myFistJob = "programmer"; //anlaşılması gayet kolay değişken ismi. bu şekilde variable name yazılmalı.
let myCurrentJob = "teacher"; //anlaşılması gayet kolay değişken ismi. bu şekilde variable name yazılmalı.
console.log(myFistJob);

*/





/*
//LECTURE: Values and Variables part 1
let countryNameDE = "Germany";
let countryNameIN = "India";
let countryNamePT = "Portugal";
let countryContinentDE = "Europe";
let countryContinentIN = "Asia";
let countryContinentPT = "Europe";
let countryPolulationDE = 80000000;
let countryPolulationIN = 1000000000;
let countryPolulationPT = 10000000;
console.log(countryNameDE, countryContinentDE, countryPolulationDE);
console.log(countryNameIN, countryContinentIN, countryPolulationIN);
console.log(countryNamePT, countryContinentPT, countryPolulationPT);
//answer checked, true, np
*/





//data tipleri:
//value: object or primitive [everything else]
//primitive: 7 tür var. number, string, bullion, undefined, null, symbol, big int
//number: floating point number. decimals and integers
//string: sequence of characters. used for text. " " içerisine yazıır.
//boolean: logical type that only be true or false. used for taking decisions.
//undefined: value taken by a variable that is not yet defined ('empty value')
//null: also means 'empty value'
//symbol: (es2015) values that is unique and cannot be changed
//bigIng: (es2020): larger integers than the number type can hold
//JS has dynamic typing, data types are determined automatically.




/*
let jsIsFun = true; //boolean type
console.log(jsIsFun);
console.log(typeof jsIsFun); //type of ile boolean olduğunu öğrendik
console.log(typeof 84545); //type of ile number olduğunu öğrendik
console.log(typeof "koraya"); //type of ile string olduğunu öğrendik
console.log(typeof 'koraya'); //type of ile string olduğunu öğrendik
//console.log(typeof "koraya'); //type of ile string olduğunu öğrendik. TIRNAK İŞARETLERİNE DİKKAT!!! BU HATAYA DIKKAT
jsIsFun = "YES!!!"; // değişkeni yukarda kullandık ve let kullanmaya gerek yok. böylelikle değiştirmiş olduk.
console.log(typeof jsIsFun); //string olarak görünüyor.

let year; //değişken var ama değer vermedik
console.log(year); // undefined oldu.
console.log(typeof year); //değer verilmediğinden undefined oldu.

year = 1991;
console.log(typeof year); //number oldu
console.log(typeof null); // object çıktı. bu mantıksız. bu hata düzeltilmedi. bu bölüme dikkat.
*/






/*
//13.
let age = 30; //let ile tanımlananlara yeniden değer atanabilir. let variables can be change. empty variables possible. not recommended, only use as long as if it needs to change.
age = 31; //reassinging the value of the variable.

const birthYear = 1991; //değişemeyenleri const ile tanımlıyoruz. bunlar değiştirilemez. immutable variable. the variable cannot be mutated.empty variables impossible. recommended.
//birthYear = 1980; >> console da hata veriyor.uncaught TypeError: Assignment to constant variable

//var başka bir tür değişken tanımlama yöntemi ancak asla asla kullanılmamasını öneriyor. çok eski bir yöntem.

var job = 'programmer';
job = 'teacher';

lastName = 'aydin'; //çalışıyor ama asla değişken tanımlamıyor. global object'te 1 varlık tanımlıyor. declare etmeden bu şekilde yazılmaması lazım.
console.log(lastName);
*/



/*
//14 basic operators:

//const ageKoray = 2077 - 1994;
//const ageSarah = 2077 - 2023;
//console.log(ageKoray, ageSarah);

// math operators
const now = 2077; //yıl değiştiğinde bunu değişiriyoruz sadece, böylelikle problemden kurtulmuş oluyoruz.
const ageKoray = now - 1994;
const ageSarah = now - 2023;
console.log(ageKoray, ageSarah);

//assignment operators
console.log(ageKoray * 2, ageKoray / 10, 2 ** 3);
//2 ** 3 means 2 to power of 3 = 2*2*2 (ikinin üçüncü kuvveti, 2üzeri 3 )
const firstName = 'koray';
const lastName = 'aydin';
console.log(firstName + lastName); //korayaydin
console.log(firstName + ' ' + lastName); // koray aydin
let x = 10 + 5; // 15
x += 10 // x= x + 10 = 25
x *= 4; // x = x*4 = 100
x++; // x = x+1
x--; // x = x-1
console.log(x);

//comparison operators
console.log(ageKoray > ageSarah); // < , > , <= , >=
console.log(ageSarah >= 18);
console.log ( now - 1994 > now - 2023);
*/




//15. Operator Precedence
/*
const now = 2077; //yıl değiştiğinde bunu değişiriyoruz sadece, böylelikle problemden kurtulmuş oluyoruz.
const ageKoray = now - 1994;
const ageSarah = now - 2023;
console.log(ageKoray, ageSarah);
console.log(now - 1994 > now - 2023); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let x, y;
x = y = 25 - 10 - 5;  // x = y = 10 , x = 10
console.log(x, y);

const averageAge = ageKoray + ageSarah / 2 // only agesarah/2 not sum of the ages. paranthesis needed
console.log(ageKoray, ageSarah);
const averageAge = (ageKoray + ageSarah) / 2 // first, sum up all ages. then divide 2
*/

//16. coding challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
 Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
 Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */

/*
//data1
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;
const BMImark = massMark / heightMark ** 2;
const BMIjohn = massJohn / heightJohn ** 2;
const markHigherBmi = BMImark > BMIjohn;
console.log(BMImark, BMIjohn, markHigherBmi);

//data2
const massM = 95
const massJ = 85
const heightM = 1.88;
const heightJ = 1.76;
const BMIm = massM / heightM ** 2;
const BMIj = massJ / heightJ ** 2;
const mHigherBmi = BMIm > BMIj;
console.log(BMIm, BMIj, mHigherBmi);
*/

// 17. strings and template literals
/*
const firstName = "Koray";
const job = "firefighter";
const birthYear = "1994";
const year = 2036;

const Koray = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(Koray);

const korayNew = `I'm ${firstName} , a ${year - birthYear} years old ${job}.`;//altgr + virgül tuşları ile backtick yapabilirsin
console.log(korayNew);
console.log(`I'd like to talk a bit about myself, ${korayNew} so that's my story in a single statement. `);
*/

//18. taking decisions: if / else statements
/*
const age = 19
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log('Sarah can start driving licence 🚗')
}
*/

/*
// control structure if-else statement
const age = 15
if (age >= 18) {
    console.log('Sarah can start driving licence 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
};
*/

/*
const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}
console.log(century);
*/

//19. coding challenge 2
/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀 */
/*
const massM = 95
const massJ = 85
const heightM = 1.88;
const heightJ = 1.76;
const BMIm = massM / heightM ** 2;
const BMIj = massJ / heightJ ** 2;
const mHigherBmi = BMIm > BMIj;
console.log(BMIm, BMIj, mHigherBmi);
if (BMIm > BMIj) {
    console.log(`Mark's BMI Index Result (${BMIm}) is higher than John's BMI Index Result (${BMIj}).`)
}
else {
    console.log(`John's BMI Index Result (${BMIj}) is higher than Mark's BMI Index Result(${BMIm}).`)
}
console.log(`Mark's BMI Index Result: ${BMIm} and  John's BMI Index Result: ${BMIj}.`);
*/

/*
//20 type conversion and coercion 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
*/

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
-Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
-Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
-Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

/*
//task1
const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;
console.log(averageDolphins, averageKoalas);
//task2 
if (averageDolphins > averageKoalas) {
    console.log(`The winner gymnastics team is Dolphins with score ${averageDolphins}`);
} else {
    console.log(`The winner gymnastics team is Koalas with score ${averageKoalas}`);
}


//task3


const averageDolphinsbon1 = (97 + 112 + 101) / 3;
const averageKoalasbon1 = (109 + 95 + 123) / 3;
console.log(averageDolphinsbon1, averageKoalasbon1);
if (averageDolphinsbon1 > averageKoalasbon1 && averageDolphinsbon1 >= 100) {
    console.log(`The winner gymnastics team is Dolphins with score ${averageDolphinsbon1}`);
} else if (averageKoalasbon1 > averageDolphinsbon1 && averageKoalasbon1 >= 100) {
    console.log(`The winner gymnastics team is Koalas with score ${averageKoalasbon1}`);
} else {
    console.log(`There is no winner gymnastics team`);
}


//task4

const averageDolphinsbon2 = (97 + 112 + 101) / 3;
const averageKoalasbon2 = (109 + 95 + 106) / 3;

if (averageDolphinsbon2 > averageKoalasbon2 && averageDolphinsbon2 >= 100) {
    console.log(`The winner gymnastics team is Dolphins with score ${averageDolphinsbon2}`);
} else if (averageKoalasbon2 > averageDolphinsbon2 && averageKoalasbon2 >= 100) {
    console.log(`The winner gymnastics team is Koalas with score ${averageKoalasbon2}`);
} else if (averageKoalasbon2 === averageDolphinsbon2 && averageKoalasbon2 >= 100 && averageDolphinsbon2 >= 100) {
    console.log(`draw! There is no winner gymnastics team`);
} else {
    console.log(`no team wins the trophy`);
}

*/

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
- Data 1: Test for bill values 275, 40 and 430
Hints:
- To calculate 20% of a value, simply multiply it by 20/100 = 0.2
- Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

/*
let totalPayment;
let restaurantBill = 430;
let restaurantTip;
if (restaurantBill >= 50 && restaurantBill <= 300) {
    restaurantTip = restaurantBill * 0.15;
    totalPayment = (restaurantBill + restaurantTip);
    console.log(` the bill is ${restaurantBill} ,you must pay ${restaurantTip} ,amount of tip and total payment is ${totalPayment}`);
} else {
    restaurantTip = restaurantBill * 0.2;
    totalPayment = (restaurantBill + restaurantTip);
    console.log(`the bill is ${restaurantBill} ,you must pay ${restaurantTip} amount of tip and total payment is ${totalPayment}`);
}

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(` the bill is ${bill} ,you must pay ${tip} ,amount of tip and total payment is ${bill + tip}`)
*/

