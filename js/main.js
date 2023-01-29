//Переменные
import {form} from './variebles.js'

//Функции
import formValidation from './formValidation.js'
import clearForm from './clearForm.js'
import calcForm from './calcForm.js'


clearForm()
formValidation()



form.addEventListener('submit', calcForm)

