var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;
if(!idb in window)
{
  console.log("indexedDB is not supported");
}

// IndexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDb is created");


open.onupgradeneeded=function (e){
request=e.target.result;
store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created")
}
open.onerror=function(error){
  console.log("error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
var transaction=request.transaction("formdata","readwrite");
store=transaction.objectStore("formdata");
var info=store.get(paravalue);
info.onsuccess=function(data){
  console.log(data);
  personalinfo(data.target.result);
}
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi){
  var image=document.createElement("img");
  image.src="images/round.svg";
  image.alt=pi.name;
  left.append(image);
  var h1=document.createElement("h1");
  h1.textContent=pi.name;
  var h2=document.createElement("h1");
  h2.textContent=pi.mobile;
  var h3=document.createElement("h1");
  h3.textContent=pi.mail;
  var h4=document.createElement("h1");
  h4.textContent=pi.adress;
  left.append(h1);
  left.append(h2);
  left.append(h3);
  left.append(h4);
  var h5=document.createElement("h1");
  h5.textContent="Career Objective";
  right.append(h5);
  var b3=document.createElement("hr");
  right.append(b3);
var b1=document.createElement("p");
b1.textContent=pi.career;
right.append(b1);

var c2=document.createElement("h1");
   c2.textContent="Education Details";
   right.append(c2);
   var c3=document.createElement("hr");
   right.append(c3);
   var c1=document.createElement("table");
   var tr1="<tr><th>institute</th><th>branch</th><th>percentage</th><th>yop</th></tr>";
   var tr2=" ";
   for(var i in pi.education)
   {
     tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].percentage+"</td><td>"+pi.education[i].yop+"</td></tr>";
   }
  c1.innerHTML=tr1+tr2;
  right.append(c1);

  var d1=document.createElement("h1");
  d1.textContent="skills";
  right.append(d1);
  var b3=document.createElement("hr");
  right.append(b3);
  var d1=document.createElement("p");
  d1.textContent=pi.skills;
  right.append(d1);
}
