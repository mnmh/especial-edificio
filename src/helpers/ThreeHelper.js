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
            preserveDrawingBuffer: true,
            logarithmicDepthBuffer: true
        });
        const clock = new THREE.Clock();
        const cameraControls = new CameraControls(camera, renderer.domElement);
        cameraControls.maxPolarAngle = 3.14 / 2 - 0.2;

        renderer.setSize(window.innerWidth, window.innerHeight - 55);
        this.elem.appendChild(renderer.domElement);

        var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
        directionalLight.castShadow = true;
        directionalLight.position.x = -10;
        this.scene.add(directionalLight);

        var directionalLight_2 = new THREE.DirectionalLight(0xffffff, 0.4);
        directionalLight_2.castShadow = true;
        directionalLight_2.position.z = 10;
        this.scene.add(directionalLight_2);

        var directionalLight_3 = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight_3.castShadow = true;
        directionalLight_3.position.z = -10;
        this.scene.add(directionalLight_3);

        var light = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(light);

        var dollyCurrent = 150
        var rotateUno = 0
        var rotateDos = 0

        window.addEventListener('scroll', function (e) {
            var primer_marcador_prev = document.getElementById("primer_marcador").offsetTop - (document.getElementById("primer_marcador").offsetHeight / 2);
            var primer_marcador = document.getElementById("primer_marcador").offsetTop;
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
                cameraControls.rotateTo(rotateUnoTemp, rotateDosTemp, false);
                cameraControls.dollyTo(dollyTemp, false);
            }
        })

        const render = () => {
            const delta = clock.getDelta();
            const hasControlsUpdated = cameraControls.update(delta);
            requestAnimationFrame(render);

            renderer.render(this.scene, camera);
        }

        render();

        cameraControls.rotateTo(0, 0, true);
        cameraControls.dollyTo(150, true);

        var s = this.scene;

        var loader = new GLTFLoader()
        loader.load(this.obj, obj => {
            s.add(obj.scene)
        })
    }
}

export default ThreeHelper;