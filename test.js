

//selenium test

//同步获取输入，用于暂停等用户手动操作
var readlineSync = require('readline-sync');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

let options = driver.manage() 

//获取登录成功页面的cookie
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

//登录流程test
async function login() {
	await driver.get('https://m.reg.163.com/?email=1/#/email')
	await driver.findElement(By.linkText('立即登录')).click()
	//切换到iframe
	await driver.switchTo().frame(driver.findElement(By.tagName("iframe")))
	await driver.findElement(By.css('input[placeholder=邮箱帐号或手机号]')).sendKeys('lalasxc@126.com')
	await driver.findElement(By.name('password')).sendKeys('wjsssrdbb1212!')
	//readlineSync.question('请手动操作后按回车键继续')
	await driver.findElement(By.id('dologin')).click()
	getCookie()
}

login()

