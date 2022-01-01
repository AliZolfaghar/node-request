const port = 89
const express = require("express");
var soap = require('strong-soap').soap;
const axios = require('axios');

const app = express();

app.get('/api/sejam/:nin',(req,res)=>{
	console.log('check sejam ' + req.params.nin );
	send_sejam(req,res); 	
});

app.get('/api/taxdebt/:nin',(req,res)=>{
	console.log('check taxdebt ' + req.params.nin );
	send_taxdebt(req,res) ; 
});

app.listen(port,()=>{
	console.log('server start on port ' + port );
}) ; 

const send_sejam = async (req,res) => {
        var url = "https://api.sejam.ir:8080/v1.1/accessToken";
        axios.post(url , {username:"user" , password:"pass"})
        .then(response => {            
			url = "https://api.sejam.ir:8080/v1.1/profiles/" + req.params.nin + "/isSejami";
			var token = "bearer " + response.data.data.accessToken ; 
			
			axios.get(url , {headers: { Authorization: token }})
			.then(response => {				
				res.json(response.data.data);
			})
			.catch((error)=>{
				console.error('error 2' , error.message);
				res.status(500).json({error : error.message}) ; 
			});	    
        })
		.catch((error)=>{
			console.error('error 1' , error.message);
			res.status(500).json({error : error.message}) ; 
		}); 
}