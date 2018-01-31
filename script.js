"use strict"
//the students of class 13
let students = ['Fadi', 'Sam', 'Jim',
    'Kenan', 'Diana', 'Elmira',
    'Emre', 'Jamshid', 'Hmaza',
    'Anas', 'Logan', 'Mahmut', 'Jason'
];

console.log(students);

var randomNumber = Math.floor(Math.random() * students.length);
var studentName = "The Team Leader for this week is  " + students[randomNumber];


// document.addEventListener("click", createUl);
// document.removeEventListener("dbclick", createUl);
function createUl() {
    let root = document.getElementById('root');
    let studentH2 = document.createElement('h2');
    root.appendChild(studentH2);
    studentH2.innerHTML = studentName;


}
createUl();

function editArray(students) {
    
    
}



