alert ("Answer the following question");
let score = 0;
let totalScore = 5;
let ques1 = 'Can we use CamelCase in JS?';
let ans1 = "yes";
let ques2 =  "Shall underscore use as variable?";
let ans2 = "yes";
let ques3 =  "Does JS doent follow BODMAS rule";
let ans3 = "no";
let ques4 =  "Do this language sound complex to you?";
let ans4 = "yes";
let ques5 = "Is it integrated with CSS?"
let ans5 = "no";


let response1 = prompt(ques1);
let response2 = prompt(ques2);
let response3 = prompt(ques3);
let response4 = prompt(ques4);
let response5 = prompt(ques5);

if (response1 === ans1) {
    score++
};

if (response2 === ans2) {
    score++
};

if (response3 === ans3) {
    score++
};

if (response4 === ans4) {
    score++
};

if (response5 === ans5) {
    score++
};

alert (score / totalScore*100 + "%");