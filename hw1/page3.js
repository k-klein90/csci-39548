let cats =  [   "Charlie", "Chicken", "Dreamsicle", "Fishtopherson", "Ford", "Hermit", "Mangled-Ear Joe",
                "Mister Lady Bowtie", "Monster Paws", "Mystery Man", "Princess Leia", "REK", "Sassy", "Smudge",
                "Sportscar", "Stinky", "Teddy", "Tenderpod", "Tiny Tina", "Twin #1", "Twin #2"
            ];

let listOfCats = document.getElementById("listOfCats");
let addCatButton = document.getElementById("addCatButton");
let remCatButton = document.getElementById("remCatButton");

//adds a random cat entry to the list and removes it from the cats array
addCatButton.onclick = function(){
    if (cats.length > 0) {
        let i = Math.floor(Math.random() * cats.length);
        let li = document.createElement("li");
        let liText = document.createTextNode(cats[i]);
        li.appendChild(liText);
        listOfCats.appendChild(li);
        cats.splice(i, 1);
    }
}

//removes a random cat entry from the list and adds it back to the cats array
remCatButton.onclick = function(){
    if (listOfCats.hasChildNodes()) {
        let i = Math.floor(Math.random() * listOfCats.children.length);
        let li = listOfCats.children[i];
        cats.push(li.innerHTML);
        listOfCats.removeChild(li);
    }
}