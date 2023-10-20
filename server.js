const path = require('path')
const fsPromises = require('fs').promises
	
	const fileOps = async () => {
		try{
			const data = await fsPromises.readFile(path.join(__dirname,'text','test.txt'), 'utf8')		
			console.log(data);
			await fsPromises.writeFile(path.join(__dirname,'text','test.txt'), '\n Welcome to node')
			console.log("write complete");
			await fsPromises.appendFile(path.join(__dirname,'text','test.txt'), '\n\n Thank you')
			console.log("append complete");
			await fsPromises.rename(path.join(__dirname,'text','test.txt'),path.join(__dirname,'text','rename.txt'))
			console.log("rename complete");
		} catch(err){
			console.error(err)
		 }
	}
	fileOps()
	
	//exit on uncaught errors
	process.on('uncaughtException',err => {
		console.error(`There was an uncaught error: $(err)`)
		process.exit(1)
	})