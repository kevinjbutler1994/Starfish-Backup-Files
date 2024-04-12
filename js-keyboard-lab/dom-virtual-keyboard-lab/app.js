

const input = document.querySelector("#input");
const letters = document.querySelectorAll(".letter");

// console.dir(letters[1].dataset.letter);


input.addEventListener("keydown", e => {
    letters.forEach (element => {
        if (e. key === element.dataset.letter) {
            element.classList.add('active')
            }
        })
    });

    input.addEventListener("keyup", e => {
        letters.forEach (element => {
            if (e. key === element.dataset.letter) {
                element.classList.remove('active')
                }
            })
    

    input.value = ''
    })

letters.forEach(element => {
    element.addEventListener('mousover')
        letters.forEach (element => {
            if (e. key === element.dataset.letter){
                element.classList.add('active')
            }
        })
        
letters.forEach(element => {
    element.addEventListener('mouseout', e => {
        e.target.classList.remove('active')
            })
          })
          
})

// input.addEventListener("keyup", (e) => console.log("keyup:", e.key));





