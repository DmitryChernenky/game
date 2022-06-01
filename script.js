let freePoin=document.getElementById("freePoin")
let strong=document.getElementById("strong")
let strongButton=document.getElementById("strongButton")

let health=document.getElementById("health")
let mana=document.getElementById("mana")

function addStrong() {
    freePoin.innerText=freePoin.innerText-1
    strong.innerText=Number(strong.innerText)+1
    console.log(strong);
   
}
strongButton.addEventListener("click",addStrong)
