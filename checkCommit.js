



process.stdout.write("......\n");
process.stdout.write("确认执行吗(y/n)？");
process.stdin.on('data',(input)=>{
  dd()
})
//selenium test

function dd(){
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
        process.exit(0)
        driver.quit();
      }
    })
  
  },2000)
}
}



 
/*
const { exec } = require('child_process');

exec(`node test`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    process.exit(1)
    return;
  }

  if(stdout === 'success'){
    console.log('test success! allow commit')
  	process.exit(0)
  }else{
    console.log('test fail! not allow commit!')
  	process.exit(1)
  }

});

*/
