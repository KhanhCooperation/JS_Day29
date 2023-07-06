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
