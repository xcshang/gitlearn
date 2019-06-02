
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
	try{
		await driver.findElement(By.id('dologinccc'))
		readlineSync.question('继续')
		await driver.findElement(By.id('dologin')).click()
		getCookie()
	}catch(e){
		getCookie()
	}
	
	
}

login()


function getCookie(){
	setTimeout(() => {
		options.getCookie('P_INFO').then((ck)=>{
			if(ck.value){
				regist()
				//process.stdout.write('success');
				//driver.quit();
			}
		})
	},2000)
}

let zcurl = `https://zc.reg.163.com/regInitialized?pd=urs&pkid=PSANoGn&pkht=reg.163.com&onlyNetease=1
`
async function regist() {
	await driver.get(zcurl)
	await driver.findElement(By.id('inpt-account')).sendKeys('lalasxc@126.com')
	await driver.findElement(By.id('inpt-pw')).sendKeys('wjsssrdbb12128')
	await driver.findElement(By.id('inpt-pw2')).sendKeys('wjsssrdbb12128')
	await driver.findElement(By.id('inpt-phone')).sendKeys('18668423158')
	await driver.findElement(By.id('inpt-sms')).sendKeys('123456')
	await driver.findElement(By.className('u-agree')).click()
	readlineSync.question('继续')
	await driver.findElement(By.className('b-btn btn-reg btn-red')).click()
	process.stdout.write('success');
	driver.quit();
}



await driver.executeScript('return document.getElementById("dd").value').then(function(obj){
	    if(obj === 'sxc'){
	       process.stdout.write('success');
			driver.quit();
	    }else{
	       	process.stdout.write('fail');
			driver.quit();
	    }
	})
