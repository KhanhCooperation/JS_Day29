//change
toggleClassByQuery = (classForQuery, classToggle) => {
  let x = document.querySelectorAll(classForQuery);
  for (let i = 0; i < x.length; i++) {
    x[i].classList.toggle(classToggle);
  }
};
turnOffClassIfExist = (classForQuery, classToTurnOff) => {
  var divElement = document.querySelector(classForQuery);
  if (divElement.classList.contains(classToTurnOff) == false) {
    toggleClassByQuery(classForQuery, classToTurnOff);
  }
};
//================================
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
pushInfoToFrom = (type, hoten, add, id, email, inf1, inf2, inf3) => {
  document.getElementById("hoTen").value = hoten;
  document.getElementById("address").value = add;
  document.getElementById("userID").value = id;
  document.getElementById("email").value = email;
  //depend on role
  if (type == "Student") {
    document.getElementById("toan").value = inf1;
    document.getElementById("ly").value = inf2;
    document.getElementById("hoa").value = inf3;
  } else if (type == "Employee") {
    document.getElementById("workDay").value = inf1;
    document.getElementById("daySalary").value = inf2;
  } else if (type == "Customer") {
    document.getElementById("tenCty").value = inf1;
    document.getElementById("bill").value = inf2;
    document.getElementById("rate").value = inf3;
  }
};
