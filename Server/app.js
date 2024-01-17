const express=require('express');
const app=express();
const router=require('./routes/router');
//const cors=require('cors');

app.use(express.json());
//app.use(cors());

app.use("/api/",router);
app.use((err, req, res, next) => {
    res.status(400).json({
        status: "fail",
        message: err.message
    });
});


const PORT =3040;
app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`);
})
module.exports.app=app;