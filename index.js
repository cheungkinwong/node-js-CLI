// javascript
const axios = require("axios");
const from = "";
const standard_input = process.stdin;
standard_input.setEncoding("utf-8");

console.log("Please input language you want to translate to.");
standard_input.once("data", function translate(input_language) {
     console.log("Please input text you want to translate.");
     standard_input.once("data", function(data) {
          axios({
               method: "get",
               url: `https://api.mymemory.translated.net/get?q=${data}&langpair=${from}|${input_language}`,
               responseType: "json"
          }).then(function(response) {
               console.log(response.data.responseData.translatedText);
          });
     });
});
