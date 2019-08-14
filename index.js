// javascript
const axios = require("axios");
// const translateThis = "process.translateThis";
const from = "en";
const to = "chi";

const standard_input = process.stdin;
standard_input.setEncoding("utf-8");

console.log("Please input text you want to translate.");

standard_input.on("data", function(data) {
     axios({
          method: "get",
          url: `https://api.mymemory.translated.net/get?q=${data}&langpair=${from}|${to}`,
          responseType: "json"
     }).then(function(response) {
          console.log(response.data.responseData.translatedText);
     });
});
