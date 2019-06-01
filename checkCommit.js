#!/usr/bin/env node
// 在 commit 之前检查是否有冲突，如果有冲突就 process.exit(1)


const { exec } = require('child_process');

exec(`node test`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    process.exit(1)
    return;
  }
  if(stdout === 'success'){
    console.log('test success! commited')
  	process.exit(0)
  }else{
    console.log('test fail! do not commit!')
  	process.exit(1)
  }

});


