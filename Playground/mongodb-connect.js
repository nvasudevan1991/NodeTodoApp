//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
// var objId = new ObjectID();
// console.log(objId);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
	if(err){
		return console.log("Unable to Connect to MongoDb Server");
	}
	console.log("Connected to MongoDb Server");
	
	// db.collection('Todos').insertOne({
	// 	text:'Something to do',
	// 	completed:false

	// },(error,result) => {
	// 	if(error){
	// 		return console.log('Unable to insert Todo',error);

	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));

	// });
	// db.collection('TodosSecond').insertOne({
	// 	myCollection: "Try panni pakuren",
	// 	matter:"I love blessy"
	// },(error,result) => {
	// 	if(error){
	// 		return console.log('Unable to insert Todo',error);

	// 	}
	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));

	// });
	

	db.close();

});