



 

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
 //process.exit(1)

