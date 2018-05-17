

var allElements = new Array()
const fruitList = document.createElement('ul')
const vegList = document.createElement('ul')

function renderList(data){
    fruitList.innerHTML = ''
    vegList.innerHTML = ''
    
    for (var i = 0, len = data.length; i < len; i++) {
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = "Delete"
        //deleteButton.setAttribute(data[i].name, data[i].classify)
        deleteButton.addEventListener('click', function(){
            deleteButton.parentNode.remove()
            var text = deleteButton.parentNode.textContent
            console.log(text)
            for (var i = 0, len = allElements.length; i < len; i++) {
                try{
                    if(text == allElements[i].name+"Delete"){
                        allElements.splice(i,1)
                    }
                }catch{}
            }
        })

        deleteButton.addEventListener('mousedown', function(){
            deleteButton.style.backgroundColor = 'cyan'
        })
        
        if(data[i].classify == "fruit"){
            const newFruit = document.createElement('li')
            newFruit.textContent = data[i].name
            newFruit.appendChild(deleteButton)
            fruitList.appendChild(newFruit)
        }else{
            const newVeg = document.createElement('li')
            newVeg.textContent = data[i].name
            newVeg.appendChild(deleteButton)
            vegList.appendChild(newVeg)
        }
    }   
}

// fruitList.addEventListener("click", remove, false)
// vegList.addEventListener("click", remove, false)

// function remove(e) {
//     var clickedItem = e.target.id;
//     var text = e.target.parentNode.textContent
//     //console.log(e.target.tagName)
//     if(e.target.tagName == 'BUTTON'){
//         for (var i = 0, len = allElements.length; i < len; i++) {
//             try{
//                 if(text == allElements[i].name+"Delete"){
//                     allElements.splice(i)
//                 }
//             }catch{}
//         }
//         e.target.parentNode.remove()
//     }
// }


function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target

    const element = {
        name: f.name.value,
        classify: f.classify.value,
    }
    if(element.name == ''){
        alert("The name field is empty!")
    }else{
        allElements.push(element)
    }

    renderList(allElements)
    const fruitDisplay = document.getElementById('fruitDisplay')
    fruitDisplay.appendChild(fruitList)

    const vegDisplay = document.getElementById('vegDisplay')
    vegDisplay.appendChild(vegList)
   console.log(allElements)
   f.reset()
   const select = document.getElementById('classify')
   select.value = element.classify
}

const submit = document.getElementById('submit')
submit.style.backgroundColor = '#d8bfd8'
submit.style.padding = "10 px"
function mousedown(){
    submit.style.backgroundColor = 'cyan'
}

function mouseup(){
    submit.style.backgroundColor = '#d8bfd8'
}
submit.addEventListener('mousedown', mousedown)
submit.addEventListener('mouseup', mouseup)

const form = document.getElementById('form1')
form.addEventListener('submit', handleSubmit)

console.log("hola")