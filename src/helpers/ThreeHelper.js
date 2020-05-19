import * as THREE from 'three';
import CameraControls from "camera-controls";
import GLTFLoader from "three-gltf-loader";

CameraControls.install({
    THREE: THREE
});

class ThreeHelper {
    constructor(marcadorPath, objPath, elem) {
        this.obj = objPath;
        this.marcador = marcadorPath;
        this.elem = elem;
        this.rotation = 0;
        this.activateRot = false;
        this.start();
    }

    start() {
        this.THREE = THREE;
        var width = window.innerWidth
        if (width < 1000) width = 1000
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffffff);
        const camera = new THREE.PerspectiveCamera(
            75,
            width / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        const clock = new THREE.Clock();
        const cameraControls = new CameraControls(camera, renderer.domElement);
        cameraControls.maxPolarAngle = 3.14 / 2 - 0.2;

        renderer.setSize(width, window.innerHeight - 55);
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
        spotLight.position.set(-200, 250, -100);
        spotLight.intensity = 0.65

        spotLight.castShadow = true;

        spotLight.shadow.mapSize.width = 512;
        spotLight.shadow.mapSize.height = 512;

        spotLight.shadow.camera.near = 50;
        spotLight.shadow.camera.far = 500;
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
        var objeto = null
        var elem = this
        var marcadores = []

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

        window.addEventListener('scroll', function (e) {
            var primer_marcador_prev = document.getElementById("primer_marcador").offsetTop - (document.getElementById("primer_marcador").offsetHeight / 2);
            var mainScroll = window.pageYOffset;

            var anim_step = document.getElementById("primer_marcador").offsetHeight / 6
            var separar = document.getElementById("separar").offsetTop;
            var juntar_piso2 = document.getElementById("piso_dos_juntar").offsetTop;
            var juntar_piso3 = document.getElementById("piso_tres_juntar").offsetTop;
            var juntar_piso4 = document.getElementById("piso_cuatro_juntar").offsetTop;
            var juntar_piso5 = document.getElementById("piso_cinco_juntar").offsetTop;

            var piso_dos_archivo = document.getElementById("piso_dos_archivo").offsetTop;
            var piso_dos_pedagogia = document.getElementById("piso_dos_pedagogia").offsetTop;
            var piso_dos_encuentro = document.getElementById("piso_dos_encuentro").offsetTop;
            var piso_dos_consulta = document.getElementById("piso_dos_consulta").offsetTop;
            var piso_dos_creacion = document.getElementById("piso_dos_creacion").offsetTop;
            var piso_tres_creacion = document.getElementById("piso_tres_creacion").offsetTop;
            var piso_cuatro_creacion = document.getElementById("piso_cuatro_creacion").offsetTop;
            var piso_cinco_duelo = document.getElementById("piso_cinco_duelo").offsetTop;


            if (mainScroll < primer_marcador_prev) {
                cameraControls.rotateTo(rotateUno, rotateDos, true);
                cameraControls.dollyTo(dollyCurrent, true);
            } else if (mainScroll > primer_marcador_prev) {
                var dif = mainScroll - primer_marcador_prev
                var rotateUnoTemp = rotateUno + (dif / 500)
                var rotateDosTemp = rotateDos + (dif / 500)
                var dollyTemp = dollyCurrent - (dif / 30)
                // if (rotateDosTemp > 1.1) rotateDosTemp = 1.1
                if (dollyTemp < 110) dollyTemp = 110
                if (rotateDosTemp > 1.1) {
                    if (mainScroll < juntar_piso2) rotateDosTemp = 1.1
                    else if (mainScroll > juntar_piso2 && mainScroll < juntar_piso3) {
                        var dif_ = mainScroll - juntar_piso2
                        rotateDosTemp = 1.1 - (dif_ / 600)
                        // dollyTemp = 110 - (dif_ / 10)
                        if (rotateDosTemp < 0.5) rotateDosTemp = 0.5
                        // if (dollyTemp < 90) dollyTemp = 90
                    } else if (mainScroll > juntar_piso3) {
                        rotateDosTemp = 0.5
                    }
                }
                // if(mainScroll > separar && rotateUnoTemp)
                if (rotateUnoTemp > 10) rotateUnoTemp = 10
                cameraControls.rotateTo(rotateUnoTemp, rotateDosTemp, false);
                cameraControls.dollyTo(dollyTemp, false);
            }

            if (mainScroll > juntar_piso2) {
                elem.activateRot = true
            } else {
                elem.activateRot = false
            }

            if (mainScroll < separar) {
                if (edificio) {
                    edificio[6].position.y = z_pos_6
                    edificio[5].position.y = z_pos_5
                    edificio[4].position.y = z_pos_4
                    edificio[3].position.y = z_pos_3
                    edificio[2].position.y = z_pos_2
                    edificio[0].position.y = z_pos_duelo
                }
            } else if (mainScroll < juntar_piso2) {
                this.activateRot = false
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
            } else if (mainScroll > juntar_piso2 && mainScroll < juntar_piso3) {

                if (edificio) {
                    new_pos_2 = new_pos_2 + (mainScroll - juntar_piso2)
                    if (new_pos_2 > z_pos_2) new_pos_2 = z_pos_2
                    edificio[2].position.y = new_pos_2

                    edificio[3].position.y = z_pos_3 - 8000
                    new_pos_3 = z_pos_3 - 8000
                    edificio[4].position.y = z_pos_4 - 8000
                    new_pos_4 = z_pos_4 - 8000
                    edificio[5].position.y = z_pos_5 - 8000
                    new_pos_5 = z_pos_5 - 8000
                    edificio[6].position.y = z_pos_6 - 8000
                    new_pos_6 = z_pos_6 - 8000
                    edificio[0].position.y = z_pos_duelo - 8000
                    new_pos_duelo = z_pos_duelo - 8000
                }
            } else if (mainScroll > juntar_piso3 && mainScroll < juntar_piso4) {
                if (edificio) {
                    new_pos_3 = new_pos_3 + (mainScroll - juntar_piso3)
                    if (new_pos_3 > z_pos_3) new_pos_3 = z_pos_3
                    edificio[3].position.y = new_pos_3

                    edificio[2].position.y = z_pos_2
                    new_pos_2 = z_pos_2
                    // edificio[3].position.y = z_pos_3 - 8000
                    // new_pos_3 = z_pos_3 - 8000
                    edificio[4].position.y = z_pos_4 - 8000
                    new_pos_4 = z_pos_4 - 8000
                    edificio[5].position.y = z_pos_5 - 8000
                    new_pos_5 = z_pos_5 - 8000
                    edificio[6].position.y = z_pos_6 - 8000
                    new_pos_6 = z_pos_6 - 8000
                    edificio[0].position.y = z_pos_duelo - 8000
                    new_pos_duelo = z_pos_duelo - 8000
                }
            } else if (mainScroll > juntar_piso4 && mainScroll < juntar_piso5) {
                if (edificio) {
                    new_pos_4 = new_pos_4 + (mainScroll - juntar_piso4)
                    if (new_pos_4 > z_pos_4) new_pos_4 = z_pos_4
                    edificio[4].position.y = new_pos_4

                    edificio[2].position.y = z_pos_2
                    new_pos_2 = z_pos_2
                    edificio[3].position.y = z_pos_3
                    new_pos_3 = z_pos_3
                    // edificio[4].position.y = z_pos_4 - 8000
                    // new_pos_4 = z_pos_4 - 8000
                    edificio[5].position.y = z_pos_5 - 8000
                    new_pos_5 = z_pos_5 - 8000
                    edificio[6].position.y = z_pos_6 - 8000
                    new_pos_6 = z_pos_6 - 8000
                    edificio[0].position.y = z_pos_duelo - 8000
                    new_pos_duelo = z_pos_duelo - 8000
                }
            } else if (mainScroll > juntar_piso5) {
                if (edificio) {
                    new_pos_5 = new_pos_5 + (mainScroll - juntar_piso5)
                    if (new_pos_5 > z_pos_5) new_pos_5 = z_pos_5
                    edificio[5].position.y = new_pos_5

                    new_pos_6 = new_pos_6 + (mainScroll - juntar_piso5)
                    if (new_pos_6 > z_pos_6) new_pos_6 = z_pos_6
                    edificio[6].position.y = new_pos_6

                    new_pos_duelo = new_pos_duelo + (mainScroll - juntar_piso5)
                    if (new_pos_duelo > z_pos_duelo) new_pos_duelo = z_pos_duelo
                    edificio[0].position.y = new_pos_duelo

                    edificio[2].position.y = z_pos_2
                    new_pos_2 = z_pos_2
                    edificio[3].position.y = z_pos_3
                    new_pos_3 = z_pos_3
                    edificio[4].position.y = z_pos_4
                    new_pos_4 = z_pos_4
                    // edificio[5].position.y = z_pos_5 - 8000
                    // new_pos_5 = z_pos_5 - 8000
                    // edificio[6].position.y = z_pos_6 - 8000
                    // new_pos_6 = z_pos_6 - 8000
                    // edificio[0].position.y = z_pos_duelo - 8000
                    // new_pos_duelo = z_pos_duelo - 8000
                }
            }

            if (marcadores.length > 0) {
                if (mainScroll < piso_dos_archivo) {
                    for (var i = 0; i < marcadores.length; i++) {
                        marcadores[i].position.y = -100000
                    }
                } else if (mainScroll > piso_dos_archivo && mainScroll < piso_dos_pedagogia) {
                    for (var i = 0; i < marcadores.length; i++) {
                        marcadores[i].position.y = -100000
                    }
                    marcadores[0].position.y = 15
                } else if (mainScroll > piso_dos_pedagogia && mainScroll < piso_dos_encuentro) {
                    for (var i = 0; i < marcadores.length; i++) {
                        marcadores[i].position.y = -100000
                    }
                    marcadores[1].position.y = 15
                    marcadores[0].position.y = 15
                } else if (mainScroll > piso_dos_encuentro && mainScroll < piso_dos_consulta) {
                    for (var i = 0; i < marcadores.length; i++) {
                        marcadores[i].position.y = -100000
                    }
                    marcadores[2].position.y = 15
                    marcadores[3].position.y = 15
                } else if (mainScroll > piso_dos_consulta && mainScroll < piso_dos_creacion) {
                    for (var i = 0; i < marcadores.length; i++) {
                        marcadores[i].position.y = -100000
                    }
                    marcadores[1].position.y = 15
                    marcadores[0].position.y = 15
                } else if (mainScroll > piso_dos_creacion && mainScroll < juntar_piso3) {
                    for (var i = 0; i < marcadores.length; i++) {
                        marcadores[i].position.y = -100000
                    }
                    marcadores[4].position.y = 15
                    marcadores[5].position.y = 25
                    marcadores[3].position.y = 15
                    marcadores[11].position.y = 15
                } else if (mainScroll > juntar_piso3 && mainScroll < piso_tres_creacion) {
                    for (var i = 0; i < marcadores.length; i++) {
                        marcadores[i].position.y = -100000
                    }
                } else if (mainScroll > piso_tres_creacion && mainScroll < juntar_piso4) {
                    for (var i = 0; i < marcadores.length; i++) {
                        marcadores[i].position.y = -100000
                    }
                    marcadores[6].position.y = 20
                    marcadores[7].position.y = 20
                } else if (mainScroll > juntar_piso4 && mainScroll < piso_cuatro_creacion) {
                    for (var i = 0; i < marcadores.length; i++) {
                        marcadores[i].position.y = -100000
                    }
                } else if (mainScroll > piso_cuatro_creacion && mainScroll < juntar_piso5) {
                    for (var i = 0; i < marcadores.length; i++) {
                        marcadores[i].position.y = -100000
                    }
                    marcadores[8].position.y = 25
                    marcadores[9].position.y = 25
                } else if (mainScroll > juntar_piso5 && mainScroll < piso_cinco_duelo) {
                    for (var i = 0; i < marcadores.length; i++) {
                        marcadores[i].position.y = -100000
                    }
                } else if (mainScroll > piso_cinco_duelo) {
                    for (var i = 0; i < marcadores.length; i++) {
                        marcadores[i].position.y = -100000
                    }
                    marcadores[10].position.y = 30
                }

            }

        })

        const render = () => {
            const delta = clock.getDelta();
            const hasControlsUpdated = cameraControls.update(delta);

            // if (elem.activateRot) {
            //     elem.rotation += 0.0025
            //     if (objeto) {
            //         objeto.rotation.y = elem.rotation
            //     }

            // }

            elem.rotation += 0.01
            for (var i = 0; i < marcadores.length; i++) {
                marcadores[i].rotation.y = elem.rotation
            }

            requestAnimationFrame(render);

            renderer.render(this.scene, camera);

        }

        render();

        cameraControls.rotateTo(rotateUno, rotateDos, true);
        cameraControls.dollyTo(150, true);

        var s = this.scene;

        var loader = new GLTFLoader()
        loader.load(this.obj, obj => {
            obj.scene.children[1].castShadow = false;
            obj.scene.children[1].receiveShadow = false;

            obj.scene.children[2].castShadow = false;
            obj.scene.children[2].receiveShadow = false;

            obj.scene.children[0].traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = false;
                    child.receiveShadow = false;
                }
            });
            edificio = obj.scene.children[0].children
            objeto = obj.scene
            s.add(obj.scene)
        })
        // console.log(this.marcador)
        // loader = new GLTFLoader()
        loader.load(this.marcador, obj => {
            for (var i = 0; i < 12; i++) {
                marcadores.push(obj.scene.clone())
                marcadores[i].position.y = -100000
                marcadores[i].children[3].material = new THREE.MeshLambertMaterial({
                    color: 0xf9d423
                });
            }

            // archivo
            marcadores[0].position.x = -7
            marcadores[0].position.z = -12
            // marcadores[0].position.y = 15

            // ludoteca
            marcadores[1].position.x = 26
            marcadores[1].position.z = -24
            marcadores[1].children[3].material.color = {
                r: 85 / 255,
                g: 168 / 255,
                b: 239 / 255
            }

            // sala de juntas
            marcadores[2].position.x = 20
            marcadores[2].position.z = 10
            // marcadores[2].position.y = 15

            // blackbox
            marcadores[3].position.x = -35
            marcadores[3].position.z = 5
            marcadores[3].children[3].material.color = {
                r: 161 / 255,
                g: 239 / 255,
                b: 85 / 255
            }

            // aulas
            marcadores[4].position.x = 37
            marcadores[4].position.z = -15
            marcadores[4].children[3].material.color = {
                r: 85 / 255,
                g: 168 / 255,
                b: 239 / 255
            }
            // marcadores[4].position.y = 15

            // estudio
            marcadores[5].position.x = 25
            marcadores[5].position.z = -2
            // marcadores[5].position.y = 25

            // sala 3
            marcadores[6].position.x = 0
            marcadores[6].position.z = -5
            marcadores[6].children[3].material.color = {
                r: 85 / 255,
                g: 168 / 255,
                b: 239 / 255
            }
            // marcadores[6].position.y = 20

            // sala 4
            marcadores[7].position.x = -15
            marcadores[7].position.z = 15
            // marcadores[7].position.y = 20

            // sala 5
            marcadores[8].position.x = 20
            marcadores[8].position.z = 5
            // marcadores[8].position.y = 25

            // sala 9
            marcadores[9].position.x = 33
            marcadores[9].position.z = -20
            marcadores[9].children[3].material.color = {
                r: 85 / 255,
                g: 168 / 255,
                b: 239 / 255
            }

            // duelo
            marcadores[10].position.x = -20
            marcadores[10].position.z = -23
            marcadores[10].children[3].material.color = {
                r: 239 / 255,
                g: 85 / 255,
                b: 187 / 255
            }

            marcadores[11].position.x = -25
            marcadores[11].position.z = -20
            marcadores[11].children[3].material.color = {
                r: 239 / 255,
                g: 85 / 255,
                b: 187 / 255
            }

            for (var i = 0; i < marcadores.length; i++) {
                s.add(marcadores[i])
            }

        })
    }
}

export default ThreeHelper;