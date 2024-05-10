//name,description,brand, price
//imageUrl:
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mabeofurniture.com%2Fsfondo-nintendo-switch-k.html&psig=AOvVaw0v7ck5HYsOgYLx4XphOTJK&ust=1715431415139000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjdwpWPg4YDFQAAAAAdAAAAABAE

class Product {
    constructor(_name, _description, _brand, _imageUrl, _price) {
        this.name = _name
        this.description = _description
        this.brand = _brand
        this.imageUrl = _imageUrl
        this.price = _price

    }
}


const submitEvent = function (e) {
    e.preventDefault()
    const nameInput = document.getElementById('name')
    const descriptionInput = document.getElementById('description')
    const brandInput = document.getElementById('brand')
    const imageUrl = document.getElementById('imageUrl')
    const priceInput = document.getElementById('price')

    const productFromForm = new Product(
        nameInput.value,
        descriptionInput.value,
        brandInput.value,
        imageUrl.value,
        priceInput.value
    )
    console.log('Prodotti da inviare', productFromForm)
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: 'POST',
        body: JSON.stringify(productFromForm),
        headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZWFlYjgxODQ0MjAwMTUzNzU5MjEiLCJpYXQiOjE3MTUzMzM4NjcsImV4cCI6MTcxNjU0MzQ2N30.hW16pCvdUGy4fN8qcbA2Fy-xBK1jUR_ReNzNS7SMZlo'
        }
    })
        .then(response => {
            if (response.ok) {
                alert('Il prodotto è stato salvato con successo!')
            } else {
                throw new Error('Errore salvataggio')
                alert('Il prodotto non è stato salvato!')
            }
        })
        .catch(err => {
            console.log('ERRORE', err)
        })
}

document.getElementById('event-form').addEventListener('submit', submitEvent)