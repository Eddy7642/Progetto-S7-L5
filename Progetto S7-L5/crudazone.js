const generateProductCards = function (productArray) {
    const row = document.getElementById('events-row')
    productArray.forEach(product => {
        const newCol = document.createElement('div')
        newCol.classList.add('col')
        newCol.innerHTML.innerHTML = `
<div class="card h-100 d-flex flex-column">
  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mabeofurniture.com%2Fsfondo-nintendo-switch-k.html&psig=AOvVaw0v7ck5HYsOgYLx4XphOTJK&ust=1715431415139000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjdwpWPg4YDFQAAAAAdAAAAABAE" class="card-img-top" alt="imgCard">
  <div class="card-body d-flex flex-column justify-content-around">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <p class="card-text">${product.brand}</p>
    <div class="d-flex justify-content-between>
    <button class="btn btn-danger">COMPRA a ${product.price}€</button>
    <a href="details.html?id=${product._id}" class="btn btn-warning">INFO</a>
    </div>
  </div>
</div>
`
        row.appendChild(newCol)
    })

};

const getEvents = function () {
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZWFlYjgxODQ0MjAwMTUzNzU5MjEiLCJpYXQiOjE3MTUzMzM4NjcsImV4cCI6MTcxNjU0MzQ2N30.hW16pCvdUGy4fN8qcbA2Fy-xBK1jUR_ReNzNS7SMZlo'

        },
    })

        .then((response) => {
            if (response.ok) {
                console.log(response)
                return response.json()
            } else {
                throw new Error('Errore nella risposta del server')
            }
        })
        .then(array => {
            console.log('ARRAY!', array)

            generateProductCards(array)
        })
        .catch((err) => {
            console.log('ERRORE!', err)
        })
}
getEvents()