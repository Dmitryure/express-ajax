let form = document.getElementById('form')
console.log('213')
form.addEventListener('submit', function(e){
    console.log(e)
    e.preventDefault()
})