/*
const puppeteer = require("puppeteer");

async function scrapeLyrics(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)
    const [element] = await page.$x('//*[@id="application"]/main/div[2]/div[3]');
    const txt = await element.getProperty("textContent");
    const rawTxt = await txt.jsonValue();
    browser.close()
    console.log(rawTxt)
}

export default scrapeLyrics;
*/