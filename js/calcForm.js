import {form, result, caloriesNorm, caloriesMinimal, caloriesMaximal} from './variebles.js'

function calcForm(e) {

    e.preventDefault()

    result.classList.remove('counter__result--hidden')

    let genderValue = form.querySelectorAll('[name="gender"]')
    genderValue.forEach((el)=>{
        if(el.checked){genderValue = el.value}
    })
    
    const ageValue = +form.querySelector('#age').value
    const heightValue = +form.querySelector('#height').value
    const weightValue = +form.querySelector('#weight').value

    let activityValue = form.querySelectorAll('[name="activity"]')
    activityValue.forEach((el)=>{
        if(el.checked){activityValue = el.value}
    })

    let n = (10 * weightValue) + (6.25 * heightValue) - (5 * ageValue)

    genderValue == 'male' ? n += 5 : n -= 161
         
    switch (activityValue) {
        case 'min': 
            n *= 1.200
            break
        case 'low': 
            n *= 1.375
            break
        case 'medium': 
            n *= 1.550
            break
        case 'high': 
            n *= 1.725
            break
        case 'max': 
            n *= 1.900
            break
    } 

    return caloriesNorm.textContent = Math.round(n), 
        caloriesMinimal.textContent = Math.round(n-(n / 100 * 15)),
        caloriesMaximal.textContent = Math.round(n+(n / 100 * 15))
}

export default calcForm