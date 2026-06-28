var input = document.getElementById("input")
var add = document.getElementById("add")
var items = document.getElementById("items")
var deleteAll = document.getElementById("deleteAll")

deleteAll.addEventListener("click", function () {
    for(var i=0;i<items.children.length;i++){
        items.children[i].remove()
        i=i-1
    }
    deleteAll.style.display="none"
})

add.addEventListener("click", addNewTodo) //for button
//for input if user enter key press
input.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        addNewTodo()
    }
})

function addNewTodo() {
    console.log(items.children.length)



    if (input.value == "") {
        Swal.fire({
            title: "Error",
            text: "Please enter Todo item",
            icon: "error"
        });
    }
    else {
        var listItem = document.createElement("li")

        var p = document.createElement("P")
        p.innerText = input.value



        var delBtn = document.createElement("i")

        delBtn.setAttribute("class", "fas fa-trash")
        delBtn.setAttribute("id", "del")
        delBtn.setAttribute("onClick", `deletitem(this)`)

        var editBtn = document.createElement("i")
        editBtn.innerText = "Edit"
        editBtn.setAttribute("class", "far fa-edit edit")
        editBtn.setAttribute("onClick", `EditTodo(this)`)

        listItem.append(p, editBtn, delBtn)

        items.appendChild(listItem)

        input.value = ""

        if (items.children.length > 1) {
            deleteAll.style.display = "inline"

        }
    }
}


function ResetAll() {

    for (var i = 0; i < items.children.length; i++) {
        var item = items.children[i] //li

        if (item.children[0].tagName == "INPUT") {
            var p = document.createElement("p")
            p.innerText = item.children[0].getAttribute("data-original");


            item.replaceChild(p, item.children[0])

            item.children[1].remove()

            var delBtn = document.createElement("i")

            delBtn.setAttribute("class", "fas fa-trash")
            delBtn.setAttribute("id", "del")
            delBtn.setAttribute("onClick", `deletitem(this)`)

            var editBtn = document.createElement("i")
            editBtn.innerText = "Edit"
            editBtn.setAttribute("class", "far fa-edit edit")
            editBtn.setAttribute("onClick", `EditTodo(this)`)

            item.append(editBtn, delBtn)

        }
    }

}

function EditTodo(ele1) {
    ResetAll()
    console.log(ele1.parentNode.childNodes[0].innerText)
    var input = document.createElement("input")
    input.value = ele1.parentNode.childNodes[0].innerText

    input.setAttribute("data-original", input.value);

    var parent = ele1.parentNode

    input.addEventListener("keypress", function (e) {
        if (e.key == "Enter") {
            updateTodo(this)
        }
    })

    ele1.parentNode.replaceChild(input, ele1.parentNode.childNodes[0])

    parent.children[1].remove()
    parent.children[1].remove()


    var button = document.createElement("button")
    button.innerText = "Update"
    button.setAttribute("onclick", 'updateTodo(this)')
    parent.appendChild(button)


}

function updateTodo(e) {
    var parent = e.parentNode
    if (parent.childNodes[0].value != "") {
        console.log(e)

        var p = document.createElement("p")
        p.innerText = parent.childNodes[0].value

        parent.replaceChild(p, parent.childNodes[0])

        parent.children[1].remove()

        var delBtn = document.createElement("i")

        delBtn.setAttribute("class", "fas fa-trash")
        delBtn.setAttribute("id", "del")
        delBtn.setAttribute("onClick", `deletitem(this)`)

        var editBtn = document.createElement("i")
        editBtn.innerText = "Edit"
        editBtn.setAttribute("class", "far fa-edit edit")
        editBtn.setAttribute("onClick", `EditTodo(this)`)

        parent.append(editBtn, delBtn)
    }

}

function deletitem(element) {
    element.parentNode.remove()

      if (items.children.length < 2) {
            deleteAll.style.display = "none"

        }
}
