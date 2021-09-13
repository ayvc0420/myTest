import http from 'http';

const port = 8080;
const server = http.createServer();
server
	.on('error', function(e){
		console.error(`listen port ${port} fail!`);
	})
	.on('request', function(req, res){
		console.log('===== incoming request =====');
		console.log(`method: ${req.method}`);
		console.log(`url: ${req.url}`);
		console.log('headers:');
		console.log(req.headers);
		console.log('===== incoming request body =====');
		const buf = [];
		req
			.on('error', e => console.log('network error:', e.stack))
			.pipe(process.stdout)
		;
		res.end();
		console.log('===== incoming request end =====');
	})
	.listen(port, '127.0.0.1', function(e){
		console.log(`listen port ${port}.`);
	})
;

