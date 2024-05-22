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
        return { status: "404", error: "002", message: "Alguém já usa esse email!" }
    }

    const user = {
        name: req.body.name,
        poins: 0,
    }

    return await crud.save("user", 0, user);
}

async function editUser(req, id) {
    return await crud.save("user", id, req.body);
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
    deleteUser,
    auth
}