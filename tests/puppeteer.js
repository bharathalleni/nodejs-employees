const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch(
    {
        headless: true,
        executablePath:'/var/lib/jenkins/workspace/Puppeteer-Tests@2/node_modules/puppeteer/.local-chromium/linux-722234/chrome-linux/chrome',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
  );

  const page = await browser.newPage();
  await page.goto('https://facebook.com', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();