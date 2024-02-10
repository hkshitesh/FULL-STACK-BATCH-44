const btnAdd = document.getElementById("addItem");
const btnDelete = document.getElementById("deleteItem");
const op = document.getElementById("listItem");

btnAdd.addEventListener("click",function(){
    const newItem = document.createElement("li");
    newItem.textContent="New List Item";
    op.appendChild(newItem);
})

btnDelete.addEventListener("click",function(){
    const lastItem = op.lastElementChild;
    if(lastItem)
    {
        op.removeChild(lastItem);
    }    
})