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

// splice(index, how many)

app.get('/', (req, res) =>{
  // let todo = req.body.todos;
  res.render('index', {todos: todos});
});

app.post('/add', (req, res) => {
  // console.log('body', req.body);
  // console.log('body newTask', req.body.newTask);
  // console.log('before', todos);
  todos.push({task: req.body.newTask, done: false});
  // console.log('after', todos);
  res.redirect('/');
});


app.post('/completed', (req, res) =>{
  todos.forEach((item, index) => {
    if (req.body.done === todos[index].task){
      item.done = true;
      console.log('clicked', item);
      console.log('clicked todos', todos);
      // var newListItem = todos[index];
      // todos.splice(index, 1);
      // doneTasks.push(newListItem);
      // console.log('todos array', todos);
      // console.log('doneTasks array', doneTasks);
    }
  });
  res.redirect('/');
  // console.log(req.body.done);
});






app.listen(3000);
