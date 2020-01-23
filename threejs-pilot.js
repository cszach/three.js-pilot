/**
 * three.js-pilot - Simple functions for diagnostic purposes or to kickstart a three.js app
 *
 * @author Nguyen Hoang Duong / you_create@protonmail.com
 */

/**
 * Add a mesh to a three.js scene
 *
 * Only the first parameter is required. Note that if you provide a geometry or
 * a material to compose the mesh from, this function does not clone the
 * geometry or the material, so provide clones if necessary.
 *
 * @param {object} scene The three.js scene to add the mesh to
 * @param {object} geo The geometry for the mesh (optional, default to a cube)
 * @param {object} mat The material for the mesh (optional, default to standard)
 * @return {object} The mesh
 */
function addCube( scene, geo, mat ) {

	let geometry = geo || new THREE.BoxBufferGeometry( 1, 1, 1 );
	let material = mat || new THREE.MeshStandardMaterial( {
		color: 0xaaaaaa
	} );

	let mesh = new THREE.Mesh( geometry, material );

	scene.add( mesh );

	return mesh;

}

/**
 * Add a plane to a three.js scene
 *
 * Only the first parameter is required.
 *
 * @param {object} scene The three.js scene to add the plane to
 * @param {object} geo The geometry for the plane (optional)
 * @param {object} mat The material for the plane (optional)
 * @return {object} The plane
 */
function addPlane( scene, geo, mat ) {

	let geometry = geo || new THREE.PlaneBufferGeometry( 10, 10, 10, 10 );
	let material = mat || new THREE.MeshBasicMaterial( {
		color: 0x000000,
		wireframe: true
	} );

	let plane = new THREE.Mesh( geometry, material );
	plane.rotation.x = - Math.PI / 2;

	scene.add( plane );

	return plane;

}

/**
 * Add a directional light to a three.js scene
 *
 * Only the first parameter is required.
 *
 * @param {object} scene The three.js scene to add the light to
 * @param {object} position An object that has the properties x, y, and z
 * @param {number} color Hexadecimal color of the light
 * @param {number} intensity Numeric value of the light's intensity
 * @param {boolean} helper Add a directional light helper too? (default to true)
 * @return {object} An object that contains the light and its helper
 */
function addDirectionalLight( scene, position, color, intensity, helper = true ) {

	position = position || { x: 5, y: 10, z: 7.5 }
	color = color || 0xffffff;
	intensity = intensity || 1;

	let light = new THREE.DirectionalLight( color, intensity );

	light.position.x = position.x;
	light.position.y = position.y;
	light.position.z = position.z;

	helper = helper ? new THREE.DirectionalLightHelper( light ) : null;

	scene.add( light, helper );

	return { light, helper }

}

/**
 * Add a point light to a three.js scene
 *
 * Only the first parameter is required.
 *
 * @param {object} scene The three.js scene to add the light to
 * @param {object} position An object that has the properties x, y, and z
 * @param {number} color Hexadecimal color of the light
 * @param {number} intensity Numeric value of the light's intensity
 * @param {number} distance Maximum range of the light
 * @param {number} decay The amount the light dims along the distance of the light
 * @param {boolean} helper Add a point light helper too? (default to true)
 * @return {object} An object that contains the light and its helper
 */
function addPointLight( scene, position, color, intensity, distance, decay, helper = true ) {

	position = position || { x: 5, y: 10, z: 7.5 }
	color = color || 0xffffff;
	intensity = intensity || 1;
	distance = distance || 0;
	decay = decay || 1;

	let light = new THREE.PointLight( color, intensity, distance, decay );

	light.position.x = position.x;
	light.position.y = position.y;
	light.position.z = position.z;

	helper = helper ? new THREE.PointLightHelper( light ) : null;

	scene.add( light, helper );

	return { light, helper }

}

/**
 * Add an AxesHelper to a three.js scene
 *
 * Only the first parameter is required.
 *
 * @param {object} scene The three.js scene to add the helper to
 * @param {object} size The size of the lines representing the axes
 * @return {object} The helper
 */
function addAxesHelper( scene, size = 1 ) {

	let helper = new THREE.AxesHelper( size );

	scene.add( helper );

	return helper;

}

/**
 * addPlane + addCube + addDirectionalLight + addAxesHelper (defaults)
 *
 * @param {object} scene The three.js scene to add objects to
 */
function kickstart( scene ) {

	addPlane( scene );
	addCube( scene );
	addDirectionalLight( scene );
	addAxesHelper( scene );

}
