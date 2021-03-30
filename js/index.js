const nameInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const btnAddCard = document.getElementById("btn-add-card");


// console.log(nameInput);
// console.log(descriptionInput);
// console.log(btnAddCard);


function addCard() {
    const name = nameInput.value;
    const description = descriptionInput.value;
    const main = document.querySelector("main");

    // 1. Create div with class container.
    // 2. Create in div container a div with class card.
    // 3. Create in div card a div with class front and other div with class back.
    // 4. front = name and back = description.

    if (name != "" && description != "") {
        const divContainer = document.createElement("div");
        divContainer.classList.add("container");

        const divCard = document.createElement("div");
        divCard.classList.add("card");

        divContainer.appendChild(divCard);

        const divFront = document.createElement("div");
        divFront.classList.add("front");

        const divBack = document.createElement("div");
        divBack.classList.add("back");

        divFront.innerHTML = name;
        divBack.innerHTML = description;

        divCard.appendChild(divFront);
        divCard.appendChild(divBack);

        main.appendChild(divContainer);

        nameInput.value = "";
        descriptionInput.value = "";

        alert("Se ha agregado correctamente una nueva ficha.");

    } else {
        alert("No puedes dejar los campos en blanco.");
    }
}

btnAddCard.addEventListener("click", addCard);
