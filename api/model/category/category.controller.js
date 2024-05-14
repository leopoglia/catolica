const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());


const categoryHandler = require("./category.handler");

router.get("/", (req, res) => {
    categoryHandler.getCategory(req,res).then(dados => res.json(dados));
})

router.get("/:id", (req, res) => {
    categoryHandler.getCategoryID(req.params.id).then(dados => res.json(dados));
})

router.post("/", (req, res) => {
    categoryHandler.saveCategory(req, res).then(dados => res.json(dados));
})

router.put("/:id", (req, res) => {
    categoryHandler.editCategory(req, req.params.id).then(dados => res.json(dados));
})

router.delete("/:id", (req, res) => {
    categoryHandler.deleteCategory(req.params.id).then(dados => res.json(dados));
})

router.post("/auth", (req, res) => {
    categoryHandler.auth(req, res).then(dados => res.json(dados));
})

module.exports = router;