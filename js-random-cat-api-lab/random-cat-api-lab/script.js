const url = 'https://api.thecatapi.com/v1/images/search'

fetch(url)
    .then(response => {
        console.log("success!", response)
    })
    .catch(error => {
        console.error("Something went wrong...", error)
    })


const button = document.getElementById('randomButton')

button.addEventListener('click', function () {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(function (result) {
                console.log(result);
            })
            .catch(function (err) {
                console.error(err);
            });
    });
