const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pug = require('pug');
const fs = require("fs");


// ***************************************
// ** Data files **
// ***************************************
// const df_ru = require('./data/recent_updates.json');
// const df_queries = require('./data/queries.json');

// init app
const app = express();

// ***************************************
// ** Setting Global Variables **
// ***************************************
app.set('port', process.env.PORT || 3000 );   // dynamic port : PORT=4000 node index
// app.set('appQueries', df_queries);

var test_val = 0;
app.set('test_val', test_val);

// ***************************************
// ** View Engine **
// ***************************************
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug' );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Added during testing /runquery as body object was empty before this.

// ***************************************
// ** Middleware **
// ***************************************
app.use(express.static('./public'));

// ***************************************
// ** Routes **
// ***************************************
//------------------------------------------------------ /login 
app.use(require('./routes/login'));

//------------------------------------------------------ /
app.use(require('./routes/index'));

//------------------------------------------------------ /write
app.get('/write', function(req, res){
    var test_val = req.app.get('test_val');
    test_val = 1;
    req.app.set('test_val', test_val);
    res.render('write-md',{title: "Write Markdown"});
  });

// ***************************************
// ** Category **
// ***************************************
//------------------------------------------------------ /category-latest
app.get('/category-latest', function(req, res){
  var test_val = req.app.get('test_val');
  test_val = 1;
  req.app.set('test_val', test_val);
  res.render('category-latest',{title: "Latest category"});
});

//------------------------------------------------------ /category/:categoryName
app.get('/category/:categoryName', function(req, res){
  console.log(req.params);
  let categoryName = req.params.categoryName;
  title = categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
  console.log(title);  
  res.render('category',{title, categoryName});
});

//------------------------------------------------------ /category/:categoryName/:articleId
app.get('/category/:categoryName/:articleId', function(req, res){
  console.log(req.params);
  let categoryName = req.params.categoryName;
  let articleId = req.params.articleId;
  console.log(categoryName, articleId);  
  res.render('article',{title: "Article Title"});
});

//------------------------------------------------------ /category/:categoryName/:articleId
app.get('/all/:articleId', function(req, res){
  console.log(req.params);
  let articleId = req.params.articleId;
  console.log(articleId);  
  res.render('article',{title: "Article Title"});
});

app.get('/jsonr', async function(req, res){

  respData = await read_json("./data/categories.json");
  res.send(respData);
});

app.get('/jsonw', async function(req, res){
  query = req.query;  
  console.log(query);
  respData = await read_json("./data/categories.json");
  respData = JSON.parse(respData);
  // console.log('typeof = ' + typeof(respData));
  key = Object.keys(query)[0];
  // console.log('Key = ' + key + 'Query= ' + query[key]);
  respData[key] = query[key];
  // respData = Object.assign(respData, {key : query[key]});
  respData = JSON.stringify(respData, null, 2);
  // console.log('Updated : ' + respData);
  writeResp = await write_json(respData, './data/categories.json');
  res.send('Update : ' + respData + writeResp);
});

const read_json = async function readFile(path) {
  return new Promise((resolve, reject) => {

    fs.readFile(path, (err, jStr) => {
      if (err) {
        console.log("File read failed:", err);
        respData = 'Failed with error : ' + err ;
        reject(respData);
      }
      respData = JSON.parse(jStr);
      console.log("File data:", respData);
      resolve(JSON.stringify(respData));
    });  

  });
}

const write_json = async (data, path) =>{
  return new Promise( (resolve, reject) =>{

    // const jsonString = JSON.stringify(data)
    fs.writeFile(path, data, err => {
      if (err) 
          reject('Error writing file', err);
      else 
          resolve('Successfully wrote file')
    });
  });
};

//------------------------------------------------------ /trash
app.get('/trash', function(req, res){
  console.log(req.params);
  let articleId = req.params.articleId;
  console.log(articleId);  
  res.render('trash',{title: "Trash"});
});


// ***************************************
// ** Start server **
// ***************************************
app.listen(app.get('port'), function(){
  console.log('server started on port ' + app.get('port'));
});