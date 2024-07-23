
const satelite = document.getElementsByClassName("satelite")[0];

function sateliteDetails() {
  const url = "https://isro.vercel.app/api/customer_satellites";

 
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      data.customer_satellites.forEach((element) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("style", "width: 18rem;");
        card.innerHTML += `
                <div class="card-body">
                  <h5 class="card-title">${element.country}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${element.launch_date}</h6>
                  <p class="card-text">ID : ${element.id}</p>
                  <p class="card-text">Mass : ${element.mass} Kilograms</p>
                  <p class="card-text">Launcher : ${element.launcher}</p>
                  </div>`;
        satelite.append(card);
      });
    }).catch((error)=>console.log(error))
}

sateliteDetails();