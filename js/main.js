function submitData(){
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var mobile=document.querySelector("#mobile").value;
  var mail=document.querySelector("#mail").value;
  var adress=document.querySelector("#adress").value;
  var ginstitute=document.querySelector("#ginstitute").value;
  var branch=document.querySelector("#branch").value;
  var gpercentage=document.querySelector("#gpercentage").value;
  var gyop=document.querySelector("#gyop").value;
  var iinstitute=document.querySelector("#iinstitute").value;
  var group=document.querySelector("#group").value;
  var ipercentage=document.querySelector("#ipercentage").value;
  var iyop=document.querySelector("#iyop").value;
  var sinstitute=document.querySelector("#sinstitute").value;
  var board=document.querySelector("#board").value;
  var spercentage=document.querySelector("#spercentage").value;
  var syop=document.querySelector("#syop").value;
  var skills=document.querySelector("#skills").value;

// indexedDB implementation
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
store.put({
  career:career,
  name:name,
  mobile:mobile,
  mail:mail,
  adress:adress,
  education:[{
  institute:ginstitute,
  branch:branch,
  percentage:gpercentage,
  yop:gyop,
},
{
  institute:iinstitute,
  branch:group,
  percentage:ipercentage,
  yop:iyop,
},
{
  institute:sinstitute,
  branch:board,
  percentage:spercentage,
  yop:syop,
}],
  skills:skills
});
}

window.open("index.html");
}
