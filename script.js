$(document).ready(onReady);
let clickCount = 0;
let expenses = 0;

function onReady(){
    $('#submissionButton').on('click', clickHandler)
}//end onReady

function allEmployees(){
    $('#listOfEmployees').append(
        '<tr>' +
            '<td>' + $('#newFirstName').val() + '</td>' +
            '<td>' + $('#newLastName').val() + '</td>' +
            '<td>' + $('#newID').val() + '</td>' +
            '<td>' + $('#newTitle').val() + '</td>' +
            '<td>' + $('#newAnnualSalary').val() + '</td>' +
        '</tr>'
    );//end append
}//end allEmployees

function clickHandler() {

    clickCount++;
    totalBudget();
    allEmployees();
    $('input').val('');

}//end clickHandler


function totalBudget(){

    let salary = $('#newAnnualSalary').val()/12;
    expenses += salary;
    $('#expenses').html('Monthly Budget: $' + expenses);
    if (expenses >= 20000){
        document.getElementById("expenses").style.color = "red";
    }
    
}//end totalBudget