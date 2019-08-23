const express = require('express')
const app = express()
const port = 9191
const handler = require('./handler');

//TODO:API to get the datasource
app.get('/', handler.getDataSource);

//TODO:API to Store the datasource
app.post('/', handler.saveDataSource);

//TODO:API to get only one dataSource
app.get('/:id', handler.getOneDataSource);

//TODO: API to update the dataSource
app.post('/', handler.updateOneDataSource);

//TODO: API to Delete the dataSource
app.post('/:id', handler.DeleteOneDataSource);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


