const saveBtn=document.getElementById("saveBtn");
const savedBox=document.getElementById("savedBox");
const search=document.getElementById("search");

let setups=JSON.parse(localStorage.getItem("rbSetups"))||[];

render();

saveBtn.onclick=function(){

const setup={
name:document.getElementById("setupName").value,
market:document.getElementById("market").value,
pair:document.getElementById("pair").value,
win:document.getElementById("win").value,
note:document.getElementById("note").value,
video:document.getElementById("video").value,
photoText:document.getElementById("photoText").value,
img:"",
time:new Date().toLocaleString()
};

let file=document.getElementById("photo").files[0];

if(file){

let reader=new FileReader();

reader.onload=function(e){

setup.img=e.target.result;

setups.unshift(setup);

localStorage.setItem(
"rbSetups",
JSON.stringify(setups)
);

render();

};

reader.readAsDataURL(file);

}else{

setups.unshift(setup);

localStorage.setItem(
"rbSetups",
JSON.stringify(setups)
);

render();

}

document.getElementById("form").reset();

};

function render(){

savedBox.innerHTML="";

let text=
search.value?.toLowerCase()||"";

setups
.filter(
x=>
x.name
.toLowerCase()
.includes(text)
)

.forEach((x,i)=>{

savedBox.innerHTML+=`

<div class="card">

<h2>${x.name}</h2>

<p>Market :
${x.market}</p>

<p>Pair :
${x.pair}</p>

<p>Win :
${x.win}%</p>

<p>${x.note}</p>

<p>${x.photoText}</p>

${
x.video
?

`
<video
controls
width="100%"
src="${x.video}">
</video>
`

:""
}

${
x.img
?

`
<img
src="${x.img}"
style="
width:100%;
margin-top:10px;
border-radius:10px;
">
`

:""
}

<button
onclick="preview('${x.img}')">

Preview

</button>

<button
onclick="removeData(${i})">

Delete

</button>

</div>

`;

});

}

function removeData(i){

setups.splice(i,1);

localStorage.setItem(
"rbSetups",
JSON.stringify(setups)
);

render();

}

function preview(img){

if(!img){

alert("Photo নাই");

return;

}

window.open(img);

}

if(search){

search.oninput=render;

}
