//! this saves the data into DB
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['host1'], keyspace: 'datastore' });
client.connect(function (err) {
  console.log(err);
});


let saveDataSource = (req,res) =>{
    res.status(200).json('Successfully stored the data Sources');
}

//! this gets all the data Sources from DB
let getDataSource = (req,res)=>{
    const query = "SELECT * FROM datastore";
    client.execute(query, function (err, result) {
    let data = result.first();
    //The row is an Object with column names as property keys. 
    console.log(data);
    });

    let response = [{
        "DataUrl":"http://localhost:9191/test1",
        "name":"Test url1",
        "provider":"Test1",
        "domain":"test domain1"
    },
    {
        "DataUrl":"http://localhost:9191/test2",
        "name":"Test url2",
        "provider":"Test2",
        "domain":"test domain2"
    },
    {
        "DataUrl":"http://localhost:9191/test3",
        "name":"Test url3",
        "provider":"Test3",
        "domain":"test domain3"
    }]
    res.status(200).json(response);
}

//! this gets one the data Sources from DB
let getOneDataSource = (req,res)=>{
    let response = {
        "DataUrl":"http://localhost:9191/test",
        "name":"Test url",
        "provider":"Test",
        "domain":"test domain"
    }
    console.log("requesting for ID : ",req.params.id);
    res.status(200).json(response);
}

//! this updates the data Sources in DB
let updateOneDataSource = (req,res)=>{
    
    res.status(200).json('Successfully updated one data Sources');
}

//! this deletes the data Sources from DB
let DeleteOneDataSource = (req,res)=>{
    console.log("requesting for ID : ",req.params.id);
    res.status(200).json('Successfully deleted the data Sources');
}

module.exports = {
    saveDataSource,
    getDataSource,
    getOneDataSource,
    updateOneDataSource,
    DeleteOneDataSource
}




