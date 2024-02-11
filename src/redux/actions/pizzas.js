export const fetchPizzas = (category, sortBy) => (dispatch) => {
    fetch(`/pizzas?${category !== null ? `category=${ category }` : ""}&_sort=${ sortBy }`)
        .then(response => response.json())
        .then(data => dispatch(setPizzas(data)))
}

export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items
})

