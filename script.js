const form = document.getElementById("setupForm");
const list = document.getElementById("savedList");
const resetBtn = document.getElementById("resetBtn");

loadData();

form.addEventListener("submit", function(e){
e.preventDefault();

const file =
document.getElementById("photo").files[0];

const reader = new FileReader();

reader.onload = function(){

const data = {
name:
document.getElementById("name").value,

market:
document.getElementById("market").value,

pair:
document.getElementById("pair").value,

win:
document.getElementById("win").value,

notes:
document.getElementById("notes").value,

video:
document.getElementById("video").value,

desc:
document.getElementById("desc").value,

img:
reader.result || "",

date:
new Date().toLocaleString()
};

let setups =
JSON.parse(
localStorage.getItem("rbTrading")
)||[];

setups.unshift(data);

localStorage.setItem(
"rbTrading",
JSON.stringify(setups)
);

form.reset();

loadData();

};

if(file){

reader.readAsDataURL(file);

}else{

reader.onload();

}

});

function loadData(){

list.innerHTML="";

let setups=
JSON.parse(
localStorage.getItem("rbTrading")
)||[];

document.getElementById(
"total"
).innerText=
"Total: "+setups.length;

setups.forEach((x,i)=>{

list.innerHTML+=`

<div class="saveCard">

<div>

${
x.img
?

`<img src="${x.img}"
class="preview">`

:

`<div class="preview"></div>`

}

</div>

<div class="info">

<h3>${x.name}</h3>

<p>Market:
${x.market}</p>

<p>Pair:
${x.pair}</p>

<p>Win Rate:
${x.win}</p>

<p>${x.notes}</p>

<p>${x.video}</p>

<p>${x.desc}</p>

<small>${x.date}</small>

</div>

<div class="actions">

<button
onclick="saveAgain(${i})"
class="green">

Save

</button>

<button
onclick="removeData(${i})"
class="red">

Delete

</button>

</div>

</div>

`;

});

}

function removeData(i){

let setups=
JSON.parse(
localStorage.getItem(
"rbTrading"
));

setups.splice(i,1);

localStorage.setItem(
"rbTrading",
JSON.stringify(setups)
);

loadData();

}

function saveAgain(i){

alert(
"আগেই সেভ করা আছে"
);

}

resetBtn.onclick=()=>{

if(
confirm(
"সব ডিলিট করবেন?"
)
){

localStorage.removeItem(
"rbTrading"
);

loadData();

}

}
