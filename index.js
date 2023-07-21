const path = require('path');
const express = require('express')
const app = express();

// app.use((req , res) => {
//     console.log('we got request');

//     res.send('<h1>hello world</h1>')
// })

// app.get('/' , (req , res) => {
//     res.send('<h1>hello world</h1>');
// });

// app.get('/blog/:judul' , (req , res) => {
//     // console.log(req.params);
//     res.send('ini halaman blog')
// })

// app.get('/blog/:category/:judul/:author' , (req , res) => {
//     const {category , judul , author} = req.params;
//     res.send(`ini blog dengan kategori : ${category} judul : ${judul} author : ${author}`);
// })

// app.get('/search' , (req , res) => {
//     res.send(req.query)
// })

// app.get('*' , (req , res) => {
//     res.send('halaman tidak di temukan')
// })
const tagData = require('./views/data.json');
const { log } = require('console');

app.set('view engine' , 'ejs');
app.set('path' , path.join(__dirname , '/views'));
// membuat aset public
app.use(express.static(path.join(__dirname , '/public')));

app.get('/' , (req , res) => {
    res.render('home')
})

app.get('/order' , (req , res) => {
    res.send('Methode get is running')
})
app.post('/order' , (req , res) => {
    res.send('Methode post is running')
})

app.get('/rand' , (req , res) => {
    const num = Math.floor(Math.random() * 10) + 1 ;
    res.render('random' , {random: num})
})

app.get('/t/:tag' , (req , res) => {
    
    const {tag} = req.params;
    const data = tagData[tag];
    if(data) {
        res.render('tag' , { data });
    }else {
        res.render('notfound' , {tag});
    }
})

// mengunakan for of di ejs
app.get('/cats' , (req , res) => {
    const cats = [
        'buso' , 'gembul' , 'gemoy' , 'lala'
    ];
    res.render('cats' , {cats})
})
app.listen(8080 , () => {
    console.log('server is running on htpp://localhost:8080');
})