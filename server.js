const express =
 require (`express`);
 const userRouter = 
 require('./routes/users');
 const postRouter =
 require(`./routes/posts`);
const app = express(); //calling this function sets up a server
app.set('view engine', 'ejs');
app.use('/users', userRouter);
app.use(`/posts`, postRouter);
app.get('/', (req,res)=>{
    console.log('Here');
    res.render("index", {user: "Josh!",});
}); // this function wil run when soemone goes to root fl
app.get('/users', (req, res)=> {
    res.send('User List');
});
app.get('/users/new', (req, res)=>{
    res.send('New User Form')
});
app.get(`/posts`, (req, res)=> {
    res.send(`Post List`);
});
app.get(`/posts/new`, (req, res)=>(
    res.send(`Create a New Post`)
));



app.listen(3030);

