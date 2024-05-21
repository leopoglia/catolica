const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());


const rankingHandler = require("./ranking.handler");

router.get("/", (req, res) => {
    rankingHandler.getRanking(req,res).then(dados => res.json(dados));
})

router.get("/:id", (req, res) => {
    rankingHandler.getRankingID(req.params.id).then(dados => res.json(dados));
})

router.post("/", (req, res) => {
    rankingHandler.saveRanking(req, res).then(dados => res.json(dados));
})

router.put("/:id", (req, res) => {
    rankingHandler.editRanking(req, req.params.id).then(dados => res.json(dados));
})

router.delete("/:id", (req, res) => {
    rankingHandler.deleteRanking(req.params.id).then(dados => res.json(dados));
})

module.exports = router;