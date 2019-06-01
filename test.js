var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

let options = driver.manage() 
driver.get('https://m.reg.163.com/?email=1/#/email');

setTimeout(() => {
	driver.findElement(By.linkText('立即登录')).click()
	driver.switchTo().frame(driver.findElement(By.tagName("iframe")));
	fillUserName()
	
},2000)


function fillPassword(){
	setTimeout(() => {
	driver.findElement(By.name('password')).sendKeys('wjsssrdbb1212!5')
	loginBtn()
},1000)
	
	
}


function fillUserName(){
	setTimeout(() => {
	driver.findElement(By.css('input[placeholder=邮箱帐号或手机号]')).sendKeys('lalasxc@126.com')
	fillPassword()
	
},1000)
}

function loginBtn(){
	setTimeout(() => {
	driver.findElement(By.id('dologin')).click()
	getCookie()
	
},1000)
}

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




/*
driver.executeScript('return document.cookie').then(function(obj){
    process.stdout.write('success');
    driver.quit();
}).catch((e) => {
	process.stdout.write('fail');
	driver.quit();
})
*/

//process.stdout.write('success');
//driver.findElement(By.className('ipt_input ipt_input_large ipt_input-')).sendKeys('18668423158');
//driver.findElement(By.className('ipt_input ipt_input_large ipt_input-')).sendKeys('18668423158');
//driver.findElement(By.xpath('<a class="f-right">密码登录</a>')).click();
//driver.wait(driver.findElement(By.linkText('密码登录')).click(), 1000);
//driver.quit();
 