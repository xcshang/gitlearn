
const { exec } = require('child_process');

exec(`node test`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    process.exit(1)
    return;
  }

  if(stdout === 'success'){
    console.log('\033[42;30m ----------------- test success! start commit ----------------- \033[0m')
  	process.exit(0)
  }else{
    console.log('\033[41;33m ----------------- test fail! forbid commit! ----------------- \033[0m')
  	process.exit(1)
  }

});


