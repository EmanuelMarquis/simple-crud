<script setup lang="ts">
import * as THREE from 'three'
import { onMounted, ref } from 'vue';

function remToPx(rem) {
    return rem * parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size'))
}

const props = defineProps(['color', 'msg'])

const canvas = ref<HTMLCanvasElement | null>(null) // reference to canvas html element
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial({ color: props.color })
)

camera.position.z = 5

scene.add(cube)
scene.add(camera)

onMounted(()=> {
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas.value as unknown as HTMLCanvasElement,
        alpha: true
    })
    renderer.setSize(remToPx(7), remToPx(7))
    
    function animate() {
        requestAnimationFrame(animate)

        cube.rotation.x += 0.01
        cube.rotation.y -= 0.01

        renderer.render(scene, camera)
    }
    animate()
})

</script>

<template>
    <canvas :title="props.msg" ref="canvas" />
</template>