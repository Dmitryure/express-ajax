let button = document.getElementById('button')
let list = document.getElementById('list')
button.addEventListener('click', function() {
    let liNode = document.createElement('li')
    liNode.innerText = "lorem ipsum"
    list.appendChild(liNode)
})