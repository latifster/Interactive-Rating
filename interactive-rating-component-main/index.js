var buttons = document.querySelectorAll("button")
var selectedrating = document.getElementById("srating-text")
var ratingbox = document.getElementById("rating-box")
var afterbox = document.getElementById("after-box")
let selected;




function Clicked(btn) {          
    if (btn.dataset["btn"] == "6") {
        if (selected != null) {
            ratingbox.style.visibility = "hidden";
            afterbox.style.visibility = "visible";
        }

        return;
    }
    if (selected == null) {
        btn.style.cssText = 'color:white; background: hsl(25, 97%, 53%);';
        selected = btn
        selectedrating.innerText = ` ${selected.dataset['btn']} `
    } else {
        selected.style.cssText = 'color:hsl(217, 12%, 63%); background:hsl(213, 19%, 28%);';
        btn.style.cssText = 'color:white; background: hsl(25, 97%, 53%);';
        selected = btn
        selectedrating.innerText = selected.dataset['btn']
    };

}



buttons.forEach(button => {
    button.addEventListener("click", e => {
        Clicked(e.target)
    })
});


