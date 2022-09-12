
// Elements
const submit = document.getElementById("submit")
const search = document.getElementById("search")


// Action if submit is pressed
submit.addEventListener("click", () => {
    if (search.value.trim()) {
        querySearch(search.value)
    }
})

function querySearch(country) {
    let query = `https://dhis2-app-course.ifi.uio.no/api?Country=${country}`
    query = "https://d6wn6bmjj722w.population.io/1.0/population/Norway/today-and-tomorrow/"
    fetch(query, {
        method: "GET",
        headers: {
                "Content-Type": "application/json"
            }
        }
    )
        .then(response => response.json())
        .then(console.log)
}

/*
let query = `https://dhis2-app-course.ifi.uio.no/api?Country=${country}`
query = "https://d6wn6bmjj722w.population.io/1.0/population/Norway/today-and-tomorrow/"
const f = fetch(query).then((response) => response.json())
console.log(await f)
 */