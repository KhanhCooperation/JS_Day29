//option
changeOption = (id) => {
    console.log("id: ", id);
    let choice = document.getElementById("choice");
    choice.innerText = id;
}
a = () => {
    let x = document.querySelectorAll(".employ");
    console.log("employ: ", x);
    for (let i = 0; i < x.length; i++) {
        console.log("x ", i, ":", x[i]);
        x[i].classList.toggle("hidden-cus");
        console.log("x ", i, ":", x[i]);
    }
}
