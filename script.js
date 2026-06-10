const saveBtn=document.getElementById("saveBtn");

const cards=document.getElementById("cards");

const search=document.getElementById("search");

const total=document.getElementById("total");

let setups=
JSON.parse(
localStorage.getItem(
"rbTrading"
)
)||[];



function save(){

const photo=
document
.getElementById("photo")
.files[0];

const reader=
new FileReader();

reader.onload=function(){

const item={

name:
name.value,

market:
market.value,

pair:
pair.value,

win:
win.value,

note:
note.value,

video:
video.value,

desc:
desc.value,

photo:
reader.result,

date:
new Date()
.toLocaleString()

};

setups.unshift(item);

localStorage.setItem(
"rbTrading",
JSON.stringify(setups)
);

render();

clear();

};

if(photo){

reader.readAsDataURL(
photo
);

}

else{

reader.onload();

}

}



function render(){

cards.innerHTML="";

let data=
setups.filter(x=>

x.name
.toLowerCase()

.includes(

search.value
.toLowerCase()

)

);



total.innerHTML=

"Total: "

+

data.length;



data.forEach(

(item,index)=>{

cards.innerHTML+=`

<div class=card>

<img
class=preview
src="${
item.photo
||
'https://picsum.photos/300'
}
">

<div class=content>

<div class=name>

${item.name}

</div>

<div class=row>

<div>

Market:

${item.market}

</div>

<div>

Pair:

${item.pair}

</div>

<div>

Win Rate:

${item.win}

</div>

</div>

<p>

${item.note}

</p>

<br>

<div>

📅

${item.date}

</div>

</div>


<div class=actions>

<button
class=play

onclick="playVideo(

'${item.video}'

)"

>

▶ Play

</button>


<button
class=view

onclick="viewPhoto(

'${item.photo}'

)"

>

🖼 Photo

</button>


<button
class=delete

onclick="removeCard(

${index}

)"

>

🗑 Delete

</button>

</div>

</div>

`;

}

);

}



function removeCard(i){

setups.splice(i,1);

localStorage.setItem(

"rbTrading",

JSON.stringify(setups)

);

render();

}



function playVideo(url){

if(url){

window.open(

url,

"_blank"

);

}

}



function viewPhoto(url){

if(url){

window.open(

url,

"_blank"

);

}

}



function clear(){

name.value="";

pair.value="";

win.value="";

note.value="";

video.value="";

desc.value="";

photo.value="";

}



saveBtn.onclick=save;

search.oninput=render;



document
.getElementById(
"resetBtn"
)

.onclick=

()=>{

localStorage.removeItem(
"rbTrading"
);

setups=[];

render();

};



render();
