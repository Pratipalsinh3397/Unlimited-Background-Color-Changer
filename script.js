//---------------------------------------backgroundColor changer using hex code---------------------------------------
// const randomColor = function(){
//     let hex = "0123456789ABCDEF"
//     let color = "#"

//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 16)]
//     }
//     return color
// }

// let interval;
// let startChange = function(){

//     if(!interval){
//         interval = setInterval(function(){
//             document.body.style.backgroundColor = randomColor()
//         },1000)
//     }
// }
// document.querySelector('#start').addEventListener('click',startChange)

// let stopChange = function(){

//     clearInterval(interval)
//     interval = null;
// }
// document.querySelector('#stop').addEventListener('click',stopChange)

//---------------------------------------backgroundColor changer using rgb code---------------------------------------
const randomColor = function(){
    let rgb = Math.floor(Math.random() * 255)
    return rgb;

    // let r = Math.floor(Math.random() * 255)
    // let g = Math.floor(Math.random() * 255)
    // let b = Math.floor(Math.random() * 255)
    // let rgb = `rgb(${r},${g},${b})`
    // return rgb;
}

let interval;
let startChange = function(){

    if(!interval){
        interval = setInterval(function(){
            document.body.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
            // document.body.style.backgroundColor = randomColor();
        },1000)
    }
}
document.querySelector('#start').addEventListener('click',startChange)

let stopChange = function(){

    clearInterval(interval)
    interval = null;
}
document.querySelector('#stop').addEventListener('click',stopChange)

