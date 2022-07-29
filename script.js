const eas_cont = document.querySelector('#eas-cont')
const size_div = document.querySelector('.size')
const color_mode = document.querySelector('.normal-color')
const rainbow_mode = document.querySelector('.rainbow-color')


let size;
function promptQuestion(){
    let size = prompt('Give me a number bigger than 16 and smaller than 100', 16)
    if (size >= 16 && size < 100){
        return size
    } else if (size < 16 || size > 100){
        alert('Error: Numbers bigger than 16 and smaller than 100')
        promptQuestion()
    }
}

function createDivs(){
    size = promptQuestion()
    size_div.textContent = size + 'x' + size;

    let calc = 512 / size;
    for (let i = 0; i < size ** 2; i++){
        const div = document.createElement('div')
        div.style.height = `${calc}px`
        div.style.width = `${calc}px`

        div.addEventListener('mouseover', () =>{
            div.style.background = '#36454f';
        })

        color_mode.addEventListener('click', () => {
            div.addEventListener('mouseover', () => {
                div.style.background = '#36454f';
            })
        })

        rainbow_mode.addEventListener('click', () => {
            div.addEventListener('mouseover', () => {
                let x = Math.floor(Math.random() * 256);
                let y = Math.floor(Math.random() * 256);
                let z = Math.floor(Math.random() * 256);
                let randomColor = "rgb(" + x + "," + y + "," + z + ")";
              
                div.style.background = randomColor;
            })

        })
        eas_cont.appendChild(div)
    }

}