const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,success)=>{

	if(error){
		console.log("Unable to Connect to the data base");
	}
	else {
		console.log("Connected to mongodb" );
	}

	// success.collection('TodosSecond').findOneAndUpdate(
	// 	{_id:new ObjectID('5a617c85965236371c388c5b')
	// 	},
	// 	{
	// 		$set:{
	// 			myCollection:"dog"
	// 		}
	// 	},
	// 	{
	// 		returnOriginal :false
	// 	}

	// 	).then((updated) =>{
	// 		console.log(updated);

	// },(err)=>{
	// 	console.log("Unable to Update");
	// });

	success.collection('TodosSecond').findOneAndUpdate(
		{myCollection:"Try panni pakuren"
		},
		{
			$set:{
				myCollection:"Changed Value"
			}
		},
		{
			returnOriginal :false
		}

		).then((updated) =>{
			console.log(updated);

	},(err)=>{
		console.log("Unable to Update");
	});



	success.close();
});