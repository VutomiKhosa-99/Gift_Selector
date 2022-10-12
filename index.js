document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")


function calculate() {
    const selectedFoodCost = parseInt(document.getElementById("food-select").value)
    const selectedTransportCost = parseInt(document.getElementById("transport-select").value)
    const areBalloonsAdded = document.getElementById("balloon-checkbox").checked
    
    let cost = selectedFoodCost + selectedTransportCost;
    
    if (areBalloonsAdded) {
        cost += 10
    }
    
    costEl.textContent = `$${cost}`
}

