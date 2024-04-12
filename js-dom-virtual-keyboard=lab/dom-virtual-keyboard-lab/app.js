console.log("We're live!");

const keyDownHandle = function (event) {
console.log(event.key);
}

const keyUpHandle = function (event) {
    console.log(event.key); 
    
            // (how do I write the code for this step? I need to make it understand what happens when the user releases the key)
    }


// element.addEventListener('keyup', <keyUpHandle>);
// element.addEventListener('keydown', <keyDownHandle>);