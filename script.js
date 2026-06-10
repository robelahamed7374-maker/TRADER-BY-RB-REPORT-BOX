function saveReport(){

let title=document.getElementById("title").value;

let text=document.getElementById("text").value;

document.getElementById("reports").innerHTML+=`
<div>
<h3>${title}</h3>
<p>${text}</p>

<button onclick="this.parentElement.remove()">
Delete
</button>

</div>
`;

}

document.querySelector("button")
.addEventListener("click",saveReport);
