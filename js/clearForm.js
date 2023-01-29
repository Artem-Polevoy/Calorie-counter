import {inputs, resetButton, result} from './variebles.js'

const clearForm = () => {
    inputs.addEventListener('input', (e)=>{
        const inputValue = e.target.value
        if(inputValue > 0) resetButton.disabled = false
    })
    resetButton.addEventListener('click', (e)=>{
        result.classList.add('counter__result--hidden')
    })
}

export default clearForm