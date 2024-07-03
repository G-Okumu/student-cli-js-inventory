let prompt = require('prompt-sync')();

// Define menu options

let menu_options = ["1. Search a Student", "2. Add a new student", "3. Remove a student", "4. See all students", "5. Check Duplicate Students", "6. Exit"];
let student_list = ["Modesta", "Kinyanjui", "Marion", "Albert", "Ashly", "Winnie", "Modesta"];


function display_menu_options() {
    menu_options.forEach(element => {
        console.log(element);
    });
}
// Search student from the list
function search_student() {
    let keyed_in_student_name = prompt("Kindly enter the student name: ");
    const found_student = student_list.find((student_name) => student_name.toLowerCase() === keyed_in_student_name.toLowerCase());

    if (found_student) {
        console.log(`${found_student} is in the system`)
    } else {
        console.log("OH no! Student is not found");
        const addStudentConfirmation = prompt("Do you want to add " + keyed_in_student_name + " to the system? ");

        if (addStudentConfirmation.toLowerCase() === "yes") {
            // student_list.push(keyed_in_student_name);
            // console.log("Hooray! New student added to the system, below is your new list.");
            add_new_student(keyed_in_student_name);
            console.log(student_list);
        }
    }
}

// function to add new student.

function add_new_student(name) {
    // check if name exists within our list, if not proceed to add the else just end
    // includes method returns true or false
    if (student_list.includes(name)) {
        console.log(`${name} is already in the system`);
    } else {
        student_list.push(name);
        console.log(`${name} added to the system successfully.`);
    }

}


// function to remove student from system
// findIndex, indexOf

function delete_student_from_record(student_name) {
    // use splice to remove the student
    // splice takes in the index, record count of items to be deleted

    // Find the index of the student to be deleted.
    let index_of_student_to_be_deleted = student_list.findIndex((name) => name.toLowerCase() === student_name.toLowerCase());
    // let index_of_student_to_be_deleted = student_list.indexOf(student_name);
    if (index_of_student_to_be_deleted === -1) {
        console.log("Oops, student not found");
    } else {
        student_list.splice(index_of_student_to_be_deleted, 1);
        console.log(`${student_name} deleted successfully. Below is the new list`);
        console.log(student_list);
    }

}

function see_all_students() {
    console.log("               ");
    console.log("Below are the records: ");
    console.log(`Total Records ${student_list.length}.`);

    student_list.forEach((singleStudent, index) => {
        console.log(`${index + 1}.${singleStudent}`);
    })
}

function see_all_students_with_similar_names(name) {
    console.log("               ");
    let found = student_list.filter((el) => el.toLowerCase() === name.toLowerCase());

    if (found.length > 1) {
        found.forEach((singleStudent, index) => {
            console.log(`${index + 1}.${singleStudent}`);
        })
    } else if (found.length === 1) {
        console.log("No duplicates for the above entry.")
    }
    else {
        console.log("Student not in the system.")
    }
}


function main() {
    let loopCondition = true;
    console.log("Welcome to CLI student inventory: ")

    while (loopCondition) {
        console.log("                       ");
        display_menu_options();
        let userInput = parseInt(prompt("Kindly choose your action today, from the above options: "));

        switch (userInput) {
            case 1: search_student()
                break;
            case 2:
                let student_being_added = prompt("Enter name of new student. ");
                add_new_student(student_being_added)
                break;
            case 3: let student_being_deleted = prompt("Enter name of student. ");
                delete_student_from_record(student_being_deleted);
                break;
            case 4: see_all_students();
                break;
            case 5:
                let stude = prompt("Enter name of student. ");
                see_all_students_with_similar_names(stude);
                break;
            case 6:
                loopCondition = false;
                break;
            default:
                console.log("Invalid input")
        }
    }
}

main();