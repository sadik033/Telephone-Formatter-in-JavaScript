const inputFeild =document.querySelector('input')

let previosValue = ''
let firstThreeNumber = ''

inputFeild.addEventListener('input',(e)=>{
    const inputValue = e.target.value

    if(/\d+$/g.test(inputValue)){
        inputFeild.value = inputValue
    } else{
        inputFeild.value = inputValue.substring(0, inputValue.length - 1)
    }

    if(inputValue.length === 4 && previosValue.length < inputValue.length){
        firstThreeNumber = inputValue.substring(0, 3)
        inputFeild.value = `+(${firstThreeNumber}) - ${inputValue[inputValue.length - 1] }`
    } else if(inputValue.length === 9 && previosValue.length > inputValue.length){
        inputFeild.value = firstThreeNumber
    }
    previosValue = inputValue
})