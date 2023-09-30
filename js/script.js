

var allbuttons = document.querySelectorAll(" .but")

var div = document.querySelector("#content")

var h1 = document.querySelector(".title")

var money = document.querySelector(".money")

var btn = document.querySelector("#btn")

var card = document.querySelector(".card")

var button = document.querySelector("#but")

var div2 = document.querySelector(".t-price")

var totalprice=0





allbuttons.forEach(function(item){
    item.onclick = function(){
        div.innerHTML += item.getAttribute("add") + "<br>"
        totalprice +=+(item.getAttribute("price"))

        if(div.innerHTML !=""){
            btn.style.display = "block"
        }
    }
 })

 btn.onclick = function () {
    
    div2.innerHTML="price :" +" " +totalprice + "$"
}






