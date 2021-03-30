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

    // 1. Crear div con clase container.
    // 2. crear dentro de container un div con clase card.
    // 3. crear dentro de card un div con clase front y un div de back.
    // 4. front = name y back = description.

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

btnAddCard.addEventListener("click", addCard)

btnAddCard.addEventListener('keypress', (e) => {
    if (e.key == "Enter") addCard();
});

