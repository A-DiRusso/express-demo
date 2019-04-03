//bring in express module
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const PORT = 3000;
// const homepage = require('./views/homepage');


//express returns a function so we set a varialble to call it for later use
//app is roughly the 'result of calling http.createServer()'
const app = express();
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');


app.get('/', (req, res) => {
    const theUser = {
        username: 'turninpsquirrel'
    };
    const bookTitles = [
        'The Shining',
        'It',
        'Pet Sematary'
    ];
    res.render('index', {
        locals: {
            title: `Hello ${theUser.username}`,
            message: `Welcome back`,
            content: `lorem ipsum something something`,
            books: bookTitles
        }
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

//you have to bulid a from for the browser to send a post request
// app.post('/', (req, res) => {
//     console.log('Responding to a POST');//this is server side, the console is only in the terminal
//     res.send('You sent a POST')
// });

//these act like event handlers 
// app.put('/', (req, res) => {
//     console.log('Responding to a PUT');//not the browser's console 
//     res.send('You sent a PUT')
// });

//1. identify the var name you want
//2. make it part of the path string
//3. pre-fix it with a colon
//4. it will now be a part of req.prams
// app.put('/users/:jeff', (req, res) => {
//     console.log(req.params.jeff);
//     res.send(`You sent me a PUT for ${jeff}`);
// });

// app.put('/users/:jeff', (req, res) => {
//     console.log(req.params.jeff);
//     res.send(`You sent me a PUT for ${jeff}`);
// });

// app.put('/users/:jeff', (req, res) => {
//     console.log(req.params.jeff);
//     res.send(`You sent a PUT for ${req.params.jeff}`);
// })

// app.delete('/', (req, res) => {
//     console.log('Responding to a DELETE');
//     res.send('You sent a DELETE')
// });

// app.delete('/users/:userId/delete', (req, res) => {
//     console.log('req.pramas.userId');
//     res.send(`You just deleted ${req.params.userId}`);
// });


// app.get('/bye', (req, res) => {
//     res.send('Bye Page');
// });


//just like server.listen
app.listen(PORT, () => {
    console.log(`Your express app is running at ${PORT}`);
});


