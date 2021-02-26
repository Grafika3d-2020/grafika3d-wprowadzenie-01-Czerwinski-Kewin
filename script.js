console.log(THREE)

const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", renderer);

const LineMaterial = new THREE.LineBasicMaterial( { color: 0x80ffff } );
const points = [];
points.push( new THREE.Vector3( -10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 0, -10, 0 ) );

// for (let i=1; i<5; i++)
// {
//     points.push( new THREE.Vector3( 5*i, -10, 0 ) );
// }

const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( lineGeometry, LineMaterial );
scene.add( line );
//renderer.render( scene, camera );

const light1 = new THREE.PointLight({color: 0x0fff00})
scene.add( light1 );
light1.position.x = 50;
light1.position.y = -20;
light1.position.z = 10;

const light2 = new THREE.PointLight({color: 0x0fff00})
scene.add( light2 );
light1.position.set(-50,50,20);

//FOG
const near = 80;
const far = 150;
const color = 'lightblue';
scene.fog = new THREE.Fog(color, near, far);
scene.background = new THREE.Color(color);

const colorWhite = new THREE.Color('hsl(106, 100%, 90%)')

const width = 20;
const height = 20;
const depth = 20;

//kostka
const cubeGeometry = new THREE.BoxGeometry( width, height, depth );
const cubeMaterial = new THREE.MeshPhongMaterial({
    color: colorWhite,
    shininess: 80
})

const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );

cube.rotation.z = 0;
cube.rotation.x = 10;

cube.position.x = 20;
cube.position.y = 0;
cube.position.z = 0;
//renderer.render( scene, camera );

const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x += .04
    cube.rotation.y += .04
    cube.rotation.z += .04
    renderer.render( scene, camera );
}

//stozek
const coneGeometry = new THREE.ConeGeometry( 5, 20, 32 );
const coneMaterial = new THREE.MeshPhongMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh( coneGeometry, coneMaterial );
scene.add( cone );

cone.position.x = -20;
cone.position.y = 0;
cone.position.z = 0;

//cylinder
const cylinderGeometry = new THREE.CylinderGeometry( 5, 5, 20, 20 );
const cylinderMaterial = new THREE.MeshPhongMaterial( {color: 0xff0000} );      //basic - bez krawedzi
const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
scene.add( cylinder );

cylinder.position.x = 0;
cylinder.position.y = 0;
cylinder.position.z = 0;

animate()





