// document.addEventListener("DOMContentLoaded") => {
//     console.log("hello")
// }
function triangleLoop() {
    for (let i = "#"; i.length < 8; i += "#") {
        console.log(i)
    }
}

triangleLoop()

function fuzzBizz() {
    for (i = 0; i < 100; i++ ){
        if (i % 3 == 0 ) {
            console.log("Fizz")
        }
        else if (i % 5 == 0) {
            console.log("Buzz")
        }
        else if (i % 5 == 0 && i % 3 == 0){
            console.log("FuzzBuzz")
        }
        else {
            console.log(i)
        }
        
    }
}