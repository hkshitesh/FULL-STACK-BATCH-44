const btnC = document.getElementById("clickBtn");
const btnH = document.getElementById("hoverMe");
const op = document.getElementById("output");

btnC.addEventListener("click", function(){
    op.textContent="GFG Text";
    op.style.color="blue";
}
)

btnH.addEventListener("mouseover",function(){
    op.innerHTML="Mouse Hover Text by GFG";
    op.style.color='red'
})