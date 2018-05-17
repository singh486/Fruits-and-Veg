

var allElements = new Array()
const fruitList = document.createElement('ul')
const vegList = document.createElement('ul')
var deleteButton

function renderList(data){
    fruitList.innerHTML = ''
    vegList.innerHTML = ''
    
    for (var i = 0, len = data.length; i < len; i++) {
        deleteButton = document.createElement('button')
        deleteButton.innerHTML = "Delete"
        //deleteButton.setAttribute(data[i].name, data[i].classify)
        
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
    // deleteButton.onclick = function(){
    //     var text = deleteButton.parentNode.textContent
    //     console.log(text)
    //     for (var i = 0, len = allElements.length; i < len; i++) {
    //         if(text == allElements[i].name+"Delete"){
    //             allElements.splice(i)
    //         }
    //     }
    //     deleteButton.parentNode.remove()
    // }
    
}
fruitList.addEventListener("click", remove, false)
vegList.addEventListener("click", remove, false)

function remove(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        var text = e.target.parentNode.textContent
        for (var i = 0, len = allElements.length; i < len; i++) {
            try{
                if(text == allElements[i].name+"Delete"){
                    allElements.splice(i)
                }
            }catch{}
        }
        e.target.parentNode.remove()
    }
    e.stopPropagation();
}


function deleteBut(deleteButton){
    console.log(deleteButton.textContent)
}

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
const form = document.getElementById('form1')
form.addEventListener('submit', handleSubmit)

console.log("hola")