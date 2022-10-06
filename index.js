//task 1
const PersonAna = {
    Ananame: "ana",
    AnaAge: 28,
};
const PersonLevani = {
    LevanName: "levani",
    LevanAge: 21,
};
let ages = PersonAna.AnaAge - PersonLevani.LevanAge;
let AnaLevani = PersonAna.Ananame + " " + PersonLevani.LevanName + "_ze" + " " + ages + " " + "wlit ufrosia";

console.log(
    AnaLevani
);
// task 2
let studentNames = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den'];

let lengArr = studentNames.length / 2 - 0.5;
console.log(
    lengArr
);
console.log(
    studentNames[lengArr]
)

//task 3
let studentObject = {
    firstname: "jon",
    lastname: "smith",
    age: 23,
    subject: ["istoria",
              "geografia",
              "qimia",
              "biologia",
              "fizika"
],
    roommate: {
        roommateFullName: "ann gordon",
        roommateAge: 23
    }
    
};
let subject = studentObject.subject;
for (let i = 0; i < studentObject.subject.length; i++)
{console.log(subject[i]);
};

let fullname = studentObject.firstname + " " + studentObject.lastname;
console.log(
    fullname
);
let result = fullname + " " + "aris" + " " + studentObject.age + " " + "wlis da misi roommate aris" + " " + studentObject.roommate.roommateFullName;
console.log(result);
//task 4
let fruitsArr = ["Banana", "Orange", "Apple", "Mango", 2, 12];
let i = 0;
while (typeof fruitsArr[i] === "string") {
  console.log(fruitsArr[i]);
  i++;
};