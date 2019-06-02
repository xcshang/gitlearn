var readlineSync = require('readline-sync');




//selenium test
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

let options = driver.manage() 

async function login() {
	await driver.get('https://m.reg.163.com/?email=1/#/email')
	await driver.findElement(By.linkText('立即登录')).click()
	await driver.switchTo().frame(driver.findElement(By.tagName("iframe")))
	
	await driver.findElement(By.css('input[placeholder=邮箱帐号或手机号]')).sendKeys('lalasxc@126.com')
	await driver.findElement(By.name('password')).sendKeys('wjsssrdbb1212!')
	await driver.findElement(By.id('dologin')).click()
	readlineSync.question('继续')
	await driver.findElement(By.id('dologin')).click()
	getCookie()
	
	
}

login()
/*
driver.sleep(5000).then(() => {
	login()
})
*/

function getCookie(){
	setTimeout(() => {
		options.getCookie('P_INFO').then((ck)=>{
			if(ck.value){
				process.stdout.write('success');
				driver.quit();
			}
		})
	
	},2000)
}

