<template>
	<div id="container"></div>
</template>
<script>

	//import * as THREE from 'three';

	//window.THREE=THREE
	// import THREE from "three/three.min.js";
	import CanvasRenderer from "three/examples/js/renderers/CanvasRenderer.js";
	import Projector from "three/examples/js/renderers/Projector.js";
	// import nx from './assets/nx.jpg'
	// import ny from './assets/ny.jpg'
	// import nz from './assets/nz.jpg'
	// import px from './assets/px.jpg'
	// import py from './assets/py.jpg'
	// import pz from './assets/pz.jpg'
	
	// target = new THREE.Vector3();
	export default {
	 	mounted(){
	 		var camera, scene, renderer;
			var texture_placeholder,
			isUserInteracting = false,
			onMouseDownMouseX = 0, onMouseDownMouseY = 0,
			lon = 90, onMouseDownLon = 0,
			lat = 0, onMouseDownLat = 0,
			phi = 0, theta = 0;
			

	 		
			const init= () => {
				var container, mesh;
				container = document.getElementById( 'container' );
				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / (window.innerHeight-65), 1, 1100 );
				scene = new THREE.Scene();
				texture_placeholder = document.createElement( 'canvas' );
				texture_placeholder.width = 128;
				texture_placeholder.height = 128;
				var context = texture_placeholder.getContext( '2d' );
				context.fillStyle = 'rgb( 200, 200, 200 )';
				context.fillRect( 0, 0, texture_placeholder.width, texture_placeholder.height );
				var materials = [
					loadTexture("https://img.whyengineer.com/pano/sky/px.jpg"), // right
					loadTexture("https://img.whyengineer.com/pano/sky/nx.jpg"), // left
					loadTexture("https://img.whyengineer.com/pano/sky/py.jpg"), // top
					loadTexture("https://img.whyengineer.com/pano/sky/ny.jpg"), // bottom
					loadTexture("https://img.whyengineer.com/pano/sky/pz.jpg"), // back
					loadTexture("https://img.whyengineer.com/pano/sky/nz.jpg")  // front
				];
				mesh = new THREE.Mesh( new THREE.BoxGeometry( 300, 300, 300, 7, 7, 7 ), materials );
				mesh.scale.x = - 1;
				scene.add( mesh );
				renderer = new THREE.CanvasRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight-65 );
				container.appendChild( renderer.domElement );
				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'mouseup', onDocumentMouseUp, false );
				document.addEventListener( 'wheel', onDocumentMouseWheel, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );
				//
				window.addEventListener( 'resize', onWindowResize, false );
			};
			const onWindowResize= () =>{
				camera.aspect = window.innerWidth / (window.innerHeight-65 );
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight-65 );
			};
			const loadTexture=( path )=> {
				var texture = new THREE.Texture( texture_placeholder );
				var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
				var image = new Image();
				image.onload = function () {
					texture.image = this;
					texture.needsUpdate = true;
				};
				image.src = path;
				return material;
			};
			const onDocumentMouseDown=( event )=> {
				console.log("down",this.onPointerDownPointerX)
				event.preventDefault();
				isUserInteracting = true;
				this.onPointerDownPointerX = event.clientX;
				this.onPointerDownPointerY = event.clientY;
				this.onPointerDownLon = lon;
				this.onPointerDownLat = lat;
			};
			const onDocumentMouseMove=( event )=> {
				if ( isUserInteracting === true ) {
					lon = ( this.onPointerDownPointerX - event.clientX ) * 0.1 + this.onPointerDownLon;
					lat = ( event.clientY - this.onPointerDownPointerY ) * 0.1 + this.onPointerDownLat;
				}
			};
			const onDocumentMouseUp=( event )=> {
				isUserInteracting = false;
			}
			const onDocumentMouseWheel=( event )=> {
				event.preventDefault();
				var fov = camera.fov + event.deltaY * 0.05;
				camera.fov = THREE.Math.clamp( fov, 10, 75 );
				camera.updateProjectionMatrix();
			}
			const onDocumentTouchStart=( event )=> {
				if ( event.touches.length == 1 ) {
					event.preventDefault();
					this.onPointerDownPointerX = event.touches[ 0 ].pageX;
					this.onPointerDownPointerY = event.touches[ 0 ].pageY;
					this.onPointerDownLon = lon;
					this.onPointerDownLat = lat;
				}
			}
			const onDocumentTouchMove=( event )=> {
				if ( event.touches.length == 1 ) {
					event.preventDefault();
					lon = ( this.onPointerDownPointerX - event.touches[0].pageX ) * 0.1 + this.onPointerDownLon;
					lat = ( event.touches[0].pageY - this.onPointerDownPointerY ) * 0.1 + this.onPointerDownLat;
				}
			}
			const animate=()=> {
				requestAnimationFrame( animate );
				update();
			}
			const update=()=> {

				if ( isUserInteracting === false ) {
					lon += 0.05;
				}
				lat = Math.max( - 85, Math.min( 85, lat ) );
				phi = THREE.Math.degToRad( 90 - lat );
				theta = THREE.Math.degToRad( lon );
				this.target.x = 500 * Math.sin( phi ) * Math.cos( theta );
				this.target.y = 500 * Math.cos( phi );
				this.target.z = 500 * Math.sin( phi ) * Math.sin( theta );
				camera.lookAt( this.target );
				renderer.render( scene, camera );
			}
			init();
			animate();
	 	},
	 	data(){
		    return{
		    	target:new THREE.Vector3(),
		    	onPointerDownPointerX:0,
		    	onPointerDownPointerY:0,
		    	onPointerDownLon:0,
		    }
		}
	 }
</script>
<style>
    #container{
    	position: relative;
        overflow: hidden;
        z-index: -1;
        top: 0;
        left: 0;
        margin: 0;
        border: 0;
    }
</style>