const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,success)=>{
	if(err){
		console.log("Unable to connect");
	}else {
		console.log("connection Successfull");
	}

success.collection('Todos').deleteOne({_id:new ObjectID('5a617b41c18c3c1be4565c89')}).then((deleted)=>{

		console.log(deleted);
	},(error)=>{
		console.log("Unable to delete it");
	});

success.collection('Todos').find().toArray().then((result)=>{
	console.log("Fetched Content:");
	console.log(JSON.stringify(result,undefined,2));

},(error)=>{
	console.log("Sorry");
});

success.close();
});