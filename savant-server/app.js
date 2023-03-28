const express = require("express");
const mongoose = require("mongoose")

const app = express();

app.use(express.json());


mongoose.connect('mongodb+srv://ukdwiwedi1796:Cju8jPX9c1yvCSmE@cluster0.vakvxjl.mongodb.net/?retryWrites=true&w=majority', 
{ 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
})
.then(result => {
    app.listen(process.env.PORT || 5000);
    console.log("Server started at port 5000");
    console.log("http://localhost:5000");
})
.catch(err => {
    console.log(err);
})
