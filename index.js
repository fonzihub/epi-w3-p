const endPoint = "https://striveschool-api.herokuapp.com/api/product/";

const getFrutt = function () {
  fetch(endPoint, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzQ2NDc4Y2RkZjAwMTU1ZDY3YTQiLCJpYXQiOjE3NTIyMjA3NzMsImV4cCI6MTc1MzQzMDM3M30.mVPxLn3wCEI_UuVSs5fB0cUaD7e9d-jr7MMrL6dwfZM",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Response no è ok");
      }
    })
    .then((data) => {
      console.log("dati", data);
      const row = document.getElementById("row");
      data.forEach((element) => {
        row.innerHTML += `
        <div class="col col-12 col-md-4 col-lg-3">
        <div class="card">
  <img src="${element.imageUrl}" class="card-img-top" alt="${element.name}">
  <div class="card-body">
    <p class="card-title">${element.name}</p>
    <p class="card-text">${element.description}</p>
    <h5>${element.brand}</h5>
    <p class="card-text">${element.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    
  </div>
</div></div>`;
      });
    })
    .catch((err) => {
      console.log("Errore", err);
    });
};
getFrutt();
