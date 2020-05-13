import * as THREE from 'three';
import CameraControls from "camera-controls";
import GLTFLoader from "three-gltf-loader";

CameraControls.install({
    THREE: THREE
});

class ThreeHelper {
    constructor(objPath, elem) {
        this.obj = objPath;
        this.elem = elem;
        this.start();
    }

    start() {
        this.THREE = THREE;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffffff);
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        const clock = new THREE.Clock();
        const cameraControls = new CameraControls(camera, renderer.domElement);
        cameraControls.maxPolarAngle = 3.14 / 2 - 0.2;

        renderer.setSize(window.innerWidth, window.innerHeight - 55);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        this.elem.appendChild(renderer.domElement);

        // var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
        // directionalLight.castShadow = true;
        // directionalLight.shadow.mapSize.width = 512; // default
        // directionalLight.shadow.mapSize.height = 512; // default
        // directionalLight.shadow.camera.near = 50; // default
        // directionalLight.shadow.camera.far = 1000; // default

        // directionalLight.position.x = -60
        // directionalLight.position.y = 50
        // var lightHolder_R = new THREE.Group();
        // lightHolder_R.add(directionalLight);
        // this.scene.add(lightHolder_R);

        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-200, 250, 0);
        spotLight.intensity = 0.55

        spotLight.castShadow = true;

        spotLight.shadow.mapSize.width = 2048;
        spotLight.shadow.mapSize.height = 2048;

        spotLight.shadow.camera.near = 50;
        spotLight.shadow.camera.far = 400;
        spotLight.shadow.camera.fov = 1000;
        spotLight.shadow.radius = 24;
        this.scene.add(spotLight);


        // var shadowHelper = new THREE.CameraHelper(spotLight.shadow.camera);
        // this.scene.add(shadowHelper);

        var light = new THREE.AmbientLight(0xffffff, 0.8);
        this.scene.add(light);

        var dollyCurrent = 150
        var rotateUno = -0.5
        var rotateDos = 0

        var edificio = null

        window.addEventListener('scroll', function (e) {
            var primer_marcador_prev = document.getElementById("primer_marcador").offsetTop - (document.getElementById("primer_marcador").offsetHeight / 2);
            var separar = document.getElementById("separar").offsetTop;
            var mainScroll = window.pageYOffset;


            if (mainScroll < primer_marcador_prev) {
                cameraControls.rotateTo(rotateUno, rotateDos, true);
                cameraControls.dollyTo(dollyCurrent, true);
            } else if (mainScroll > primer_marcador_prev) {
                var dif = mainScroll - primer_marcador_prev
                var rotateUnoTemp = rotateUno + (dif / 500)
                var rotateDosTemp = rotateDos + (dif / 500)
                var dollyTemp = dollyCurrent - (dif / 30)
                if (rotateDosTemp > 1.1) rotateDosTemp = 1.1
                if (dollyTemp < 110) dollyTemp = 110
                // if(mainScroll > separar && rotateUnoTemp)
                if (rotateUnoTemp > 10) rotateUnoTemp = 10
                cameraControls.rotateTo(rotateUnoTemp, rotateDosTemp, false);
                cameraControls.dollyTo(dollyTemp, false);
            }
            var z_pos_duelo = -2688.234619140625
            var z_pos_6 = -2643.384033203125
            var z_pos_5 = -2359.5458984375
            var z_pos_4 = -1903.158935546875
            var z_pos_3 = -1446.57177734375
            var z_pos_2 = -928.6094970703125

            var new_pos_duelo = z_pos_duelo
            var new_pos_6 = z_pos_6
            var new_pos_5 = z_pos_5
            var new_pos_4 = z_pos_4
            var new_pos_3 = z_pos_3
            var new_pos_2 = z_pos_2

            var anim_step = document.getElementById("primer_marcador").offsetHeight / 6

            if (mainScroll < separar) {
                if (edificio) {
                    edificio[6].position.y = z_pos_6
                    edificio[5].position.y = z_pos_5
                    edificio[4].position.y = z_pos_4
                    edificio[3].position.y = z_pos_3
                    edificio[2].position.y = z_pos_2
                    edificio[0].position.y = z_pos_duelo
                }
            } else {
                if (edificio) {


                    new_pos_6 = z_pos_6 - (mainScroll - separar) * 4
                    if (new_pos_6 < (z_pos_6 - 8000)) new_pos_6 = (z_pos_6 - 8000)
                    edificio[6].position.y = new_pos_6

                    if (mainScroll > separar + anim_step) {
                        new_pos_duelo = z_pos_duelo - (mainScroll - separar - anim_step) * 4
                        if (new_pos_duelo < (z_pos_duelo - 8000)) new_pos_duelo = z_pos_duelo - 8000
                        edificio[0].position.y = new_pos_duelo
                    }
                    if (mainScroll > separar + anim_step * 2) {
                        new_pos_5 = z_pos_5 - (mainScroll - separar - anim_step * 2) * 4
                        if (new_pos_5 < (z_pos_5 - 8000)) new_pos_5 = (z_pos_5 - 8000)
                        edificio[5].position.y = new_pos_5
                    }
                    if (mainScroll > separar + anim_step * 3) {
                        new_pos_4 = z_pos_4 - (mainScroll - separar - anim_step * 3) * 4
                        if (new_pos_4 < (z_pos_4 - 8000)) new_pos_4 = (z_pos_4 - 8000)
                        edificio[4].position.y = new_pos_4
                    }
                    if (mainScroll > separar + anim_step * 4) {
                        new_pos_3 = z_pos_3 - (mainScroll - separar - anim_step * 4) * 4
                        if (new_pos_3 < (z_pos_3 - 8000)) new_pos_3 = (z_pos_3 - 8000)
                        edificio[3].position.y = new_pos_3
                    }
                    if (mainScroll > separar + anim_step * 5) {
                        new_pos_2 = z_pos_2 - (mainScroll - separar - anim_step * 5) * 4
                        if (new_pos_2 < (z_pos_2 - 8000)) new_pos_2 = (z_pos_2 - 8000)
                        edificio[2].position.y = new_pos_2
                    }
                }
            }
        })

        const render = () => {
            const delta = clock.getDelta();
            const hasControlsUpdated = cameraControls.update(delta);
            requestAnimationFrame(render);

            renderer.render(this.scene, camera);

        }

        render();

        cameraControls.rotateTo(rotateUno, rotateDos, true);
        cameraControls.dollyTo(150, true);

        var s = this.scene;

        var loader = new GLTFLoader()
        loader.load(this.obj, obj => {
            obj.scene.children[2].traverse(function (child) {
                if (child.isMesh) {
                    // child.material = new THREE.MeshPhongMaterial({
                    //     color: 0xdcdcdc
                    // });
                    child.material.color = {
                        r: 0.75,
                        g: 0.75,
                        b: 0.75
                    }
                    child.castShadow = false;
                    child.receiveShadow = true;
                }

            });

            obj.scene.children[1].traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = false;
                }
            });
            obj.scene.children[0].traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
            edificio = obj.scene.children[0].children
            console.log(edificio)
            s.add(obj.scene)
        })
    }
}

export default ThreeHelper;