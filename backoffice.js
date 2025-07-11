const fruttForm = document.getElementById("frutt-form");
const endpoint = "https://striveschool-api.herokuapp.com/api/product/";

fruttForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const price = parseFloat(document.getElementById("price").value);
  const image = document.getElementById("image").value;

  const nuoviProdotti = {
    name: name,
    description: description,
    brand: brand,
    price: price,
    imageUrl: image,
  };
  console.log("dati inviati:", nuoviProdotti);

  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzQ2NDc4Y2RkZjAwMTU1ZDY3YTQiLCJpYXQiOjE3NTIyMjA3NzMsImV4cCI6MTc1MzQzMDM3M30.mVPxLn3wCEI_UuVSs5fB0cUaD7e9d-jr7MMrL6dwfZM",
    },
    body: JSON.stringify(nuoviProdotti),
  })
    .then((response) => {
      if (response.ok) {
        alert("Prodotto creato con successo");
        fruttForm.reset();
      } else {
        alert("Errore nella creazione");
      }
    })
    .catch((error) => {
      console.log("Errore:", error);
    });
});
