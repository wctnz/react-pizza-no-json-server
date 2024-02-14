export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {

    const sortArr = (arr) => {
        let res
        if (sortBy === "name") {
            res = arr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        } else {
            res = arr.sort((a, b) => a[sortBy] - b[sortBy])
        }
        return res
    }

    fetch(`http://localhost:3000/db.json`)
        .then(response => response.json())
        .then(data => dispatch(setPizzas(category === null ? sortArr(data.pizzas) : sortArr(data.pizzas.filter(pizza => pizza.category === category)))))
}
