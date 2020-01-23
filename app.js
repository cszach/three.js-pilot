let scene, camera, renderer, controls;
const canvas = document.querySelector( '#app' );

if ( THREE.WEBGL.isWebGL2Available() ) {

	init();
	render();

} else {

	document.body.appendChild( THREE.WEBGL.getWebGL2ErrorMessage() );

}

function init() {

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000 );
	renderer = new THREE.WebGLRenderer( {
		canvas,
		antialias: true
	} );
	controls = new THREE.OrbitControls( camera, renderer.domElement );

	scene.background = new THREE.Color( 0xdddddd );
	camera.position.set( 0, 3, 10 );
	renderer.setSize( canvas.clientWidth, canvas.clientHeight );
	renderer.setPixelRatio( window.devicePixelRatio );
	controls.enableDamping = true;

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
