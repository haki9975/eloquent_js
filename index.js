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
    for (i = 0; i <= 100; i++ ){
        let output = ""
        if (i % 3 == 0) {output += "Fizz";}
        if ( i % 5 == 0) {output += "Buzz";}
        console.log(output || i );
    }
}
fuzzBizz()