import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";


export default function P2Texts ({num = 5}) {


    // const textProps = useControls('P2Texts', {
    const textProps = useControls('海报二文字', {
        // size: {
        大小: {
            value: .2,
            min: 0,
            max: .7,
            step: 0.001
        },

        // color: "#ffff00",
        // color: "#ffff00",

        // distance: {
        距离: {
            value: .5,
            min: .1,
            max: Infinity,
            step: .01
        },

        // yOffset: {
        Y轴位置偏移: {
            value: 2.68,
            min: -4,
            max: 4,
            step: .001
        },

        // ySpinSpeed: {
        Y轴旋转速度: {
            value: .15,
            min: 0,
            max: 1,
            step: .001
            
        },

        // ySpinIOffset: {
        Y轴旋转偏移: {
            value: 5,
            min: 5,
            max: 10,
            step: .001
            
        },

        // posZSpeed: {
        // posZSpeed: {
        //     value: .5,
        //     min: 0,
        //     max: 1,
        //     step: .001
        // }

    })


    // Animate
    const textRefs = useRef([])
    useFrame((state) => {
        const elapsed = state.clock.elapsedTime

        // for (const text of textRefs.current) {
        //     text.rotation.y += Math.sin(elapsed) * Math.random() * .2
        // }

        for (let i = 0; i < textRefs.current.length; i++) {
            // textRefs.current[i].rotation.y = (Math.sin(elapsed * textProps.ySpinSpeed) + 1) * (i + textProps.ySpinIOffset) * Math.PI
            textRefs.current[i].rotation.y = (Math.sin(elapsed * textProps.Y轴旋转速度) + 1) * (i + textProps.Y轴旋转偏移) * Math.PI
            // textRefs.current[i].position.z = Math.tan(elapsed * textProps.posZSpeed) * (i + .2)
            // textRefs.current[i].position.z = Math.tan(elapsed) * (i) + textProps.yOffset
            // textRefs.current[i].color = 

            // textRefs.current[i].position.x = (Math.cos(elapsed) + 1) * i 
        }
        
        
    })



    return <>
        {[...Array(num)].map((value, index) => 
            <Text
                ref={element => textRefs.current[index] = element}
                key={index}
                font="./fonts/Astrolab.woff"
                // fontSize={textProps.size}
                fontSize={textProps.大小}
                // color={textProps.color}
                // color={[8, 2, 3]}
                // color={`hsl(${Math.random() * 360}, 100%, 50%`}
                fillOpacity={1}
                // position-y={((index - .5) * textProps.distance) - textProps.yoffset }
                position-y={((index - .5) * textProps.距离) - textProps.Y轴位置偏移 }
                // outlineWidth={.00001}
                // outlineColor="#000"
                // outlineOpacity={.5}
                // strokeWidth={1}
                // strokeColor="#ff0000"
                // strokeColor="#eee"
                // strokeOpacity={5}
            >
                ON Mar. 24, 25, 26 2024
            </Text>
        )}

        
        </>
        


        // <Text
        //     font="./fonts/Astrolab.woff"
        //     fontSize={textProps.size}
        //     color={textProps.color}
        //     fillOpacity={.5}
        // >
        //     ON MARCH
        // </Text>
    
}