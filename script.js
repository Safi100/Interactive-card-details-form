var Cardholder_Name = document.querySelector('.Cardholder_Name_display')
var card_number = document.querySelector('.card_number')
var month = document.querySelector('.month')
var year = document.querySelector('.year')
var cvc = document.querySelector('.cvc')
var errorr = document.querySelectorAll('.error')
var Cardholder_Name_input = document.querySelector('#Cardholder_Name')
var Card_Number_input = document.querySelector('#Card_Number')
var date_input = document.querySelectorAll('#date_input')
var cvc_input = document.querySelector('#cvc')
const form = document.querySelector('.confirm_card_form')
Cardholder_Name_input.addEventListener('input', ()=> {
    const holder_Name = Cardholder_Name_input.value ? Cardholder_Name_input.value.trimStart() : ''
    Cardholder_Name_input.value = holder_Name
    if(holder_Name == ''){
        Cardholder_Name.textContent = "Jane Appleseed"
        return;
    }
    Cardholder_Name.textContent = holder_Name
})
Card_Number_input.addEventListener('input', ()=> {
    maxLength(Card_Number_input, 16)
    const CD_NUMBER = Card_Number_input.value ? Card_Number_input.value.trimStart() : '' 
    Card_Number_input.value = CD_NUMBER
    if(CD_NUMBER == '') {
        card_number.textContent = '0000 0000 0000 0000'
        return;
    }
        let n = CD_NUMBER.substr(0,4) + " " + CD_NUMBER.substr(4,4) + " " + CD_NUMBER.substr(8,4) + " "  + CD_NUMBER.substr(12,4) 
        card_number.textContent = n
})

date_input.forEach((date, index) => {
    date.addEventListener('input', ()=> {
        maxLength(date, 2)
        if(index === 0) {
            month.textContent = date.value
            if(date.value == ""){
                month.textContent = "00"
            }
        }else{
            year.textContent = date.value
            if(date.value == ""){
                year.textContent = "00"
            }
        }
    })
})
cvc_input.addEventListener('input', ()=> {
    maxLength(cvc_input, 3)
    cvc.value = cvc_input.value
    if(cvc_input.value == '') cvc.value = "000"
})
form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const input = document.querySelectorAll('input')
    let flag = 1;
    for(let i=1;i<input.length;i++){
        if(input[i].value == ''){
            flag = 0;
            input[i].classList.add('border_error')
            if(i==5){
                errorr[i-2].classList.add('show')
            }else{
                if(input[3] == '' || input[4] == '' ){
                    errorr[2].classList.add('show')
                }else{
                    errorr[i-1].classList.add('show')
                }
            }
        }else{
            input[i].classList.remove('border_error')
            if(i==5){
                errorr[i-2].classList.remove('show')
            }else{
                errorr[i-1].classList.remove('show')
                if(input[3].value != '' && input[4].value != '' ){
                    errorr[2].classList.remove('show')
                }else{
                    errorr[2].classList.add('show')
                }
            }
            flag = 1;
            console.log(flag);
        }
    }
    if(flag){
        afterSubmit(form)
    }
})
function maxLength(input, max_length){
    if(input.value.length > max_length) {
        input.value = input.value.slice(0, max_length)
    }
}
document.querySelector('.Continue_btn').addEventListener('click', ()=>{
    window.location.reload();
})
function afterSubmit(form){
    form.classList.add('hide')
    document.querySelector('.complete').classList.remove('hide')
}