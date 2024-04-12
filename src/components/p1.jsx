
import { Perf } from 'r3f-perf'
import P1TanText from './P1/P1TanText'
import P1SphereRotate from './P1/P1SphereRotate'
import { OrbitControls, Environment, Lightformer, SpotLight, RandomizedLight, SpotLightShadow } from '@react-three/drei'
import Hand from './P2/P2Hand'
import { useControls } from 'leva'
import P2RenderTex from './P2/P2RenderTex'
import P2Texts from './P2/P2Texts'
import BloomEffect from './Effect/BloomEffect'
import P1StaticText from './P1/P1StaticText'



export default function P1 () { 

    // const handProps = useControls('hand', {
    //     posX: {
    //         value: .14,
    //         min: -20,
    //         max: 5,
    //         step: .01
    //     },  
    //     posY: {
    //         value: 0,
    //         min: 2,
    //         max: 5,
    //         step: .01
    //     },
    //     posZ: {
    //         value: 0,
    //         min: -5,
    //         max: 5,
    //         step: .01
    //     },
    //     scale: {
    //         value: .19,
    //         min: 0,
    //         max: 1,
    //         step: 0.0001
    //     },
    //     rotationY: {
    //         value: 0,
    //         min: -Math.PI,
    //         max: Math.PI,
    //         step: 0.01
    //     }
    // })

    // const {perfVisibility} = useControls('P1PerfVisibility', {
    const perfVisibility = useControls('海报一性能观测', {
        // perfVisibility: true
        // perfVisibility: false
        启用: false
    }) 

    // const {effectEnabled} = useControls('P1EffectEnabled', {
    const effectEnabled = useControls('海报一特效', {
        // effectEnabled: true
        启用: true
        // effectEnabled: false
    })

    return <>

        {/* <Environment 
            preset='studio'
            resolution={.6}
            frames={1}
        /> */}

        {/* <RandomizedLight intensity={5} />  */}

        <color args={['#230511']} attach='background' />

        {perfVisibility.启用 && <Perf position="top-left" />}

        <OrbitControls makeDefault />

        {/* Effects */}
        {effectEnabled.启用 && <BloomEffect />}

        <P1TanText />
        
        <P1SphereRotate />

        {/* <P1StaticText /> */}


        {/* Hand test */}
        {/* <Hand 
            position={[handProps.posX, handProps.posY, handProps.posZ]}
            scale={handProps.scale}
            rotation-y={handProps.rotationY}
        /> */}

        {/* P2Texts test */}
        {/* <P2Texts num={10} /> */}

        {/* Decal test */}
        {/* <P2RenderTex  /> */}
    </>
}