import axios from 'axios'
import { ref } from 'vue'

const data = {
    cubes: ref({}),
    cube: ref({})
}

function getData() {return {
    cubes: data.cubes.value,
    cube: data.cube.value
}}

function setCube(cube) {
    data.cube.value = cube
}

function setCubes(cubes) {
    data.cubes.value = cubes
}

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

export { createCube, getCubes, getCube, editCube, deleteCube, deleteAllCubes, getData, setCube, setCubes }