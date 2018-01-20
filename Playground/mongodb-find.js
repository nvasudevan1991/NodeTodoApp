const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,result)=>{
	if(error){
		console.log("Error creating the DataBase");
	}else {
		console.log("Connected to DataBase");
	}

	// result.collection('Todos').find().count().then((document)=>{
	// 	console.log("Fetched Contents has:",document);
	// 	//console.log(JSON.stringify(document,undefined,2));
	// },(error)=>{
	// 	console.log("Unable to Fetch the contents",error);
	// });
	result.collection('TodosSecond').find({myCollection:'Panni'}).toArray().then((document)=>{
		console.log("Fetched Contents has:");
		console.log(JSON.stringify(document,undefined,2));
	},(error)=>{
		console.log("Unable to Fetch the contents",error);
	});


	result.close();

})