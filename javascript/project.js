fetch("data.json").then(res=>res.json()).then(
    data =>
    display(data.profile)
)

function display(iti){
  var cdeck=document.querySelector(".card-deck")
console.log(cdeck)
    
// 
for( var i in iti){
    var cd=document.createElement("div")
    cd.classList.add("card")
    console.log(cd)
    cdeck.appendChild(cd)
    //  img area
    var im=document.createElement("img")
    im.src=iti[i].img;
    cd.appendChild(im)
    //  name area
    var name=document.createElement("h1")
    name.textContent=iti[i].name;
    cd.appendChild(name)

    // Branch area
    var Branch=document.createElement("h2")
    Branch.textContent=iti[i].Branch;
    cd.appendChild(Branch)

//  year area
var yr=document.createElement("h3")
yr.textContent=iti[i].Year;
cd.appendChild(yr)

// button area
var bt=document.createElement("button")
bt.classList.add("btn-info")
bt.href=https://www.google.co.in/
bt.textContent="View";
cd.appendChild(bt)




}


}

