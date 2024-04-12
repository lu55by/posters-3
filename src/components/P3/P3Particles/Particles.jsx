import { Points, Point, shaderMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from 'three'

import { extend } from '@react-three/fiber'
import vertexShader from '../P3Particles/shaders/vertexShader.glsl?raw'
import fragmentShader from '../P3Particles/shaders/fragmentShader.glsl?raw'

const ColorShiftMaterial = shaderMaterial(
//    uniforms
//   { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
  { 
    uTime: 0,
    uSpeed: 1.2
},

  // vertex shader
  vertexShader
//   /*glsl*/`
//     varying vec2 vUv;
//     void main() {
//       vUv = uv;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
//   `
  ,

  // fragment shader
  fragmentShader
//   /*glsl*/`
//     uniform float time;
//     uniform vec3 color;
//     varying vec2 vUv;
//     void main() {
//       gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
//     }
//   `
)

// declaratively
extend({ ColorShiftMaterial })

export default function Particles () {

    const onClick = () => {
        console.log('Clicked!');
    }
    

    const onPointerOver = () => {
        console.log('Hovered!');
    }

    const count = 1000

    const bufferGeo = new THREE.BufferGeometry()

    let geoCount
    let geoPositions

    
    // const {allPosDebug, scale} = useControls('All pos', {
    //     allPosDebug: {
    //         value: [0, 1.1, 0],
    //         step: .5
            
    //     },
    //     scale: {
    //         value: 1.2,
    //         step: 0.1
    //     }
    // })

    // const allPos = [0, 5, 10]
    // const allPos = allPosDebug
    const allPos = [0, 1.1, 0]

    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
        const i3 = i * 3
        positions[  i3  ] = (Math.random() - .5) * 20
        positions[i3 + 1] = (Math.random() - .5) * 20
        positions[i3 + 2] = (Math.random() - .5) * 20
    }
    
    // initial geoProps
    geoCount = count
    geoPositions = positions
    bufferGeo.setAttribute('position', new THREE.BufferAttribute(geoPositions, 3))


    // box geo
    const boxSegments = 12
    const boxGeo = new THREE.BoxGeometry(1, 1, 1, boxSegments, boxSegments, boxSegments)
    // console.log('box pos count', boxGeo.attributes.position.count)
    // console.log('box pos array', boxGeo.attributes.position.array)
    const boxCount = boxGeo.attributes.position.count
    const boxPositions = boxGeo.attributes.position.array
    // Add allPos y to boxPositions of y
    for (let i = 0; i < boxCount; i++) {
        const i3 = i * 3
        boxPositions[i3 + 1] += allPos[1]
    }


    // geoCount = boxCount
    // geoPositions = boxPositions
    

    // sphere geo
    const sphereGeo = new THREE.SphereGeometry(.5, 32, 16)
    // console.log('sphere pos count', sphereGeo.attributes.position.count)
    // console.log('sphere pos array', sphereGeo.attributes.position.array)
    const sphereCount = sphereGeo.attributes.position.count
    const spherePositions = sphereGeo.attributes.position.array
    geoCount = sphereCount
    geoPositions = spherePositions

    // 

    /*
        toggle in leva
    */
    // const { toggle } = useControls('geo toggle', {
    //     toggle: true
    // })

    // if (toggle) {
    //     geoCount = sphereCount
    //     geoPositions = spherePositions
    // } else {
    //     geoCount = boxCount
    //     geoPositions = boxPositions
    // }
    // bufferGeo.setAttribute('position', new THREE.BufferAttribute(geoPositions, 3))
    // const bufferPos = bufferGeo.attributes.position
    // console.log(bufferGeo)

    const shaderMatRef = useRef()
    // const { uSpeed } = useControls('Uniforms', {
    //     uSpeed: {
    //         value: 1,
    //         min: .2,
    //         max: 10,
    //         step: 0.001
    //     }
    // })
    
    // Aniamte
    useFrame((state, delta) => {
        const elapsed = state.clock.elapsedTime
        shaderMatRef.current.uTime = elapsed
    })
    
    let pointsRef = useRef()
    useEffect(() => {
        let pointsGeo = pointsRef.current.geometry
        pointsGeo.setAttribute('toPos', new THREE.BufferAttribute(boxPositions, 3))
        console.log(pointsRef)
        // console.log(pointsRef.current.geometry.attributes)
        // console.log(shaderMatRef.current)
        // shaderMatRef.current.uniforms.uSpeed.value = uSpeed
    }, [])





    /*
        Box position attr getting test
    
    // const boxRef = useRef()
    // const pointsRef = useRef()

    // useFrame((state, delta) => {
    //     // console.log(boxRef.current);
    //     boxRef.current.rotation.y += delta
    // })

    // const [ boxCount, setBoxCount ] = useState()
    // const [ boxPosition, setBoxPosition ] = useState([])
    
    // useEffect(() => {
    //     setBoxCount(boxRef.current.geometry.attributes.position.count)
    //     setBoxPosition(boxRef.current.geometry.attributes.position.array)
    //     console.log(boxRef.current.geometry.attributes.position.count)
    //     console.log(boxRef.current.geometry.attributes.position.array)
    // }, [])

    // console.log('boxCount:', boxCount)
    // console.log('boxPosition:', boxPosition)

    // const boxSegments = 13
    */


    return <>
        {/* Box position attr getting test in jsx */}
        {/* <mesh
            ref={boxRef}
            position={allPos}
            visible={false}
        >
            <boxGeometry args={[1, 1, 1, boxSegments, boxSegments, boxSegments]} />
            <meshBasicMaterial
                // wireframe 
            />
        </mesh> */}

        <Points
            ref={pointsRef}
            limit={1000} // Optional: max amount of items (for calculating buffer size)
            range={1000} // Optional: draw-range
            // scale={scale}
            scale={1.2}
        >
            {/* <Point position={[1, 2, 40]} color="red" onClick={onClick} onPointerOver={onPointerOver} /> */}
            {/* <Point position={[0, 2, 40]} color="red" onClick={onClick} onPointerOver={onPointerOver} /> */}
            {/* // As many as you want, make them conditional, mount/unmount them, lazy load them, etc ... */}
            
            {/* Multiple points */}
            {[...Array(count)].map((value, index) => 
                <Point 
                    key={index}
                    position={[
                        // random position
                        // positions[index * 3], 
                        // positions[index * 3 + 1], 
                        // positions[index * 3 + 2]

                        // default position
                        // 0, 
                        // 0,
                        // 0

                        // box position
                        // boxPosition[index % boxCount * 3    ] + allPos[0],
                        // boxPosition[index % boxCount * 3 + 1] + allPos[1],
                        // boxPosition[index % boxCount * 3 + 2] + allPos[2]

                        // geo position
                        geoPositions[index % geoCount * 3    ] + allPos[0],
                        geoPositions[index % geoCount * 3 + 1] + allPos[1],
                        geoPositions[index % geoCount * 3 + 2] + allPos[2]
                        
                    ]} 
                    // color="red" 
                />
            )}


            {/* BufferGeometry test */}
            {/* <bufferAttribute 
                attach="attributes-position"
                count={count}
                array={positions}
                itemSize={3}
            /> */}
            
            {/* <pointsMaterial 
                vertexColors 
                sizeAttenuation
                size={.02}
            /> */}

            {/* shaderMaterial */}
            <colorShiftMaterial
                ref={shaderMatRef}
            />
        </Points>   
    </>
}