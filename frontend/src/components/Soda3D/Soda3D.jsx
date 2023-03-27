import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

function Soda3D(props) {
    
  // Instantiate a loader
  const loader = new GLTFLoader();

  // Optional: Provide a DRACOLoader instance to decode compressed mesh data
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
  loader.setDRACOLoader( dracoLoader );
  const scene = new THREE.Scene();
  // Load a glTF resource
  loader.load(
      // resource URL
      '../../../assets/Cola.gltf',
      // called when the resource is loaded
      function ( gltf ) {

          scene.add( gltf.scene );

          gltf.animations(); // Array<THREE.AnimationClip>
          gltf.scene(); // THREE.Group
          gltf.scenes(); // Array<THREE.Group>
          gltf.cameras(); // Array<THREE.Camera>
          gltf.asset(); // Object

      },
      // called while loading is progressing
      function ( xhr ) {

          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

      },
      // called when loading has errors
      function ( error ) {

          console.log( 'An error happened' );

      }
  );
  return(null)
}

export default Soda3D;