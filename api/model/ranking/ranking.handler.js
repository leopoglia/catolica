const crud = require("../../crud");

async function getRanking() {
    const rankings = await crud.get("ranking");

    return rankings;
}

async function getRankingID(id) {
    const ranking = await crud.getID("ranking", id)
    return ranking;
}

async function saveRanking(req, res) {
    const rankings = await crud.get("ranking");


    const ranking = {
        name: req.body.user,
        points: req.body.points,
    }

    return await crud.save("ranking", 0, ranking);
}

async function editRanking(req, id) {
    return await crud.save("ranking", id, req.body);
}

async function deleteRanking(id) {
    return await crud.remove("ranking", id);
}


module.exports = {
    getRanking,
    getRankingID,
    saveRanking,
    editRanking,
    deleteRanking,
}