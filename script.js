//1

let nmbClick = 0;

let clickFooter = document.getElementsByClassName("text-muted")[7];
clickFooter.addEventListener("click", function () {
    console.log("clique")
    nmbClick++;
    console.log("clic numéro " + nmbClick)
});


//2
let btn = document.getElementsByClassName("navbar-toggler")[0];
btn.addEventListener("click", onClick)

var collapsing = true;
function onClick() {

    let clickNav = document.getElementById("navbarHeader");
    if (collapsing === true) {
        clickNav.classList.remove("collapse")
        collapsing = false;
    }
    else {
        clickNav.classList.add("collapse");
        collapsing = true;
    }
}

//3

let firstCard = document.getElementsByClassName("col-md-4")[0];
let firstEdit = document.getElementsByClassName("btn-outline-secondary")[0];

firstEdit.addEventListener("click", function () {
    firstCard.style = "color: red"
})

//4

let secCard = document.getElementsByClassName("col-md-4")[1];
let secEdit = document.getElementsByClassName("btn-outline-secondary")[1];

secEdit.addEventListener("click", function () {
    if (secCard.style.color === 'green') {
        secCard.style = "color: black"
    }
    else
        secCard.style = "color: green"
})

//5

var boot = false;
let clickNavig = document.getElementsByClassName("navbar")[0];
clickNavig.addEventListener("dblclick", function () {
    let link = document.head.getElementsByTagName("link")[0];
    if (boot === false) {
        link.disabled = true;
        boot = true;
    }
    else {
        link.disabled = false;
        boot = false;
    }
});

//6
var small = false;
let buttons = document.getElementsByClassName("btn-success");
let cards = document.getElementsByClassName("col-md-4");
for (let button of buttons) {
    button.addEventListener('mouseenter', function () {
        let card = this.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("card")[0];
        let text = this.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("card-text")[0];
        console.log(text)
        if (small === false) {
            card.getElementsByTagName("img")[0].style = "width: 20%"
            text.classList.add("collapse")
            small = true;
        }
        else {
            card.getElementsByTagName("img")[0].style = "width: 100%"
            text.classList.remove("collapse")
            small = false;
        }
    });
}