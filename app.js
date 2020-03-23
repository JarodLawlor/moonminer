


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
// TODO use appropriate names for your functions
function buttonClick() {
  let total = 1
  //FIXME iterate through your upgrades and build a total 
  upgrades.forEach(item => total += item.inventory * item.increment)
  cheese += total
  updateCheeseCount()
}

function buyCheeseKnife() {
  let knife = upgrades.find(item => item.name == "knife")
  if (cheese < knife.cost) {
    return // REVIEW stop the function not enough cheese
  }

  knife.inventory += 1
  knife.cost *= 1.10
  cheese -= knife.cost

  document.getElementById('cheese-knife-details').innerHTML = `
  x1<br>
  The cheese knife will increase cheese production by ${knife.inventory * knife.increment} each click<br>
  Cost: ${knife.cost}
  `
  updateCheeseCount()
}

function updateCheeseCount(){
  document.getElementById('inc').value = cheese;
}

//FIXME ME Add Idle Intervals