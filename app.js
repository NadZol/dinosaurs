// Create Dino Constructor
function Dino(name, weight, height, diet, where, when, fact) {
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

// Create Dino Objects
function createDinoObjects() {
  let dino1 = new Dino("Triceratops", 13000, 114, "herbavor", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh");
  let dino2 = new Dino("Tyrannosaurus Rex", 11905, 144, "carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.");
  let dino3 = new Dino("Anklyosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years.");
  let dino4 = new Dino("Brachiosaurus", 70000, 372, "herbavor", "North America", "Late Jurasic", "An asteroid was named 9954 Brachiosaurus in 1991.");
  let dino5 = new Dino("Stegosaurus", 11600, 79, "herbavor", "North America, Europe, Asia", "Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 seperate places and flat spines.");
  let dino6 = new Dino("Elasmosaurus", 16000, 59, "carnivor", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.");
  let dino7 = new Dino("Pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.");
  let dino8 = new Dino("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs.");

  let dinos = [dino1, dino2, dino3, dino4, dino5, dino6, dino7, dino8];
  return dinos;
}

function getRandDinoFact(obj) {
  let newFact =  obj.fact;
  if(obj.name !== "Pigeon"){
    switch(Math.floor(Math.random() * 6)) {
      case 0:
        newFact = "This dinosaur was native to " + obj.where;
      break;
      case 1:
        newFact = "This dinosaur lived during " + obj.when;
      break;
      case 2:
        newFact = compareWeight(obj);
      break;
      case 3:
        newFact = compareHeight(obj);
      break;
      case 4:
        newFact = compareDiet(obj);
      break;
    }
  }
  return newFact;
}

// Create Human Object
function createHumanObject() {
  let human = new Dino(document.getElementById("name").value);
  return human;
}

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareWeight(obj) {
  let humanWeight = document.getElementById("weight");
  let difference = obj.weight / humanWeight.value; 
  return "Compared to a human, a " + obj.name + " is " + difference + " times heavier.";
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareHeight(obj) {
  let feet = document.getElementById("feet");
  let inches = document.getElementById("inches");
  let humanHeight = (feet.value * 12) + inches.value;
  let difference = obj.height / humanHeight; 
  return "Compared to a human, a " + obj.name + " is " + difference + " times taller.";
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareDiet(obj) {
  let x = document.getElementById("diet");
  let humanDiet = x.options[x.selectedIndex].text;
  let message = "";
  if(obj.diet === humanDiet.toLowerCase()){
    message = obj.name + " is a " + obj.diet + ", just like you!";
  }else{
    message = "Unlike you, " + obj.name + " is a " + obj.diet;
  }
  return message;
}

// Generate Tiles for each Dino in Array
function createDinoTile(obj) {
  console.log("this is a dino");

  let gridItem;
  let image;
  let name;
  let fact;
  gridItem = document.createElement("div");
  image = document.createElement("img");
  name = document.createElement("h3");
  fact = document.createElement("p");

  gridItem.className = "grid-item";
  image.src = "images/" + obj.name.toLowerCase() + ".png";
  name.innerHTML = obj.name; 
  fact.innerHTML = getRandDinoFact(obj); 

  gridItem.appendChild(name);
  gridItem.appendChild(image);
  gridItem.appendChild(fact);

  return gridItem;
}

function createHumanTile(human) {
  console.log("this is a human");

  let gridItem;
  let image;
  let name;
  gridItem = document.createElement("div");
  image = document.createElement("img");
  name = document.createElement("h3");
  gridItem.className = "grid-item";
  image.src = "images/human.png";
  name.innerHTML = human.name;

  gridItem.appendChild(name);
  gridItem.appendChild(image);

  return gridItem;
}

// Add tiles to DOM
function addTilesToDOM() {
  let mainGrid = document.getElementById("grid");
  let i;
  let human = createHumanObject();
  let dinos = createDinoObjects();
  let j;

  for (i = 0, j = 0; i < 9; i++) {
    if (i == 4) {
      let x = createHumanTile(human);
      mainGrid.appendChild(x);
    } else {
      let x = createDinoTile(dinos[j]);
      mainGrid.appendChild(x);
      j++;
    }
  }
}

// Remove form from screen
function removeFormFromScreen() {
  let mainForm = document.getElementById("dino-compare");
  mainForm.style.display = "none";
}

// On button click, prepare and display infographic
function displayInfographic() {
  removeFormFromScreen();
  addTilesToDOM();
}
