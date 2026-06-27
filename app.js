let input = document.getElementById('input');
let add = document.getElementById('add');
let items = document.getElementById('items');

add.addEventListener('click', addNewTask);
input.addEventListener('keypress',function (e) {
    if (e.key == "Enter") {
        addNewTask()
    }
})

function addNewTask() {
    if (!input.value == "") {
        let listItem = document.createElement('label');
        let b = document.createElement('b')
        b.textContent = input.value;

        let checkbox = document.createElement('input')
        checkbox.checked = true
        checkbox.type = "checkbox";

        let delBtn = document.createElement('i')
        delBtn.setAttribute('class','fas fa-trash del')
        delBtn.setAttribute('onclick','delTodo(this)')

        let edit = document.createElement('i')
        edit.setAttribute('class','fas fa-edit edit')
        edit.setAttribute('onclick','editTodo(this)')

        let br = document.createElement('br');
        
        
      
        listItem.append(checkbox,b,delBtn,edit,br)
          items.append(listItem,);
        input.value = "";


        
    }else {
        Swal.fire({
            title: "Oops",
            text: "Please Enter Your Task",
            icon: "error"
        });
    };
}

function editTodo(t){
    alert("oo ustad edit btn use krne ke liye agle din ayo tab use hoga abhi dimag ke dhai ho gaye to abhi delete se hi kam chala le nhi chala skta to kise aur ke todo app se kam chala le")
}
function delTodo(t) {
    t.parentNode.remove()
}