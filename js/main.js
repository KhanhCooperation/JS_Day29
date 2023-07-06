//option change
changeOption = (id) => {
    if (id == "Student") {
        toggleClassByQuery(".student", "hidden-stu");
        turnOffClassIfExist(".employee", "hidden-employ");
        turnOffClassIfExist(".customer", "hidden-cus");
    } else if (id == "Employee") {
        toggleClassByQuery(".employee", "hidden-employ");
        turnOffClassIfExist(".student", "hidden-stu");
        turnOffClassIfExist(".customer", "hidden-cus");
    } else if (id == "Customer") {
        toggleClassByQuery(".customer", "hidden-cus");
        turnOffClassIfExist(".student", "hidden-stu");
        turnOffClassIfExist(".employee", "hidden-employ");
    }
    let choice = document.getElementById("choice");
    choice.innerText = id;
};
//===================================
//todo: Chia ra 3 array và render dựa trên option
let option = document.getElementById("form-choice");
option.addEventListener("change", SelectionChange);

function SelectionChange() {
    const optionValue = option.value;
    if (optionValue == "Student") {
        toggleClassByQuery(".formStudent", "hidden-stu");
        turnOffClassIfExist(".formEmployee", "hidden-employ");
        turnOffClassIfExist(".formCustomer", "hidden-cus");
    } else if (optionValue == "Employee") {
        toggleClassByQuery(".formEmployee", "hidden-employ");
        turnOffClassIfExist(".formStudent", "hidden-stu");
        turnOffClassIfExist(".formCustomer", "hidden-cus");
    } else if (optionValue == "Customer") {
        toggleClassByQuery(".formCustomer", "hidden-cus");
        turnOffClassIfExist(".formStudent", "hidden-stu");
        turnOffClassIfExist(".formEmployee", "hidden-employ");
    }
}

let arrStudent = [];
let arrEmployee = [];
let arrCustomer = [];
handleAddNV = () => {
    let option = document.getElementById("form-choice").value;
    addNV(option);
};
addNV = (type) => {
    const listP = new ListPerson();
    if (type == "Student") {
        let stuObj = getInfoFromForm(type);
        const student = new Student(stuObj.name, stuObj.addEventListener, stuObj.userID, stuObj.email, stuObj.toan, stuObj.ly, stuObj.hoa);
        listP.addStudent(student);
        listP.getStudentList;
        renderStudent();
    } else if (type == "Employee") {
        let employObj = getInfoFromForm(type);
        arrEmployee.push(employObj);
    } else if (type == "Customer") {
        let cusObj = getInfoFromForm(type);
        arrCustomer.push(cusObj);
    }
};
getInfoFromForm = (type) => {
    let ten = document.getElementById("hoTen").value;
    let address = document.getElementById("address").value;
    let userID = document.getElementById("userID").value;
    let email = document.getElementById("email").value;
    //depend on role
    if (type == "Student") {
        let toan = document.getElementById("toan").value * 1;
        let ly = document.getElementById("ly").value * 1;
        let hoa = document.getElementById("hoa").value * 1;
        return { ten, address, userID, email, toan, ly, hoa };
    } else if (type == "Employee") {
        let workDay = document.getElementById("workDay").value * 1;
        let daySalary = document.getElementById("daySalary").value;
        return { ten, address, userID, email, daySalary, toan };
    } else if (type == "Customer") {
        let tenCty = document.getElementById("tenCty").value;
        let bill = document.getElementById("bill").value;
        let rate = document.getElementById("rate").value;
        return { ten, address, userID, email, tenCty, bill, rate };
    }
};
