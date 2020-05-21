import '../css/main.css'

import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import {    Engine              } from "@babylonjs/core/Engines/engine";
import {    Scene               } from '@babylonjs/core/scene';
import {    Vector3             } from '@babylonjs/core/Maths/math';
//import {    FreeCamera          } from '@babylonjs/core/Cameras/freeCamera';
import {    ArcRotateCamera     } from '@babylonjs/core/Cameras/arcRotateCamera';
import {    HemisphericLight    } from '@babylonjs/core/Lights/hemisphericLight';
import {    Mesh                } from '@babylonjs/core/Meshes/mesh';
import {    GridMaterial        } from '@babylonjs/materials/grid';
import {    GLTFFileLoader      } from '@babylonjs/loaders/glTF/glTFFileLoader';
import '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/loaders';
//import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";



const canvas = document.getElementById('renderCanvas');
const engine = new Engine(canvas);
var scene = new Scene(engine);

//定义一个相机
var camera = new ArcRotateCamera('camera' ,  Math.PI/2  ,  Math.PI/3 , 10 ,  new Vector3.Zero() , scene);
camera.attachControl(canvas , true);

//设置相机范围
camera.lowerRadiusLimit = 5;
camera.upperRadiusLimit = 20;

//开启相机自动旋转功能
camera.useAutoRotationBehavior = true;

camera.useFramingBehavior = true;



var light = new HemisphericLight('light1' , new Vector3( 0 , 1 ,  0) , scene);

light.intensity = 0.7;

var material = new GridMaterial('grid' , scene);


var ground = Mesh.CreateGround('ground1' , 6 , 6 ,2,scene);

ground.material = material;


//加载模型 同步
BABYLON.SceneLoader.Append('../asset/models/' ,'tesla.glb' , scene,function(scene){
    
} );

//异步加载模型
// BABYLON.SceneLoader.AppendAsync("../asset/models/", "tesla.glb", scene).then(function (scene) {
//     // do something with the scene
// });


engine.runRenderLoop(()=>{
    scene.render();
})