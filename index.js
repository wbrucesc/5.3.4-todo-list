const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));


let todos = [
  {
    task: "wash the car",
    done: false
  },
  {
    task: "mow the grass",
    done: true
  },
  {
    task: "go to dentist",
    done: false
  }
];

// const doneTasks = [];



app.get('/', (req, res) =>{
  res.render('index', {todos: todos});
});

app.post('/add', (req, res) => {
  todos.push({task: req.body.newTask, done: false});
  res.redirect('/');
});


app.post('/completed', (req, res) =>{
  todos.forEach((item, index) => {
    if (req.body.done === todos[index].task){
      item.done = true;
      console.log('clicked', item);
      console.log('clicked todos', todos);
    }
  });
  res.redirect('/');
});






app.listen(3000);
