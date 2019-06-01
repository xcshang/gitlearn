var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://dl.reg.163.com/ydzj/mob?product=urs&curl=https://reg.163.com#/pwdLogin');
//driver.sleep(5000);//毫秒
driver.executeScript('return document.cookie').then(function(obj){
    process.stdout.write('success');
    //process.exit(0)
    driver.quit();
}).catch((e) => {
	process.stdout.write(e);
	//process.exit(0)
	driver.quit();
})
//driver.sleep(10000);//毫秒
//process.stdout.write('success');
//driver.quit();

//process.stdout.write('success');
//driver.findElement(By.className('ipt_input ipt_input_large ipt_input-')).sendKeys('18668423158');
//driver.findElement(By.className('ipt_input ipt_input_large ipt_input-')).sendKeys('18668423158');
//driver.findElement(By.className('f-right')).click();
//driver.wait(dd, 1000);
//driver.quit();
 