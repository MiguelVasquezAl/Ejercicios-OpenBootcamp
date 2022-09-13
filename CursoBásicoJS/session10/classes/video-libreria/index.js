import axios from "axios";

axios.get("https://pokeapi.co/api/v2/pokemon/ditt")
  .then(function (response) {
    // handle success
    console.log("Success!!!");
    console.log(response.date);
  })
  .catch(function (error) {
    // handle error
    console.log("Error!!");
    console.log(error);
  })