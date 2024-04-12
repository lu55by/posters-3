import { useControls } from "leva"
import { useHelper } from "@react-three/drei"
import { DirectionalLightHelper } from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function P2DirLights () {

    const directionalLightR = useRef()
    const directionalLightB = useRef()

    useFrame((state, delta) => {
        const elapsed = state.clock.getElapsedTime()
        directionalLightR.current.position.z = Math.sin(elapsed + 4.7) * 2

        directionalLightB.current.position.z = Math.cos(elapsed) * 2
    })

    // Light helpers
    // useHelper(directionalLightR, DirectionalLightHelper, 1)
    // useHelper(directionalLightB, DirectionalLightHelper, 1)


    // const lightRProps = useControls('lightRed', {
    const lightRProps = useControls('海报二红色光', {
        // enabled: true,
        启用: true,
        // posX: {
        X轴位置: {
            value: -2.4,
            min: -10,
            max: 10,
            step: 0.01
        },

        // posY: {
        Y轴位置: {
            value: 2.26,
            min: -10,
            max: 10,
            step: 0.01
        },

        // posZ: {
        Z轴位置: {
            value: 0,
            min: -10,
            max: 10,
            step: 0.01
        },
    })

    const lightBProps = useControls('海报二蓝色光', {
        // enabled: true,
        启用: true,
        X轴位置: {
            value: 1.97,
            min: -10,
            max: 10,
            step: 0.01
        },

        Y轴位置: {
            value: -1.8,
            min: -10,
            max: 10,
            step: 0.01
        },

        Z轴位置: {
            value: 0,
            min: -10,
            max: 10,
            step: 0.01
        },
    })

 

    return <>

        {
            lightRProps.启用 && 
            <directionalLight
                color='#922' 
                // position={[lightRProps.posX, lightRProps.posY, lightRProps.posZ]}
                position={[lightRProps.X轴位置, lightRProps.Y轴位置, lightRProps.Z轴位置]}
                ref={directionalLightR}
                intensity={1}
            />
        }
        
        {
            lightBProps.启用 && 
            <directionalLight 
                color='#229' 
                // position={[lightBProps.posX, lightBProps.posY, lightBProps.posZ]}
                position={[lightBProps.X轴位置, lightBProps.Y轴位置, lightBProps.Z轴位置]}
                ref={directionalLightB}
                intensity={1}
            />
        }

    </>
}