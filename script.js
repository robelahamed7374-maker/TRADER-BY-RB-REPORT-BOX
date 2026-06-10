const saveBtn=document.querySelector(".saveBtn");
const saved=document.querySelector(".saved");

saveBtn?.addEventListener("click",()=>{

const card=document.createElement("div");

card.className="reportCard";

card.innerHTML=`

<img
class="thumb"
src="https://picsum.photos/200?random=${Date.now()}">

<div class="info">

<div class="name">

NEW SETUP

</div>

<div class="row">

<div>Market: OTC</div>

<div>Pair: EUR/USD</div>

<div>Win: 80%</div>

</div>

<p>
Saved successfully
</p>

</div>

<div class="actions">

<button class="play">
▶ Play Video
</button>

<button class="photo">
🖼 View Photo
</button>

<button class="delete">
🗑 Delete
</button>

</div>

`;

saved.append(card);

});



document.addEventListener(
"click",
(e)=>{

if(
e.target.classList.contains(
"delete"
)
){

e.target
.closest(
".reportCard"
)
.remove();

}

if(
e.target.classList.contains(
"photo"
)
){

alert(
"Photo Open"
);

}

if(
e.target.classList.contains(
"play"
)
){

alert(
"Video Play"
);

}

}
);



document
.querySelector(
".search"
)
?.addEventListener(
"input",
e=>{

let v=
e.target
.value
.toLowerCase();

document
.querySelectorAll(
".reportCard"
)
.forEach(x=>{

x.style.display=
x.innerText
.toLowerCase()
.includes(v)

?

"flex"

:

"none";

});

});
