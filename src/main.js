import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Get canvas
const canvas = document.querySelector('.draw');

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,0,5);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Load HDRI environment map
new RGBELoader()
    
    .load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/rustig_koppie_puresky_1k.hdr', function(texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        
        scene.environment = texture;
    });

const loader=new GLTFLoader();
loader.load('./wooden_box.glb',function(gltf){
  gltf.scene.position.y=-1;
    scene.add(gltf.scene);
});

// Add a test mesh


// Position camera
camera.position.z = 5;

// Handle window resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    gltf.scene.rotation.y += 0.1;
    controls.update();

}

animate();
