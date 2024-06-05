const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());


const userHandler = require("./user.handler");

router.get("/", (req, res) => {
    userHandler.getUser(req,res).then(dados => res.json(dados));
})

router.get("/:id", (req, res) => {
    userHandler.getUserID(req.params.id).then(dados => res.json(dados));
})

router.post("/", (req, res) => {
    userHandler.saveUser(req, res).then(dados => res.json(dados));
})

router.put("/:id", (req, res) => {
    userHandler.editUser(req, req.params.id).then(dados => res.json(dados));
})


router.put("/points/:id", (req, res) => {
    userHandler.editUserPoints(req, req.params.id).then(dados => res.json(dados));
})

router.put("/level/:id/:points", (req, res) => {
    userHandler.editUserLevel(req.params.id, req.params.points).then(dados => res.json(dados));
})

router.get("/level/:id", (req, res) => {
    userHandler.getUserLevel(req.params.id).then(dados => res.json(dados));
})

router.delete("/:id", (req, res) => {
    userHandler.deleteUser(req.params.id).then(dados => res.json(dados));
})

router.post("/auth", (req, res) => {
    userHandler.auth(req, res).then(dados => res.json(dados));
})

module.exports = router;