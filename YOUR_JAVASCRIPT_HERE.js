// Write your JS here

const hero = {
  name: 'Pietje',
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: 'boomerang',
    damage: 2
  }
}

function rest (hero){
  if(hero.health === 10){
    alert('You are good to go, chop chop!')
  } else {
  hero.health = 10
  document.getElementById('herohealth').innerHTML= "Health: " + hero.health
  return hero}
}

function pickUpItem (hero, foundLoot) {
  hero.inventory.push(foundLoot)
  document.getElementById('currentitem').innerHTML= "Inventory: " + hero.inventory[0].type
  document.getElementById('currentitemdmg').innerHTML= "Damage: " + hero.inventory[0].damage
}

function equipWeapon (hero) {
  if (hero.inventory === undefined || hero.inventory.length == 0) {
} else {
  hero.weapon = hero.inventory[0]
}
}

const daggerLoot = {
  type : 'dagger',
  damage : 2
}

function clickBag (){
  hero.weapon = hero.inventory[0]
  document.getElementById('heroweapon').innerHTML= "Weapon: " + hero.weapon.type
  document.getElementById('herodmg').innerHTML= "Damage: " + hero.weapon.damage

  hero.inventory = []
  document.getElementById('currentitem').innerHTML= ""
  document.getElementById('currentitemdmg').innerHTML= ""
}

function renameHero() {
  hero.name = prompt('Please enter a new name for your hero.')
  document.getElementById('heroname').innerHTML=hero.name
  if (hero.name === 'inappropriate_name'){
    hero.name = prompt('Please enter more sophisticated name for your hero.')
  } else if ((hero.name).length > 18) {
    hero.name = prompt('Please enter slightly shorter name for your hero.')
  } 
}

function summonBossStart() {
  document.getElementById('boss').style.visibility= 'visible';
}

//BOSSFIGHT (you can keep healing in the inn, but you need the lightsabre to kill him instantly)
function bossAggro() {
  document.getElementById('injured').style.visibility= 'visible';
  if (hero.health > 0){
    hero.health -= 5
    document.getElementById('herohealth').innerHTML= "Health: " + hero.health
  } else if (hero.health < 0) {
    hero.health = 0
  }

 if (hero.weapon.damage > 2){
  document.getElementById('injured').src='https://66.media.tumblr.com/504cb94fe0f41e563f435ee2f833dcb5/tumblr_ouo2ds7d8h1wx3n9lo1_400.gif'
  document.getElementById('injured').alt='https://media.giphy.com/media/y8mThMjGBrQpG/giphy.gif'

  document.getElementById('boss').src='https://www.elk-studios.com/wp-content/uploads/2017/11/chest-bigger-2.gif'
  document.getElementById('boss').alt='https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmYRU1aeAmYfMtdfMkYjPMnNktPCvFuQsetgKFFspk4W4b/zolotaya-kartinka_06.gif'
    return hero
  } else if (hero.health < 5 ) {
    document.getElementById('injured').src='http://www.animatedimages.org/data/media/511/animated-grave-image-0025.gif'
  document.getElementById('injured').alt='https://media.giphy.com/media/xUPGch7iuU4H18RObm/giphy.gif'
  } 
  }

//CHEATWEAPON
function equipLightSabre() {
  hero.weapon.type = 'lightsabre'
  hero.weapon.damage = 11
  document.getElementById('heroweapon').innerHTML= "Weapon: " + hero.weapon.type
  document.getElementById('herodmg').innerHTML= "Damage: " + hero.weapon.damage
}

  document.getElementById('heroname').innerHTML= "Name: " + hero.name
  document.getElementById('herohealth').innerHTML= "Health: " + hero.health
  document.getElementById('heroweapon').innerHTML= "Weapon: " + hero.weapon.type
  document.getElementById('herodmg').innerHTML= "Damage: " + hero.weapon.damage

function displayInventory() {
  var x = document.getElementById("currentitem");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.getElementById("tempDiv").onclick = function(e) {
  e.target.style.visibility = 'hidden';
}

function displayStats() {
  var x = document.getElementById("herohealth");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("heroweapon");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("herodmg");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}