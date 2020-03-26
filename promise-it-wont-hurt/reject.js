let promise = new Promise((res, rej) => {
	setTimeout(() => rej(new Error('REJECTED!')), 300)
})

promise.then(()=>{}, reject => console.log(reject.message));