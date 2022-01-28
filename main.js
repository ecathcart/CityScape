import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(10);

// Texture Loading

const texture1 = new THREE.TextureLoader().load('/assets/asianTowerBlocks/TexturesCom_BuildingsHighRise0634_5_seamless_S.jpg');
const texture2 = new THREE.TextureLoader().load('/assets/asianTowerBlocks/TexturesCom_HighRiseTowerblocks0005_1_seamless_S.jpg');
const texture3 = new THREE.TextureLoader().load('/assets/asianTowerBlocks/TexturesCom_HighRiseTowerblocks0022_1_S.jpg');
const texture4 = new THREE.TextureLoader().load('/assets/asianTowerBlocks/TexturesCom_HighRiseTowerblocks0113_11_seamless_S.jpg');
const texture5 = new THREE.TextureLoader().load('/assets/glass/TexturesCom_HighRiseGlass0002_1_seamless_S.jpg');
const texture6 = new THREE.TextureLoader().load('/assets/glass/TexturesCom_HighRiseGlass0059_2_S.jpg');
const texture7 = new THREE.TextureLoader().load('/assets/night/TexturesCom_HighRiseNight0007_1_seamless_S.jpg');
const texture8 = new THREE.TextureLoader().load('/assets/night/TexturesCom_HighRiseNight0023_1_seamless_S.jpg');
const texture9 = new THREE.TextureLoader().load('/assets/night/TexturesCom_HighRiseNight0048_2_S.jpg');
const texture10 = new THREE.TextureLoader().load('/assets/office/TexturesCom_BuildingsHighRise0353_S.jpg');
const texture11 = new THREE.TextureLoader().load('/assets/office/TexturesCom_BuildingsHighRise0438_S.jpg');
const textures = [texture1, texture2, texture3, texture4, texture5, texture6, texture7, texture8, texture9, texture10, texture11];

const backgroundTexture = new THREE.TextureLoader().load('/assets/background.jpg')
scene.background = backgroundTexture;
// Objects



function addBuilding(x, y, z) {
  const geometry = new THREE.BoxGeometry(2, 10, 3);
  const number = Math.floor(Math.random() * textures.length);
  const material = new THREE.MeshStandardMaterial({ map: textures[number] })
  const building = new THREE.Mesh(geometry, material);

  building.position.set(x, y + 5, z);
  scene.add(building);
}

addBuilding(3, 0, -3);
addBuilding(-3, 0, 3);
addBuilding(-3, 0, -3);
addBuilding(3, 0, 3);




// Lighting

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(3, 3, 3);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);

scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  // pointLight.position.z -= 0.1;
  // camera.position.z -= 0.1;

  controls.update()

  renderer.render(scene, camera);
}

animate();

