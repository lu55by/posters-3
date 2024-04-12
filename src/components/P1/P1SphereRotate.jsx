
import { Center, Circle, Environment, Text3D, Torus, useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { forwardRef, useRef } from 'react'
import { PointLightHelper } from 'three'


export default function P1SphereRotate() {

    const sphereRef = useRef()
    const sphereRef2 = useRef()

    const pointLightBlue = useRef()
    const pointLightRed = useRef()
    
    // useHelper(pointLightBlue, PointLightHelper, 1)
    // useHelper(pointLightRed, PointLightHelper, 1)


    const p1_Torus_Color = useControls('海报一光圈', {
        内部红色光圈: {
            value: 100,
            min: 50,
            max: 5000,
            step: 1
            
        },
        外部红色光圈: {
            value: 400,
            min: 50,
            max: 5000,
            step: 1
            
        },
        内部蓝色光圈: {
            value: 100,
            min: 50,
            max: 5000,
            step: 1
            
        },
        外部蓝色光圈: {
            value: 400,
            min: 50,
            max: 5000,
            step: 1
            
        }
    })
    
    useFrame((state, delta) => {
        const elapsed = state.clock.getElapsedTime()

        // Sphere1
        sphereRef.current.position.x = Math.sin(elapsed) 
        sphereRef.current.position.y = - Math.cos(elapsed) * 3
        sphereRef.current.position.z = Math.tan(elapsed) * 2

        // sphereRef.current.material.metalness = (Math.sin(elapsed) + 1) / 2 * .5 * .7
        // sphereRef.current.material.roughness = Math.cos(elapsed)

        // RGB Transfer
        // sphereRef.current.material.color.r = Math.abs(Math.cos(elapsed * .5)) * 12 + 1
        // sphereRef.current.material.color.g = Math.abs(Math.cos(elapsed * .5)) * 12 + 1
        sphereRef.current.material.color.g = Math.abs(Math.cos(elapsed * 5)) * 12 + .5
        sphereRef.current.material.color.b = Math.abs(Math.cos(elapsed * 5)) * 24 + 1
        
        sphereRef.current.rotation.z = sphereRef.current.rotation.z = elapsed * 5
        
        // Sphere2
        sphereRef2.current.position.x = Math.sin(elapsed) * 2
        sphereRef2.current.position.y = Math.cos(elapsed) * 3
        sphereRef2.current.position.z = - Math.tan(elapsed) * 5

        // sphereRef2.current.material.metalness = (Math.sin(elapsed) + 1) / 2 * .5 * .7
        // sphereRef2.current.material.roughness = Math.cos(elapsed)
        
        // RGB Transfer
        sphereRef2.current.material.color.r = Math.abs(Math.sin(elapsed * 5)) * 24 + 2
        // sphereRef2.current.material.color.g = Math.abs(Math.sin(elapsed * .5)) * 12 + 1
        // sphereRef2.current.material.color.b = Math.abs(Math.sin(elapsed * .5)) * 12 + 1

        sphereRef2.current.rotation.z = sphereRef2.current.rotation.z = - elapsed * 5
    
    })

    return <>

        {/* <Environment 
            // preset='sunset'
            // preset='dawn'
            // preset='night'
            // preset='warehouse'
            // preset='forest'
            // preset='apartment'
            // preset='studio'
            // preset='city'
            preset='studio'
            // preset='park'
            // preset='park'
        /> */}


        {/* Sphere1 blue */}
        <mesh
            ref={sphereRef}
            position={[0, 5, 0]}
        >
            <sphereGeometry />
            {/* <meshStandardMaterial
                color='#eee'
            /> */}

            <meshBasicMaterial 
                toneMapped={false}
                color={[2, 2, 2]}
            />

            {/* <pointLight 
                ref={pointLightBlue}
                color={[0, 7, 7]}
                position={[0, -2, 0]}
                distance={6}
                intensity={5}
            />

            <pointLight 
                // ref={pointLightBlue2}
                color={[0, 7, 7]}
                position={[0, 2, 0]}
                distance={5}
                intensity={5}
            /> */}

            <hemisphereLight
                // color={[0, 1, 1]}
            />

            {/* Inner */}
            <mesh>
                <torusGeometry args={[1.5, .01, 2, 16, 4]} />
                <meshBasicMaterial
                    toneMapped={false}
                    // color={[0, 5, 100]}
                    color={[0, p1_Torus_Color.内部蓝色光圈 / 20, p1_Torus_Color.内部蓝色光圈]}
                />
            </mesh>

            {/* Outer */}
            <mesh>
                <torusGeometry args={[2, .01, 2, 16, 4]} />
                <meshBasicMaterial
                    toneMapped={false}
                    // color={[0, 5, 400]}
                    color={[0, p1_Torus_Color.外部蓝色光圈 / 80, p1_Torus_Color.外部蓝色光圈]}
                />
                
            </mesh>

        </mesh>


        {/* Sphere2 red */}
        <mesh
            ref={sphereRef2}
            position={[0, -5, 0]}
        >
            <sphereGeometry />
            {/* <meshStandardMaterial
                color='#eee'
            /> */}

            <meshBasicMaterial 
                toneMapped={false}
                color={[5, 5, 5]}
            />

            {/* <pointLight 
                ref={pointLightRed}
                color={[7, .5, 0]}
                position={[0, 2, 0]}
                distance={6}
                intensity={5}
            /> */}

            {/* Inner */}
            <mesh>
                <torusGeometry args={[1.5, .01, 2, 32, 4]} />
                <meshBasicMaterial
                    toneMapped={false}
                    // color={[100, 100 / 12, 0]}
                    color={[p1_Torus_Color.内部红色光圈, p1_Torus_Color.内部红色光圈 / 12, 0]}
                />
            </mesh>
            
            {/* Leva test Inner */}
            {/* <mesh>
                <torusGeometry args={[1.5, .01, 2, 32, 4]} />
                <meshBasicMaterial
                    toneMapped={false}
                    color={[p1_Torus_Color.red.inner.r, p1_Torus_Color.red.inner.g, 0]}
                />
            </mesh> */}

            {/* Outer */}
            <mesh>
                <torusGeometry args={[2, .01, 2, 32, 4]} />
                <meshBasicMaterial
                    toneMapped={false}
                    // color={[400, 400 / 12, 0]}
                    color={[p1_Torus_Color.外部红色光圈, p1_Torus_Color.外部红色光圈 / 12, 0]}
                />
            </mesh>

            
        </mesh>

        {/* <Center>
            <Text3D
                font='./fonts/Astrolab_Regular.json'
                size={.5}
                ref={sphereRef}
                // position={sphereRef.current.position}
            >
                ULTRA
                <meshStandardMaterial
                    color='#eee'
                />
            </Text3D>
        </Center> */}

        
    </>
}