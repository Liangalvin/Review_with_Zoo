var express = require('express');
var ejs = require('ejs');
var app = express();
app.use(express.static(__dirname + '/public'));

var animalObj = {
  elephant: {
    name: 'Dumbo',
    type: 'Mammal',
    genus: 'Elepha',
    legs: 4
  },
  alligator: {
    name: 'Freddy',
    type: 'Reptile',
    genus: 'Alligator',
    legs: 4
  },
  panda: {
    name: 'Benji',
    type: 'Mammal',
    genus: 'Ailuropoda',
    legs: 4
  },
  lion: {
    name: 'Maxim',
    type: 'Mammal',
    genus: 'Panthera',
    legs: 4
  },
  monkey: {
    name: 'Marco',
    type: 'Mammal',
    genus: 'Homo',
    legs: 2
  },
  koala: {
    name: 'Kai',
    type: 'Mammal',
    genus: 'Phascolarctos',
    legs: 4
  },
  tiger: {
    name: 'George',
    type: 'Mammal',
    genus: 'Panthera',
    legs: 4
  },
  t_rex: {
    name: 'Milton',
    type: 'Dinosaur',
    genus: 'Tyrannosaurus',
    legs: 4
  },
  brown_bear: {
    name: 'Ted',
    type: 'Mammal',
    genus: 'Ursidae',
    legs: 4
  },
  dodo: {
    name: 'Gertrude',
    type: 'Bird',
    genus: 'Raphus',
    legs: 2
  },
  penguin: {
    name: 'Frankie',
    type: 'Bird',
    genus: 'Spheniscidae',
    legs: 2
  }
}

app.get('/animals', function(req, res) {

  res.send(animalObj);

});

app.get('/type', function(req, res){
  var type = req.params.type;

  //var str = "littlestring"
  var upCaseType = type.slice(0, 1).toUpperCase() + type.substr(1);
  //console.log(upCaseType);

  var propertyType = [];

  var anmlsAry = Object.keys(animalObj);
  anmlsAry.forEach(function(anml){
    if(upCaseType === animalObj[anml]['type']){
      propertyType.push(anml);
    }
  })

  var msg = {
    "type": upCaseType,
    "matches": propertyType
    }

  //console.log(property);
  res.send(msg);

});

app.get('/random', function(req, res){
  res.headers['Access-Control-Allow-Origin'] = '*'
  var anmlsAry = Object.keys(animalObj);
  var randAnml = anmlsAry[Math.floor(Math.random() * anmlsAry.length)];

  var msg = {
    "Animal": randAnml
  }

  console.log(randAnml);
  res.send(msg);
});

app.get('/show_random', function(req,res){
  var anmlsAry = Object.keys(animalObj);
  var randAnml = anmlsAry[Math.floor(Math.random() * anmlsAry.length)];

  var msg = {
    "Animal": randAnml
  }

  res.render('index.ejs', {input: msg});

});

app.post("/add_animal", function(req, res){
  var anmlsAry = Object.keys(animalObj);

  console.log("This seems to work");
  
});

app.listen(3000);
console.log("Listening on port 3000");
