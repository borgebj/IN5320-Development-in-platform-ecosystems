
window.onload = function() {

    // Elements
    const add = document.getElementById("buttonAdd")
    const list = document.querySelector("ul")
    const inputModify = document.getElementById("modify")
    const inputSearch = document.getElementById("search")


    // mouseover events to change background
    function add_hoved_style(icon, button){
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "darkred"
            icon.style.color = "white"
        })
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "white"
            icon.style.color = "red"
        })
    }

    // Step 1 - Button click on add creates new list element
    add.addEventListener("click", () => {

        // checks if input is empty
        if (inputModify.value.trim()) {

            // new list-element
            const newLi = document.createElement("li")
            newLi.innerText = inputModify.value
            newLi.setAttribute("id", inputModify.value)

            // new button-element
            const newButton = document.createElement("label")
            newButton.className = "delete-button"

            // icon for button
            const icon = document.createElement("i")
            icon.innerHTML = "&#67861;"

            // removes list-element on click
            newButton.addEventListener("click", () => {
                newLi.remove()
            })

            add_hoved_style(icon, newButton)

            newButton.appendChild(icon)
            newLi.appendChild(newButton)
            list.appendChild(newLi)
            inputModify.value = "";
        }
    })

    // Step 4 - Updates list based on what's written in input in live-time
    inputSearch.addEventListener("keyup", () => {
        let li = list.getElementsByTagName("li")
        let inputValue = inputSearch.value.toLowerCase()

        // iterates through all list elements and finds one starting with letter
        for (let i = 0; i < li.length; i++) {
            if (!startsWith(li[i].innerText.toLowerCase(), inputValue))
                li[i].style.display = "none"
            else li[i].style.display = "list-item"
        }
    })
}

/*--------------------------------------------------------------------------*/
// Step 3 a) - checks if element starts with searchWord
function startsWith(element, searchWord) {
    return element.toLocaleLowerCase().startsWith(searchWord.toLowerCase());
}

// function tests
console.assert(startsWith("Fortran","for") === true)
console.assert(startsWith("Fortran","java") === false)

// Step 3 b) - checks list and calls startsWith from a)
function checkList(list, searchWord) {
    let newList = []
    list.forEach( word => {
        if (startsWith(word, searchWord)) newList.push(word)
    })
    return newList
}