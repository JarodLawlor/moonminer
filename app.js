
let upgrades = [
  {
    name: "knife",
    increment: 1,
    inventory: 0,
    cost: 50
  },
  {
    name: "axe",
    increment: 5,
    inventory: 0,
    cost: 200
  }
]
// FIXME adds methods for purchasing Idle Upgrades
let idleUpgrades = [{
  name: "mouse",
  increment: 1,
  inventory: 0,
  cost: 500,
  interval: 3000
},
{
  name: "rover",
  increment: 10,
  inventory: 0,
  cost: 1000,
  interval: 3000
}]

var cheese = 0;

function moonClick() {
  let total = 1
  //iterate through your upgrades and build a total // done
  upgrades.forEach(item => total += item.inventory * item.increment)
  cheese += total
  updateCheeseCount()
}

function buyCheeseKnife() {
  let knife = upgrades.find(item => item.name == "knife")
  if (cheese < knife.cost) {
    return
    // REVIEW stop the function not enough cheese
  }
}
function buyPickAxe() {
  let axe = upgrades.find(item => item.name == "axe")
  if (cheese < axe.cost) {
    return
  }
}

function buyMouse() {
  let mouse = idleUpgrades.find(item => item.name == "mouse")
  if (cheese < mouse.cost) {
    return
  }
}
function buyRover() {
  let rover = idleUpgrades.find(item => item.name == "rover")
  if (cheese < rover.cost) {
    return
    console.log()
  }
}

knife.inventory += 1
knife.cost *= 2
cheese -= knife.cost
axe.inventory += 1
axe.cost *= 2
cheese -= axe.cost

mouse.inventory += 1
mouse.cost *= 2
cheese -= mouse.cost

rover.inventory += 1
rover.cost *= 2
cheese -= rover.cost

document.getElementById('cheese-knife-details').innerHTML = `
  x1<br>
  The cheese knife will increase cheese production by ${knife.inventory * knife.increment} each click<br>
  Cost: ${knife.cost}
  `
updateCheeseCount()


document.getElementById('axe-card').innerHTML = `x5<br>
The pick axe will increase cheese production by ${axe.inventory * axe.increment} each click<br>
Cost: ${axe.cost}`

updateCheeseCount()

document.getElementById('mouse-card').innerHTML = `x1<br>
The mice will increase cheese by ${mouse.inventory * mouse.increment} every 3 seconds<br>
Cost: ${mouse.cost}`


document.getElementById("rover-card").innertHTML = `x1<br>
The mice will increase cheese by ${rover.inventory * rover.increment} every 3 seconds<br>
Cost: ${rover.cost}`



function updateCheeseCount() {
  document.getElementById('inc').value = cheese;
}

//FIXME ME Add Idle Intervals

document.getElementById()