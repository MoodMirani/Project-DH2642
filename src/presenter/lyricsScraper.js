
const puppeteer = require("puppeteer");

async function scrapeLyrics(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)

    const [element] = await page.$x('//*[@id="application"]/main/div[2]/div[3]');
    const txt = await element.getProperty("textContent");
    const rawTxt = await txt.jsonValue();

    console.log(rawTxt)
    browser.close()
    
    return rawTxt
}

export default scrapeLyrics;

//scrapeLyrics("https://genius.com/Avicii-without-you-lyrics")