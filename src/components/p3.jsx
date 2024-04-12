
import { OrbitControls, Text, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import P2RenderTex from './P2/P2RenderTex'
import Hand from './P2/P2Hand'
import { useControls } from 'leva'
import P3Text from './P3/P3Text'
import Particles from './P3/P3Particles/Particles'

export default function P3 () {

    // const {perfVisibility} = useControls('P3PerfVisibility', {
    const {启用} = useControls('海报三性能观测', {
        // perfVisibility: false
        启用: false
        // perfVisibility: true
    })

    // const {background} = useControls('P3Background', {
    const {颜色} = useControls('海报三背景', {
        // background: "#000520"
        颜色: "#000520"
    })

    return <>

        {/* <Environment 
            preset='studio'
            resolution={.5}
            frames={1}
        /> */}

        {/* <color args={[background]} attach='background' /> */}
        <color args={[颜色]} attach='background' />

        {/* {perfVisibility && <Perf position="top-right"/>} */}
        
        {/* Test in C1  */}
        {/* {perfVisibility && <Perf position="top-left"/>} */}
        {启用 && <Perf position="top-right"/>}

        <OrbitControls makeDefault />
       
        
        {/* Particles */}
        <Particles />

        {/* Text */}
        <P3Text />

    </>
}