import express from "express";
import models from '../modelsGraphql';

const router = express.Router();

router.get('/users', (req, res) => {
    models.userData.find({})
        .then(users => {
            res.json({users});
        })
        .catch(err => {
            res.json({err});
        });
});

router.get("/user/:id", function(req, res){
    const {id} = req.params;
    models.userData.findOne({_id: id})
        .then(user => {
            res.json({user});
        })
        .catch(err => {
            res.json({err});
        });
});

router.post("/user", (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const{name, sername, age} = req.body;
    models.userData.create({
        name,
        sername,
        age
    }).then(user => res.json({user}))
        .catch(err => {
            res.json({err});
        });
});

router.delete("/user/:id", function(req, res){
    const {id} = req.params;
    models.userData.findByIdAndDelete(id)
        .then(user => {
            res.json({user});
        })
        .catch(err => {
            res.json({err});
        });
});

router.put("/user/:id", function(req, res){
    if(!req.body) return res.sendStatus(400);
    const{id, name, sername, _id} = req.body;
    const newUser = {id, name, sername};
    models.userData.findOneAndUpdate({_id: id}, newUser, {new: true})
        .then(user => {
            res.json({user});
        })
        .catch(err => {
            res.json({err});
        });
});
