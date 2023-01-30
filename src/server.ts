// import express from "express";
// import cors from "cors";
// import { sample_plants, sample_tags } from "./data";

// const express= require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors({
//     Credential:true,
//     origin:['http://localhost:4200']
// }));

// app.get("/api/plants",(req, res)=>{
//     res.send("sample_plants");
// })
// app.get("/api/plants/search/:searchTerm",(req, res) =>{
//     const searchTerm = req.params.searchTerm;
//     const plants =  sample_plants
//     .filter(plant => plant.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
//     res.send(plants);
// })

// app.get("api/plants/tags",(req, res)=>{
//     res.send(sample_tags);
// })
// app.get("/api/plants/tag/:tagName", (req, res) =>{
//     const tagName = req.params.tagName;
//     const plants = sample_plants.filter(plant => plant.tags?.includes(tagName));
//     res.send(plants);
// })
// app.get("/api/plants/:plantId", (req, res) =>{
//       const plantId = req.params.plantId;
//       const plant = sample_plants.find(plant => plantId == plantId);
//       res.send(sample_plants);
// })

// const port = 21000;
// app.listen(port, () =>{
//     console.log("website served on http://localhost:" +port);
//  })