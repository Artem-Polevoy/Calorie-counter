import {submitButton, inputs} from './variebles.js'

const formValidation = () => {
    inputs.addEventListener('input', (e)=>{
        const input = e.target
        if((input.id==='age', 
        input.id==='height',
        input.id==='weight') && 
        input.value.length>=1) submitButton.disabled = false
    })
}

export default formValidation