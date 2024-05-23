const crud = require("../../crud");

async function getUser() {
    const users = await crud.get("user");

    users.forEach(u => {
        delete u.password;
    });

    return users;
}

async function getUserID(id) {
    const user = await crud.getID("user", id)

    delete user.password;

    return user;
}

async function saveUser(req, res) {
    const users = await crud.get("user");

    const name = req.body.name;
    const verify = users.findIndex(u => u.name == name);


    if (!req.body.name) {
        return { status: "404", error: "001", message: "Você precisa preencher todos os campos..." }
    }

    if (verify != -1) {
        return user;
    }

    const user = {
        name: req.body.name,
        points: 0,
        level: 1,
    }

    return await crud.save("user", 0, user);
}

async function editUser(req, id) {
    return await crud.save("user", id, req.body);
}

async function editUserPoints(req, id) {
    const user = await crud.getID("user", id);

    user.points += req.body.points;

    return await crud.save("user", id, user);
}

async function editUserLevel(req, id) {
    const user = await crud.getID("user", id);

    user.level += req.body.level;

    return await crud.save("user", id, user);
}

async function getUserLevel(req, userID) {
    const user = await crud.getID("user", userID);
    return user.level;
}

async function deleteUser(id) {
    return await crud.remove("user", id);
}

async function auth(req, res) {
    const users = await crud.get("user");
    const email = req.body.email;

    const user = users.find(u => u.email === email);

    if (!user) {
        return { status: "404", error: "001", message: "Email ou senha errados" };
    }

    if (bcrypt.compareSync(password, user.password)) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    } else {
        return { status: "404", error: "002", message: "Email ou senha errados" };
    }
}



module.exports = {
    getUser,
    getUserID,
    saveUser,
    editUser,
    editUserPoints,
    editUserLevel,
    getUserLevel,
    deleteUser,
    auth
}