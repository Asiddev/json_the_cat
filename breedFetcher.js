const request = require("request");

let breed = process.argv.slice(2);

const fetch = function(uri) {
  request(`${uri}`, (error, response, data) => {
    if (response.statusCode === 404) {
      console.log("network error. Please check uri");
      return;
    }

    if (JSON.parse(data).length === 0) {
      console.log("No data for this breed is avaliable");
      return;
    }
    console.log(JSON.parse(data)[0].description);
  });
};

fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`);
