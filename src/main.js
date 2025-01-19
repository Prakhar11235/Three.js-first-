import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const highIntensityLight=new THREE.DirectionalLight(0xffffff,2);
highIntensityLight.position.set(10,20,15);
scene.add(highIntensityLight);

const DirectionalLight=new THREE.DirectionalLight(0xffffff,1);
DirectionalLight.position.set(5,10,7.5);
scene.add(DirectionalLight);

const ambientLight=new THREE.AmbientLight(0xffffff,0.5);
scene.add(ambientLight);

const pointLight=new THREE.PointLight(0xffffff,10);
pointLight.position.set(0,5,0);
scene.add(pointLight);
const highIntensityLightHelper = new THREE.DirectionalLightHelper(highIntensityLight, 1);
scene.add(highIntensityLightHelper);

const DirectionalLightHelper = new THREE.DirectionalLightHelper(DirectionalLight, 1);
scene.add(DirectionalLightHelper);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5);
scene.add(pointLightHelper);


let loader= new THREE.TextureLoader();
let color=loader.load("./textures/color.jpg");
let roughness=loader.load("./textures/roughness.jpg");
let normals=loader.load("./textures/normal.png");
let height=loader.load("./textures/height.jpg");

const geometry = new THREE.BoxGeometry( 3,2,2 );
const material = new THREE.MeshStandardMaterial( {map : color,roughnessMap:roughness,normalMap:normals} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas,antialias:true });
renderer.setSize( window.innerWidth, window.innerHeight );
window.addEventListener('resize', () => {
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const gui = new GUI();

// Material folder
const materialFolder = gui.addFolder('Material');
materialFolder.add(material, 'roughness', 0, 1, 0.01);
materialFolder.add(material, 'metalness', 0, 1, 0.01);
materialFolder.add(material, 'wireframe');
materialFolder.add(material.normalScale, 'x', 0, 2, 0.01).name('normalScale X');
materialFolder.add(material.normalScale, 'y', 0, 2, 0.01).name('normalScale Y');

// Mesh folder
const meshFolder = gui.addFolder('Mesh');
meshFolder.add(cube.rotation, 'x', 0, Math.PI * 2, 0.01).name('rotate X');
meshFolder.add(cube.rotation, 'y', 0, Math.PI * 2, 0.01).name('rotate Y');
meshFolder.add(cube.rotation, 'z', 0, Math.PI * 2, 0.01).name('rotate Z');
meshFolder.add(cube.position, 'x', -5, 5, 0.1).name('position X');
meshFolder.add(cube.position, 'y', -5, 5, 0.1).name('position Y');
meshFolder.add(cube.position, 'z', -5, 5, 0.1).name('position Z');
meshFolder.add(cube.scale, 'x', 0.1, 3, 0.1).name('scale X');
meshFolder.add(cube.scale, 'y', 0.1, 3, 0.1).name('scale Y');
meshFolder.add(cube.scale, 'z', 0.1, 3, 0.1).name('scale Z');

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;

function animate() {
  window.requestAnimationFrame(animate);
	renderer.render( scene, camera );
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  controls.update();
}

animate();