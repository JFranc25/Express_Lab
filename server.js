const express =
 require (`express`);
const app = express(); //calling this function sets up a server
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    console.log('Here');
    res.render("index");
}); // this function wil run when soemone goes to root fl


app.listen(3030);

