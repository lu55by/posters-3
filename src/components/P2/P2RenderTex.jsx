import { Decal, PerspectiveCamera, RenderTexture, Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";

export default function P2RenderTex () {

    const renderTexProp = useControls('renderTex', {
        anisotropy: {
            value: 32,
            min: 2,
            max: 32,
            step: 2
        }
    })

    const decalProp = useControls('decalProp', {

        position: {
            value: { x: 0, y: 0, z: 0 },
            min: -4,
            max: 4,
            step: 0.01
        },

        rotation: {
            value: { x: 0, y: 0, z: 0 },
            min: -Math.PI,
            max: Math.PI,
            step: 0.01
        },

        anisotropy: {
            value: 32,
            min: 2,
            max: 32,
            step: 2
        }
    })

    const tex = useTexture("./refImgs/reference1.jpg")

    const textRef = useRef()
    useFrame(state => textRef.current.position.x = Math.sin(state.clock.elapsedTime))



    return (
        <mesh position-z={1.2}>
            <boxGeometry />
            <meshBasicMaterial color="red">
                <RenderTexture attach="map" anisotropy={renderTexProp.anisotropy}>
                    <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
                    {/* <color attach="background" args={['red']} /> */}
                    <Text  ref={textRef} font="./fonts/Astrolab.woof" fontSize={2} color='white' >
                        ON MARCH
                    </Text>
                </RenderTexture>
            </meshBasicMaterial>

            {/* 
                Decal test
            */}
            {/* <Decal 
                debug 
                // map={tex} 
                position={[decalProp.position.x, decalProp.position.y, decalProp.position.z]}
                rotation={[decalProp.rotation.x, decalProp.rotation.y, decalProp.rotation.z]}
                // map-anisotropy={decalProp.anisotropy} 
                // color='#ff0'
                scale={[.5, .5, 2]}
                
            >
                <meshBasicMaterial>
                    <RenderTexture attach="map" anisotropy={renderTexProp.anisotropy}>
                        <PerspectiveCamera makeDefault manual aspect={.5 / .5} position={[0, 0, 2]} />
                        <color args={['red']} attach="background" />
                        <Text fontSize={.5} rotation={[0, 0, 0]} color="black">
                            ON MARCH
                        </Text>
                    </RenderTexture>
                </meshBasicMaterial>
            </Decal> */}

            {/* <Decal 
                debug 
                position={[decalProp.position.x, decalProp.position.y, decalProp.position.z]} 
                rotation={[decalProp.rotation.x, decalProp.rotation.y, decalProp.rotation.z]} 
                scale={[0.9, 0.25, 1]}
            >
                    <meshBasicMaterial>
                    <meshStandardMaterial roughness={0.6} transparent polygonOffset polygonOffsetFactor={-10}>
                    <RenderTexture attach="map" anisotropy={16}>
                        <PerspectiveCamera makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
                        <color attach="background" args={['#af2040']} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} />
                        <Text rotation={[0, 0, 0]} ref={textRef} fontSize={2} color="yellow">
                        hello from drei
                        </Text>
                    </RenderTexture>
                    </meshStandardMaterial>
                    </meshBasicMaterial>
                </Decal> */}

            {/* <Decal 
                debug
                position={[-1.0, 1.75, 0.6]} 
                // position={[0, 0, 0]} 
                rotation={-0.7} 
                scale={0.25} 
                map={tex} 
                map-anisotropy={16} 
            /> */}

        </mesh>
    )
} 