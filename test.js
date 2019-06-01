var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://dl.reg.163.com/ydzj/mob?product=urs&curl=https://reg.163.com#/pwdLogin');
//console.log('success')
driver.quit('success');
//driver.findElement(By.className('ipt_input ipt_input_large ipt_input-')).sendKeys('18668423158');
//driver.findElement(By.className('ipt_input ipt_input_large ipt_input-')).sendKeys('18668423158');
//driver.findElement(By.className('f-right')).click();
//driver.wait(until.titleIs('webdriver_百度搜索'), 1000);
//driver.quit();
 