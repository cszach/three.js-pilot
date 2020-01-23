// GLOBALS

let scene, camera, renderer, controls;

// Scene, camera & renderer settings

let background = new THREE.Color( 0xdddddd );
let canvas = document.querySelector( '#app' );
let antialias = true;
let fov = 75, aspect = canvas.clientWidth / canvas.clientHeight, near = 0.1, far = 1000;

if ( THREE.WEBGL.isWebGL2Available() ) {

	init();
	render();

} else {

	document.body.appendChild( THREE.WEBGL.getWebGL2ErrorMessage() );

}

function init() {

	// SCENE, CAMERA, RENDERER, CONTROLS

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	renderer = new THREE.WebGLRenderer( {
		canvas,
		antialias
	} );
	controls = new THREE.OrbitControls( camera, renderer.domElement );

	scene.background = background;
	camera.position.set( 0, 3, 10 );
	renderer.setSize( canvas.clientWidth, canvas.clientHeight );
	renderer.setPixelRatio( window.devicePixelRatio );
	controls.enableDamping = true;

	// Kick-start the scene

	kickstart( scene );

}

function render() {

	requestAnimationFrame( render );

	if ( canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight ) {

		onCanvasResize();

	}
	controls.update();

	renderer.render( scene, camera );

}

function onCanvasResize() {

	renderer.setSize( canvas.clientWidth, canvas.clientHeight );
	camera.aspect = canvas.clientWidth / canvas.clientHeight;
	camera.updateProjectionMatrix();

}
