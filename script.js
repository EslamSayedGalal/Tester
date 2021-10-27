function creditHourMultiplier(grade, hours) {
    let result;
    switch (grade) {
        case 'A+':
            result = 4 * hours;
            break;
        case 'A':
            result = 3.6 * hours;
            break;
        case 'B+':
            result = 3.3 * hours;
            break;
        case 'B':
            result = 3 * hours;
            break;
        case 'C+':
            result = 2.6 * hours;
            break;
        case 'C':
            result = 2.4 * hours;
            break;
        case 'D+':
            result = 2.2 * hours;
            break;
        case 'D':
            result = 2 * hours;
            break;
        case 'F':
            result = 0 * hours;
            break;
        default:
            result = 0;
            break;
    }

    return result;
}


function totalHours(gradeList) {
    let hours = 0;
    for (let i = 0; i < gradeList.length; i++) {
        hours += gradeList[i][1];
    }
    return hours;
}

function calculateGPA(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += creditHourMultiplier(grades[i][0], grades[i][1]);
    }
    return (sum / totalHours(grades)).toFixed(2);
}

var gradesList = [''];

function calculate() {
    let list = document.getElementsByTagName('tr').length - 1;
    for (let i = 0; i < list; i++) {
        let row = "row" + (i + 1);
        let selection = row + "Select";
        let option = row + "opt";
        let grade = document.getElementById(selection);
        let hours = 0;
        if (document.getElementById(option + "1").checked) {
            hours = 1;
        } else if (document.getElementById(option + "2").checked) {
            hours = 2;
        } else if (document.getElementById(option + "3").checked) {
            hours = 3;
        }

        gradesList[i] = [grade.options[grade.selectedIndex].value, hours];

    }
    console.log(calculateGPA(gradesList));
    let gpaEL = document.getElementById('gpa');
    gpaEL.textContent = 'GPA : ' + calculateGPA(gradesList);
    gpaEL.className = ' ';

}

function addElement() {
    let listSize = document.getElementsByTagName('tr').length;
    let newRow = document.createElement('tr');
    let position = document.getElementsByTagName('tbody')[0];
    position.appendChild(newRow);
    newRow.innerHTML = buildListElement(listSize);
}

function buildListElement(index) {
    let element = '<div class="item"><div class="title">Course ' + index + '</div><div class="selectfield">';
    element += '<select id=\"row' + index + 'Select\">';
    element += '<option value=\"\" disabled selected>Select</option>';
    element += '<option value=\"A+\">A+</option>';
    element += '<option value=\"A\">A</option>';
    element += '<option value=\"B+\">B+</option>';
    element += '<option value=\"B\">B</option>';
    element += '<option value=\"C+\">C+</option>';
    element += '<option value=\"C\">C</option>';
    element += '<option value=\"D+\">D+</option>';
    element += '<option value=\"D\">D</option>';
    element += '<option value=\"F\">F</option></select></div>';
    element += '<div class="switch-toggle">';
    element += '<input id=\"row' + index + 'opt1\" name=\"view' + index + '\" type=\"radio\" checked>';
    element += '<label for=\"row' + index + 'opt1\"> 1 </label>';
    element += '<input id=\"row' + index + 'opt2\" name=\"view' + index + '\" type=\"radio\">';
    element += '<label for=\"row' + index + 'opt2\"> 2 </label>';
    element += '<input id=\"row' + index + 'opt3\" name=\"view' + index + '\" type=\"radio\">';
    element += '<label for=\"row' + index + 'opt3\"> 3 </label>';
    element += '<a></a></div></div>';
    return element;
}