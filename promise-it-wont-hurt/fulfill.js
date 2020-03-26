let promise = new Promise((res) => {
	setTimeout(() => res('FULFILLED!'), 300)
})

promise.then(result => console.log(result));