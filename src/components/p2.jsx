
import { Float, OrbitControls, Text, useHelper, Trail, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Hand from './P2/P2Hand'
import { useControls } from 'leva'
import P2DirLights from './P2/P2DirectionalLight'
import P2Torus from './P2/P2Torus'
import P2RenderTex from './P2/P2RenderTex'
import P2Texts from './P2/P2Texts'
import BloomEffect from './Effect/BloomEffect'


export default function P2 () {

    // const handProps = useControls('P2hand', {
    const handProps = useControls('海报二左手模型', {
        // posX: {
        X轴位置: {
            value: .14,
            min: -20,
            max: 5,
            step: .01
        },  
        // posY: {
        Y轴位置: {
            value: 0,
            min: 2,
            max: 5,
            step: .01
        },
        // posZ: {
        Z轴位置: {
            value: 0,
            min: -5,
            max: 5,
            step: .01
        },
        // scale: {
        大小: {
            value: .19,
            min: 0,
            max: 1,
            step: 0.0001
        },
        // rotationY: {
        Y轴旋转: {
            value: 0.7,
            min: -Math.PI,
            max: Math.PI,
            step: 0.01
        }
    })

    // const glowingTorusCol = useControls('P2_Torus_Glowing_Intensity', {
    const glowingTorusCol = useControls('海报二光圈特效强度', {
        // red: {
        红色: {
            value: 15,
            min: 2,
            max: 500,
            step: 2
        },
        // blue: {
        蓝色: {
            value: 15,
            min: 2,
            max: 500,
            step: 2
        }
    })

    // const {perfVisibility} = useControls('P2PerfVisibility', {
    const perfVisibility = useControls('海报二性能观测', {
        // perfVisibility: true
        // perfVisibility: false
        启用: false
    }) 

    // const {effectEnabled} = useControls('P2EffectEnabled', {
    const effectEnabled = useControls('海报二特效', {
        // effectEnabled: true
        启用: true
        // effectEnabled: false
    })

    // const {background} = useControls('P2Background', {
    const background = useControls('海报二背景', {
        // background: "#000011"
        颜色: "#000011"
    })

    return <>

        {/* <Environment 
            preset='studio'
            resolution={.5}
            frames={1}
        /> */}


        {/* Effects */}
        {effectEnabled.启用 && <BloomEffect />}
       

        {/* <color args={['#000011']} attach='background' /> */}
        {/* <color args={['#130546']} attach='background' /> */}
        <color args={[background.颜色]} attach='background' />
        
        {/* <Perf className="perf-2" visibility={perfVisibility} /> */}

        {perfVisibility.启用 && <Perf className="perf-2" />}
        

        <OrbitControls makeDefault />
        
        {/* Test */}
        {/* <Text 
            font='./fonts/Astrolab.woff'
            // color={[9, .5, 0]}
        >
            p2
        </Text> */}

        {/* <P2DirLights />  */}

        {/* Glowing Torus */}
        {/* <P2Torus color={[0.5, 0.4, 15]} red={false} speed={1.5} radius={2} />
        <P2Torus color={[15, 0.4, .5]} red={true} speed={1.5} radius={1.7} /> */}

        {/* Tweak test */}
        {/* // <P2Torus color={[glowingTorusCol.blue / (glowingTorusCol.blue / .5), glowingTorusCol.blue / (glowingTorusCol.blue / .4), glowingTorusCol.blue]} red={false} speed={1.5} radius={2} />
        // <P2Torus color={[glowingTorusCol.red, glowingTorusCol.red / (glowingTorusCol.red / .4), glowingTorusCol.red / (glowingTorusCol.red / .5)]} red={true} speed={1.5} radius={1.7} /> */}
        <P2Torus color={[glowingTorusCol.蓝色 / (glowingTorusCol.蓝色 / .5), glowingTorusCol.蓝色 / (glowingTorusCol.蓝色 / .4), glowingTorusCol.蓝色]} red={false} speed={1.5} radius={2} />
        <P2Torus color={[glowingTorusCol.红色, glowingTorusCol.红色 / (glowingTorusCol.红色 / .4), glowingTorusCol.红色 / (glowingTorusCol.红色 / .5)]} red={true} speed={1.5} radius={1.7} />

        {/* <P2RenderTex /> */}


        {/* Texts */}
        <P2Texts num={5} />


        {/* Hand */}
        <Float
        >
            <Hand 
                // position={[handProps.posX, handProps.posY, handProps.posZ]}
                position={[handProps.X轴位置, handProps.Y轴位置, handProps.Z轴位置]}
                // scale={handProps.scale}
                scale={handProps.大小}
                // rotation-y={handProps.rotationY}
                rotation-y={handProps.Y轴旋转}
            />
        </Float>


    </>
}