var THREEx = THREEx || {};

/**
 * Update renderer and camera when the window is resized
 *
 * @param {Object} renderer the renderer to update
 * @param {Object} Camera the camera to update
 */
THREEx.WindowResize = function(renderer, camera) {
	var callback = function() {
			// notify the renderer of the size change
			renderer.setSize(window.innerWidth, window.innerHeight);
			// update the camera
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		}
		// bind the resize event
	window.addEventListener('resize', callback, false);
	// return .stop() the function to stop watching window resize
	return {
		/**
		 * Stop watching window resize
		 */
		stop: function() {
			window.removeEventListener('resize', callback);
		}
	};
}

function deg2rad(n) {
	return n * (Math.PI / 180);
}

app.directive('background', function() {
	return {
		restrict: "E",
		scope: {

		},
		link: function(scope, elem, attr) {

			var scene = new THREE.Scene();
			renderer = new THREE.WebGLRenderer({
				antialias: true
			});
			$(elem).append(renderer.domElement);

			WIDTH = $(window).width();
			HEIGHT = $(window).height()
			renderer.setSize(WIDTH, HEIGHT);
			renderer.setClearColor(0xffffff, 1);
			camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 2022000);
			camera.position.set(00, -80, -100);
			camera.lookAt(new THREE.Vector3(0, 0, 0));
			THREEx.WindowResize(renderer, camera);
			scene.add(camera);

			renderer.setSize(WIDTH, HEIGHT);
			camera.aspect = WIDTH / HEIGHT;
			camera.updateProjectionMatrix();

			// Create a light, set its position, and add it to the scene.
			var light = new THREE.PointLight(0xffffff);
			light.position.set(200, 100, -300);
			scene.add(light);
			scene.fog = new THREE.FogExp2(0xffffff, 0.005);
			var boxMaterial =
				new THREE.MeshBasicMaterial({
					color: 0x999999,
					wireframe: true,
				});

			var geometry = new THREE.PlaneGeometry(1000, 1000, 200, 200);
			var box = new THREE.Mesh(geometry,
				boxMaterial);
			// add the box to the scene
			//scene.add(box);
			scene.add(box);

			var i = 0;
			_.each(box.geometry.vertices, function(v, index) {
				if (v.x > 100) {
					var s = Math.pow(Math.floor(v.x / 60), 1.4);
					v.z -= (s * 2);
					if (Math.random() > 0.8) {
						v.z -= Math.random() * 4;
					} else {
						v.z -= Math.random() * 2;
					}
				}
				if (Math.random() > 0.8) {
					v.z -= Math.random() * 3;
				} else {
					v.z -= Math.random() * 1;
				}
			});
			box.geometry.verticesNeedUpdate = true;
			box.rotation.set(0, 0, deg2rad(90));

			var rotationTarget = {
				x: deg2rad(270),
				y: deg2rad(180),
				z: 0,
			};


			var cameraTarget = {
				x: 0,
				y: 30,
				z: -10
			};

			var render = function() {
				requestAnimationFrame(render);
				renderer.render(scene, camera);

				box.position.set(0, 0, 0);
				var radius = 100;
				var origin = 0;

				_.each(box.geometry.vertices, function(v, index) {
					if (Math.random() > 0.95) {
						//v.z -= ((Math.random() * 2) - 1) * 0.05;
					}
				});
				box.geometry.verticesNeedUpdate = true;

				camera.rotation.x += (rotationTarget.x - camera.rotation.x) * 0.101;
				camera.rotation.y += (rotationTarget.y - camera.rotation.y) * 0.101;
				camera.rotation.z += (rotationTarget.z - camera.rotation.z) * 0.101;


				camera.position.x += (cameraTarget.x - camera.position.x) * 0.05;
				camera.position.y += (cameraTarget.y - camera.position.y) * 0.001;
				camera.position.z += (cameraTarget.z - camera.position.z) * 0.01;

				//camera.lookAt(new THREE.Vector3(0, 0, 0));
				//console.log(grid.geometry.attributes.position)

			}
			render();

			scope.$on('$routeChangeSuccess', function(event, route) {
				var path = route.$$route.originalPath;
				path = path.replace("/", ""); //Replace first /
				if (path.indexOf("/") !== -1) {
					path = path.substring(0, path.indexOf("/"));
				}

				var positions = {
					'about': 200,
					'resume': 100,
					'portfolio': 0,
				};
				var x = positions[path];
				cameraTarget.x = x;
			});
		}
	}
});