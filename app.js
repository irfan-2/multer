import express from "express";
import { uploadSimple, uploadWithFeatures } from "./utils/multerMiddleware.js";

const app = express()

app.get("/health", (req,res) =>{
    res.status(200).json({
        "msg" : "APIs are healthy"
    })
})

app.post("/single-simple",uploadSimple.single("screenshot"), async(req,res) =>{
    try {
        if(!req.file){
            return res.status(400).json({
                "msg" : "No file uploaded"
            })
        }

        console.log(req.file);
        res.status(200).json({
            "msg" : "file uploaded successfully", file: req.file
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            "msg" : "internal server error"
        })
    }
})

app.post("/multi-simple",uploadSimple.array("screenshots", 3), async(req,res) =>{
    try {
        if(!req.files){
            return res.status(400).json({
                "msg" : "No file uploaded"
            })
        }

        console.log(req.files);
        res.status(200).json({
            "msg" : "file uploaded successfully", files: req.files
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            "msg" : "internal server error"
        })
    }
})

app.post("/multi-simple",uploadSimple.array("screenshots", 3), async(req,res) =>{
    try {
        if(!req.files){
            return res.status(400).json({
                "msg" : "No file uploaded"
            })
        }

        console.log(req.files);
        res.status(200).json({
            "msg" : "file uploaded successfully", files: req.files
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            "msg" : "internal server error"
        })
    }
})


app.post("/single-feature",uploadWithFeatures.single("screenshot"), async(req,res) =>{
    try {
        if(!req.file){
            return res.status(400).json({
                "msg" : "No file uploaded"
            })
        }

        console.log(req.file);
        res.status(200).json({
            "msg" : "file uploaded successfully", file: req.file
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            "msg" : "internal server error"
        })
    }
})

app.post("/multi-feature",uploadWithFeatures.array("screenshots", 3), async(req,res) =>{
    try {
        if(!req.files){
            return res.status(400).json({
                "msg" : "No file uploaded"
            })
        }

        console.log(req.files);
        res.status(200).json({
            "msg" : "file uploaded successfully", files: req.files
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            "msg" : "internal server error"
        })
    }
})

app.post("/memory-single", uploadWithFeatures.single("screenshot"), (req,res) =>{
    try {
         if(!req.file){
            return res.status(400).json({
                "msg" : "No file uploaded"
            })
        }

        console.log(req.file);
        res.status(200).json({
            "msg" : "file uploaded successfully", file: req.file
        })
    } catch (error) {
         console.log(error.message);
        res.status(500).json({
            "msg" : "internal server error"
        })
    }
})

app.listen(5000, ()=>{
    console.log("server is running on port 5000");
    
})