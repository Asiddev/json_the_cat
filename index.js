const { breedFetcherDescription } = require("./breedFetcher");
let breed = process.argv.slice(2);

breedFetcherDescription(`${breed}`, (err, data) => {
  if (err) {
    return console.log("There was an error", err);
  }
  return console.log(data);
});
