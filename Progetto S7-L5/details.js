//https://striveschool-api.herokuapp.com/api/product/_id

const addressBarContent = new URLSearchParams(location.search)
console.log(addressBarContent)
const eventId = addressBarContent.get('eventId')

const getEventData = function () {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`)

        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Errore nel recupero dei dettagli dell'evento")
            }
        })
        .then((event) => {
            console.log('DETTAGLI RECUPERATI', event)
            document.getElementById('name').innerText = event.name
            document.getElementById('description').innerText = event.description
            document.getElementById('brand').innerText = event.brand
            document.getElementById("photo").innerHTML = ``
            document.getElementById('price').innerText = event.price + '€'

        })
        .catch((err) => {
            console.log('ERRORE', err)
        })
}

getEventData()

const deleteEvent = function () {

    fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
        method: 'DELETE',

    })
        .then((response) => {
            if (response.ok) {

                alert(' ELIMINAT')
                location.assign('index.html')
            } else {

                alert('ERRORE - NON ELIMINATO')
            }
        })
        .catch((err) => {
            console.log('ERR', err)
        })
}

const editButton = document.getElementById('edit-button')
editButton.addEventListener('click', function () {
    location.assign(`backoffice.html?eventId=${eventId}`)
})