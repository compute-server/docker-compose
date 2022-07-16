const http=require('http'),port = process.env.PORT || 3000;
const router={
	head:{
		'Content-Type':'application/json',
	},
	res:'Wellcome',
	req:function(db){
		this.head.prevHash=db.headers.hash
		this.head.hash='yewiwytpwtsgsg'
		this.res='success'
		this.debug=db.headers
	}
}

http.createServer(function(req, res){
	router.req(req)
    res.writeHead(200,router.head);
    res.write(router.res);
    res.end();
    console.log(router.debug)
}).listen(port);

console.log(`server on port ${port}`);
