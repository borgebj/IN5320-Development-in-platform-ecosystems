
// Elements
const submit = document.getElementById("submit")
const search = document.getElementById("search")
const field = document.getElementById("resField")


// Action if submit is pressed
submit.addEventListener("click", () => {
    if (search.value.trim()) {
        fetchData(search.value)
    }
})


function fetchData(country) {
    // let query = `https://d6wn6bmjj722w.population.io/1.0/population/${country}/today-and-tomorrow/`
    let query = 'https://dhis2-app-course.ifi.uio.no/api'
    fetch(query)
        .then(res =>
            res.json()
        )
        .then(data => useData(country, data))
        .catch(error => console.log("ERROR"))
}

function useData(country, data) {
    console.log(country, ":", data)
}