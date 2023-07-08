//render from Local
let arrStudent = [];
let arrEmployee = [];
let arrCustomer = [];

//*Employee
arrEmployee = JSON.parse(localStorage.getItem("arrEmp"));
if (arrEmployee != null) {
  renderEmployee(arrEmployee);
}
//*Customer
arrCustomer = JSON.parse(localStorage.getItem("arrCus"));
if (arrCustomer != null) {
  renderCustomer(arrCustomer);
}
//*Student (để dứi cùng tại set Student là default)
arrStudent = JSON.parse(localStorage.getItem("arrStu"));
if (arrStudent != null) {
  renderStudent(arrStudent);
}
//option change
changeOption = (id) => {
  if (id == "Student") {
    toggleClassByQuery(".student", "hidden-stu");
    turnOffClassIfExist(".employee", "hidden-employ");
    turnOffClassIfExist(".customer", "hidden-cus");
    if (arrStudent != null) {
      renderStudent(arrStudent);
    } else {
      renderClear();
    }
  } else if (id == "Employee") {
    toggleClassByQuery(".employee", "hidden-employ");
    turnOffClassIfExist(".student", "hidden-stu");
    turnOffClassIfExist(".customer", "hidden-cus");

    if (arrEmployee != null) {
      renderEmployee(arrEmployee);
    } else {
      renderClear();
    }
  } else if (id == "Customer") {
    toggleClassByQuery(".customer", "hidden-cus");
    turnOffClassIfExist(".student", "hidden-stu");
    turnOffClassIfExist(".employee", "hidden-employ");
    if (arrCustomer != null) {
      renderCustomer(arrCustomer);
    } else {
      renderClear();
    }
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
handleAddNV = () => {
  let option = document.getElementById("form-choice").value;
  addNV(option);
};
//
//
let listP = new ListPerson();
transfertoLocal = (Arr, nameArr) => {
  let data = JSON.stringify(Arr);
  localStorage.setItem(nameArr, data);
};
addNV = (type) => {
  //Cuu
  if (type == "Student") {
    let stuObj = getInfoFromForm(type);
    const student = new Student(
      stuObj.ten,
      stuObj.address,
      stuObj.userID,
      stuObj.email,
      stuObj.toan,
      stuObj.ly,
      stuObj.hoa
    );
    if (arrStudent != null) {
      for (i = 0; i < arrStudent.length; i++) {
        listP.addStudent(arrStudent[i]);
      }
    }
    listP.addStudent(student);
    let arrStu = listP.getStudentList();
    transfertoLocal(arrStu, "arrStu");
    renderStudent(arrStu);
  } else if (type == "Employee") {
    let employObj = getInfoFromForm(type);
    const employ = new Employee(
      employObj.ten,
      employObj.address,
      employObj.userID,
      employObj.email,
      employObj.workDay,
      employObj.daySalary
    );
    if (arrEmployee != null) {
      for (i = 0; i < arrEmployee.length; i++) {
        listP.addEmployee(arrEmployee[i]);
      }
    }
    listP.addEmployee(employ);
    let arrEmp = listP.getEmployeesList();
    transfertoLocal(arrEmp, "arrEmp");
    renderEmployee(arrEmp);
  } else if (type == "Customer") {
    let cusObj = getInfoFromForm(type);
    const cus = new Customer(
      cusObj.ten,
      cusObj.address,
      cusObj.userID,
      cusObj.email,
      cusObj.tenCty,
      cusObj.bill,
      cusObj.rate
    );
    if (arrCustomer != null) {
      for (i = 0; i < arrCustomer.length; i++) {
        listP.addCustomer(arrCustomer[i]);
      }
    }
    listP.addCustomer(cus);
    let arrCus = listP.getCustomerList();
    transfertoLocal(arrCus, "arrCus");
    // renderCus(arrCus);
  }
};
getInfoFromForm = (type) => {
  let ten = document.getElementById("hoTen").value;
  let address = document.getElementById("address").value;
  let userID = document.getElementById("userID").value * 1;
  let email = document.getElementById("email").value;
  //depend on role
  if (type == "Student") {
    let toan = document.getElementById("toan").value * 1;
    let ly = document.getElementById("ly").value * 1;
    let hoa = document.getElementById("hoa").value * 1;
    return { ten, address, userID, email, toan, ly, hoa };
  } else if (type == "Employee") {
    let workDay = document.getElementById("workDay").value * 1;
    let daySalary = document.getElementById("daySalary").value * 1;
    return { ten, address, userID, email, workDay, daySalary };
  } else if (type == "Customer") {
    let tenCty = document.getElementById("tenCty").value;
    let bill = document.getElementById("bill").value;
    let rate = document.getElementById("rate").value;
    return { ten, address, userID, email, tenCty, bill, rate };
  }
};

//editUser
editUser = (id, type) => {
  if (type == "Student") {
    for (let i = 0; i < arrStudent.length; i++) {
      if (arrStudent[i].id == id) {
        pushInfoToFrom(
          type,
          arrStudent[i].ten,
          arrStudent[i].address,
          arrStudent[i].id,
          arrStudent[i].email,
          arrStudent[i].toan,
          arrStudent[i].ly,
          arrStudent[i].hoa
        );
      }
    }
  }
  if (type == "Employee") {
    for (let i = 0; i < arrEmployee.length; i++) {
      if (arrEmployee[i].id == id) {
        pushInfoToFrom(
          type,
          arrStudent[i].ten,
          arrStudent[i].address,
          arrStudent[i].id,
          arrStudent[i].email,
          arrStudent[i].WorkingDay,
          arrStudent[i].DaySalary
        );
      }
    }
  }
  if (type == "Customer") {
    for (let i = 0; i < arrCustomer.length; i++) {
      if (arrCustomer[i].id == id) {
        pushInfoToFrom(
          type,
          arrStudent[i].ten,
          arrStudent[i].address,
          arrStudent[i].id,
          arrStudent[i].email,
          arrStudent[i].hoaDo,
          arrStudent[i].danhGia
        );
      }
    }
  }
};
save = () => {
  //Cuu //!Tại sao nó có STU trong arr
  let choice = document.getElementById("form-choice").value;
  let userID = document.getElementById("userID").value * 1;
  if (choice == "Student") {
    console.log("be4: ", arrStudent);
    for (let i = 0; i < arrStudent.length; i++) {
      if (arrStudent[i].id == userID) {
        let stuObj = getInfoFromForm("Student");
        const student = new Student(
          stuObj.ten,
          stuObj.address,
          stuObj.userID,
          stuObj.email,
          stuObj.toan,
          stuObj.ly,
          stuObj.hoa
        );
        arrStudent.splice(i, 1, student);
      }
    }
    console.log("aft", arrStudent);
  } else if (choice == "Employee") {
    for (let i = 0; i < arrStudent.length; i++) {
      if (arrEmployee[i].id == userID) {
        let employObj = getInfoFromForm("Employee");
        const employ = new Employee(
          employObj.ten,
          employObj.address,
          employObj.userID,
          employObj.email,
          employObj.workDay,
          employObj.daySalary
        );
        arrStudent.splice(i, 1, employ);
      }
    }
  } else if (choice == "Customer") {
    for (let i = 0; i < arrStudent.length; i++) {
      if (arrCustomer[i].id == userID) {
        let cusObj = getInfoFromForm("Customer");
        const cus = new Customer(
          cusObj.ten,
          cusObj.address,
          cusObj.userID,
          cusObj.email,
          cusObj.tenCty,
          cusObj.bill,
          cusObj.rate
        );
        arrStudent.splice(i, 1, cus);
      }
    }
  }
};
