import axios from 'axios'

function createCube(msg, color) {
    axios.post("/api/cubes", {msg: msg, color: color})
}

async function getCubes() {
    return (await axios.get("/api/cubes")).data
}

async function getCube(id) {
    return (await axios.get(`/api/cubes/${id}`)).data
}

function editCube(id, msg, color) {
    axios.put(`/api/cubes/${id}`, {msg: msg, color: color})
}

function deleteCube(id) {
    axios.delete(`/api/cubes/${id}`)
}

function deleteAllCubes() {
    axios.delete("/api/cubes")
}

export { createCube, getCubes, getCube, editCube, deleteCube, deleteAllCubes }