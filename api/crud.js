const { initializeApp } = require("firebase/app");

const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    deleteDoc
} = require('firebase/firestore/lite');



const firebaseConfig = {
    apiKey: "AIzaSyAQO42zg3YUfpSOwCiA-stMYJ46G5n4eyM",
    authDomain: "catolicasc-cc848.firebaseapp.com",
    projectId: "catolicasc-cc848",
    storageBucket: "catolicasc-cc848.appspot.com",
    messagingSenderId: "945896244054",
    appId: "1:945896244054:web:64199f53bb342550d48cf7",
    measurementId: "G-EDBH34VZCG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


async function save(table, id, data, body) {

    if (id) {
        const savedData = {
            ...data,
            id: id,
        }
        return savedData;
    } else {
        const referencesEntity = await addDoc(collection(db, table), { ...data });

        const savedData = {
            ...data,
            id: referencesEntity.id,
        }
        return savedData;
    }
}

async function get(table) {

    const tableRef = collection(db, table);

    const q = query(tableRef);
    const querySnapshot = await getDocs(q);
    const list = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        list.push(data);
    });
    return list;
}

async function getID(table, id) {

    const docRef = doc(db, table, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Error("Não funcionou!");
    }
}

async function remove(table, id) {
    const dado = await deleteDoc(doc(db, table, id));
    return {
        message: `${id} deletado`
    }
}

module.exports = {
    save,
    get,
    getID,
    remove
}