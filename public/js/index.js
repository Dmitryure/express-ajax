let button = document.getElementById('button')
let list = document.getElementById('list')
button.addEventListener('click', function() {
    let liNode = document.createElement('li')
    liNode.innerText = "lorem ipsum"
    list.appendChild(liNode)
})

let random = document.getElementById('random')

const requestRandomNumber = async () => {
    const response = await fetch('/data')
    const data = await response.json()
    let liNode = document.createElement('li')
    liNode.innerText = data.data
    list.appendChild(liNode)
}

random.addEventListener('click', requestRandomNumber)