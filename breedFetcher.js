const request = require("request");

const breedFetcherDescription = function (breed, callback) {
  let uri = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(`${uri}`, (error, response, data) => {
    if (response.statusCode === 404) {
      console.log("network error. Please check uri");
      return;
    }

    const result = JSON.parse(data);

    if (result.length === 0) {
      callback(null, "Breed not found");
    } else {
      // console.log(JSON.parse(data)[0].description);
      callback(null, result[0].description);
    }
  });
};

// breedFetcherDescription(breed);

module.exports = {
  breedFetcherDescription,
};
