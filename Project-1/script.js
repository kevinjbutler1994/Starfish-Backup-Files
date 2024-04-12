const url = "https://balldontlie.io/api/v1/players";

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });

