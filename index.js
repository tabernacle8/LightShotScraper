process.setMaxListeners(0);
const puppeteer = require("puppeteer");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
function randomId(){
    return(alphabet[Math.floor(Math.random() * alphabet.length)]+""+
    alphabet[Math.floor(Math.random() * alphabet.length)]+""+
    getRandomInt(9)+""+
    getRandomInt(9)+""+
    getRandomInt(9)+""+
    getRandomInt(9)+"")
    console.log(randomId)
}
var x = 0
console.log("Gathering images...")
while(x<7){
    
(async () => {
   
    var random = randomId()
    
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://prnt.sc/${random}`);
  await page.screenshot({ path: `img${random}.png` });
  await browser.close();
  
  
  sleep(5);
  console.log(`Writing: ${random}`)
})()
x = x+1

}