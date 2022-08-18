const express = require ("express");
const axios = require('axios');
// const https= require ("https");
const app = express();
 const url ="https://demo7303877.mockable.io/";

app.get("/",async function(req,res){
    try {
        const response = await axios.get(url);
        console.log(response);
        res.json(response)
      } catch (error) {
        console.error(error);

      }
  })
    // https.get(url,function(response){
    //     console.log(response.status);
    //     response.on("data",function(data){
    //         const apiData=JSON.parse(data)
    //         console.log(apiData);

    //     })
    // })
// })
// app.get("/", function(req,res){
//     https.get(url,function(response){
//         console.log(response);
        // response.on("data",function(data){
        //     console.log(data);
    //     });
    // })
    // res.send("serever is up and running");
// })

app.listen(3000,function(){
    console.log("server is running on port 3000");
})