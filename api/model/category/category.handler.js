const crud = require("../../crud");

async function getCategory() {
    const categorys = await crud.get("category");

    return categorys;
}

async function getCategoryID(id) {
    const category = await crud.getID("category", id)
    return category;
}

async function saveCategory(req, res) {
    const categorys = await crud.get("category");


    const category = {
        name: req.body.name
    }

    return await crud.save("category", 0, category);
}

async function editCategory(req, id) {
    return await crud.save("category", id, req.body);
}

async function deleteCategory(id) {
    return await crud.remove("category", id);
}


module.exports = {
    getCategory,
    getCategoryID,
    saveCategory,
    editCategory,
    deleteCategory,
}