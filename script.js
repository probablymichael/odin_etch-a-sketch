/* DECLARATIONS */
const eas_cont = document.querySelector('#eas-cont')
const size_div = document.querySelector('.size')
const color_mode = document.querySelector('.normal-color')
const rainbow_mode = document.querySelector('.rainbow-color')
const clear_button = document.querySelector('.clear')

/* NEEDED FUNCTIONS */
function deleteChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/* PROMPT QUESTION */
let size;
function promptQuestion(){
    let size = prompt('Give me a number bigger than 16 and smaller than 100', 16)
    if (size >= 16 && size < 100){
        return size;
    } else if (size < 16 || size > 100){
        alert('Error: Numbers bigger than 16 and smaller than 100')
        promptQuestion();
    } else if (size !== Number){
       alert('Error: Numbers only');
    }
}

/* MAIN FUNCTION - CREATE BOXES/DIVS */
function createDivs(){
    size = promptQuestion()
    /* deletes already made boxes from previous changes */
    deleteChild(eas_cont)

    /* if size is somehow undefined do that, just in case */
    if (size == undefined){
        promptQuestion()
    } else {
        size_div.textContent = `${size}x${size}`;
    }

    /* 512 is the width */
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
            let x = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);
            let randomColor = "rgb(" + x + "," + y + "," + z + ")";
            div.addEventListener('mouseover', () => {
                div.style.background = randomColor;
            })
            rainbow_mode.style.color = randomColor;
        })

        clear_button.addEventListener('click', () => {
            div.style.background = '';
            rainbow_mode.style.color = '#FCF1E1';
        })

        eas_cont.appendChild(div)
    }

}
