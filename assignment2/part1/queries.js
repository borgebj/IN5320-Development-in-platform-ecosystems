
window.onload = function() {

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
        console.log(`Query statement:\n${query}`)
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
}