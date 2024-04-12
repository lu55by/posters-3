import { useHelper } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useRef } from "react"
import { PointLightHelper } from "three"


export default function P2Torus (props) {
    
    // const pointLightProps = useControls('P2PointLight', {
    const pointLightProps = useControls('海报二点光', {
        // positionX: {
        X轴位置: {
            value: 1.8,
            min: -4,
            max: 4,
            step: 0.001
        },
        // positionY: {
        Y轴位置: {
            value: 0,
            min: -4,
            max: 4,
            step: 0.001
        },
        // positionZ: {
        Z轴位置: {
            value: 0,
            min: -4,
            max: 4,
            step: 0.001
        }
    })

    const torusRef = useRef()
    const pointLightRef = useRef()
    // useHelper(pointLightRef, PointLightHelper, 1)

    useFrame((state, delta) => {
        // const elapsed = state.clock.getElapsedTime()
        const elapsed = state.clock.elapsedTime

        props.red ? 
        torusRef.current.rotation.z += delta * 2 :
        torusRef.current.rotation.z -= delta * 2 
        // props.fn ? 
        // torusRef.current.position.y = (Math.sin((elapsed + 4.7) * props.speed) + 1) * 1.7 - .9 :
        // torusRef.current.position.y = (Math.cos((elapsed) * props.speed) + 1) * 1.7 - .9
        
        // props.fn ?
        // torusRef.current.position.y = Math.sin(elapsed + 4.7) + 0.9 * 1.5 :
        // torusRef.current.position.y = Math.cos(elapsed) + 0.9 * 1.5
        
        props.red ?
        torusRef.current.position.y = (Math.sin(elapsed + 4.7) + 1) * 2 - .5 :
        torusRef.current.position.y = (Math.cos(elapsed) + 1) * 2 - .5


    })

    return <>

        {/* Torus */}
        <mesh
            rotation-x={Math.PI * .5}
            // position-y={-.8}
            ref={torusRef}
            // position-z={2}
         >
            <torusGeometry args={[props.radius, .03, 10, 45, 7]} />
            {/* <meshStandardMaterial /> */}
            <meshBasicMaterial
                // Bloom effect props set

                // toneMapped to false
                toneMapped={false}

                // higher values above 1 of rgb channels
                color={props.color}

            />
            <pointLight 
                ref={pointLightRef}
                // position={[pointLightProps.positionX, pointLightProps.positionY, pointLightProps.positionZ]}
                position={[pointLightProps.X轴位置, pointLightProps.Y轴位置, pointLightProps.Z轴位置]}
                color={props.red ? "#922" : "#229"}
                scale={.5}
            />
        </mesh>  

    </>
}