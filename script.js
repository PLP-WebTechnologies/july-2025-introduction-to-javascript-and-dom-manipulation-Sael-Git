// ======================
// Part 1: Basics
// ======================
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  // variable & conditional example
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult ✅";
  } else {
    document.getElementById("ageResult").textContent = "You are underage ❌";
  }
});

// ======================
// Part 2: Functions
// ======================
// Function 1: calculate total with VAT
function calculateTotal(amount, vatRate) {
  let total = amount + amount * vatRate;
  document.getElementById("totalResult").textContent = 
    `Total including VAT: Ksh ${total}`;
}

// Function 2: format a name
function formatName(first, last) {
  return `${first.charAt(0).toUpperCase() + first.slice(1)} ${last.toUpperCase()}`;
}
// Example usage in console
console.log(formatName("samuel", "owino")); // Samuel OWINO

// ======================
// Part 3: Loops
// ======================
document.getElementById("countdownBtn").addEventListener("click", () => {
  const list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
  // while loop example in console
  let x = 0;
  while (x < 3) {
    console.log("Loop iteration:", x);
    x++;
  }
});

// ======================
// Part 4: DOM Manipulation
// ======================

// 1. Change text
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("dynamicText").textContent = "The text has been changed!";
});

// 2. Toggle class for styling
document.getElementById("toggleColorBtn").addEventListener("click", () => {
  document.getElementById("dynamicText").classList.toggle("colored");
});

// 3. Add new item to list
document.getElementById("addItemBtn").addEventListener("click", () => {
  const list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New List Item " + (list.children.length + 1);
  list.appendChild(li);
});
