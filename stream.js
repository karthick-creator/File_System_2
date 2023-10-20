const fs = require('fs')
const path = require('path')
const rs = fs.createReadStream(path.join(__dirname,'text','bigfile.txt'),{encoding: 'utf8'})
const ws = fs.createWriteStream(path.join(__dirname,'text','new_bigfile.txt'))

rs.on('data',(dataChunk) => {
	ws.write(dataChunk)
})

rs.pipe(ws) 