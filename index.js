const axios = require("axios");
var beep = require("beepbeep");

let currentMessage = "";
async function main() {
  const response = await axios.get(
    "https://cityofaustin.queue-it.net/spa-api/after/cityofaustin/cityofaustinprod0301/00000000-0000-0000-0000-000000000000/status?cid=en-US&l="
  );
  const responseText = response.data.message.text;

  if (responseText !== currentMessage) {
    currentMessage = responseText;
    console.log(`\n${responseText}\n`);
    beep(30, 300);
  }

  //   if (responseText.indexOf("full") === -1) {
  //     beep(30, 300);
  //   }
}

main();

setInterval(() => {
  main();
}, 1000 * 60);
