// get elements
const billInput = document.getElementById("bill");
const tipButton = document.querySelectorAll(".tip-btn");
const numOfPeople = document.getElementById("num-of-people");
const tipPerPersonElement = document.querySelector(".tip-per-person");
const totalPerPersonElement = document.querySelector(".total-per-person");
const customInput = document.querySelector(".custom");

function updateResults(tipPerPerson, totalPerPerson) {
  // update the DOM
  tipPerPersonElement.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalPerPersonElement.textContent = `$${totalPerPerson.toFixed(2)}`;

  console.log(tipPerPersonElement.textContent);
  console.log(totalPerPersonElement.textContent);

}

  tipButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const tipPercentage = parseFloat(button.innerText.replace("%", "")) / 100;
      const bill = parseFloat(billInput.value);
      const people = numOfPeople.value;

      const totalTip = bill * tipPercentage;
      const tipPerPerson = totalTip / people;
      const totalPerPerson = (totalTip + bill) / people;

      updateResults(tipPerPerson, totalPerPerson);

    })
  });

  
  
