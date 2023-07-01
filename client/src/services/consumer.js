import axios from 'axios'
import { ref } from 'vue'

let cubes

try {
    (async () => {
        cubes = ref(await getCubes())
    })()
} catch(e) {
    console.log(e)
}

async function createCube(msg, color) {
    await axios.post("/api/cubes", {msg: msg, color: color})
}

async function getCubes() {
    return (await axios.get("/api/cubes")).data
}

async function getCube(id) {
    return (await axios.get(`/api/cubes/${id}`)).data
}

async function editCube(id, msg, color) {
    await axios.put(`/api/cubes/${id}`, {msg: msg, color: color})
}

async function deleteCube(id) {
    await axios.delete(`/api/cubes/${id}`)
}

async function deleteAllCubes() {
    await axios.delete("/api/cubes")
}

export { createCube, getCubes, getCube, editCube, deleteCube, deleteAllCubes, cubes }