
window.onload = function() {

    // Elements
    const add = document.getElementById("buttonAdd")
    const remove = document.getElementById("buttonDelete")
    const list = document.querySelector("ul")
    const inputModify = document.getElementById("modify")
    const inputSearch = document.getElementById("search")


    // Step 1 - Button click on add creates new list element
    add.addEventListener("click", () => {

        // checks if input is empty
        if (inputModify.value.trim()) {
            const newLi = document.createElement("li")
            newLi.innerText = inputModify.value
            newLi.setAttribute("id", inputModify.value+"-id")
            list.appendChild(newLi)
        }
    })

    // Step 2 - Button click on remove deletes list elements
    remove.addEventListener("click", () => {
        document.getElementById(inputModify.value+"-id").remove()
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

function fetchAPI() {

}

fetchAPI()

