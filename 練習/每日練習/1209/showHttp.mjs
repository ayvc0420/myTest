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
		req.on('error', e => console.log('network error:', e.stack));
		res.setHeader('Access-Control-Allow-Headers','Content-Type');
        res.setHeader('Access-Control-Allow-Methods','*');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Max-Age',86400);
		req.pipe(process.stdout);
		req.pipe(res);
		console.log('===== incoming request end =====');
	})
	.listen(port, '127.0.0.1', function(e){
		console.log(`listen port ${port}.`);
	})
;
