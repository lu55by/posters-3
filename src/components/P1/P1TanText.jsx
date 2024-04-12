import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { useRef } from 'react'
import { Color } from 'three'
import { useControls } from 'leva'

export default function P1TanText() {

    // const { fontSize } = useControls('P1Text', {
    const { fontSize } = useControls('海报一文字', {
        // fontSize: {
        //     value: 0.5,
        //     min: 0,
        //     max: 1,
        //     step: 0.001
        // }
        字体大小: {
            value: 0.5,
            min: 0,
            max: 1,
            step: 0.001
        }
    })

    const textRef = useRef()
    const textRef2 = useRef()
    const textRef3 = useRef()
    const textRef4 = useRef()
    const textRef5 = useRef()
    const textRef6 = useRef()
    const textRef7 = useRef()
    const textRef8 = useRef()

    const randoms = []
    for (let i = 0; i < 8; i++) {
        randoms[i] = Math.random()
    }

    useFrame((state, delta) => {
        const elapsed = state.clock.getElapsedTime()
        
        textRef.current.position.x = Math.tan(elapsed * randoms[0])
        textRef.current.position.y = Math.tan(elapsed * randoms[0]) + 7
        textRef.current.fontSize = ((Math.sin(elapsed) + 1) / 2) * .5 + .5
        // textRef.current.color = new Color(0xff0000)

        textRef2.current.position.x = - Math.tan(elapsed * randoms[1]) 
        textRef2.current.position.y = - Math.tan(elapsed * randoms[1]) + 5
        // textRef2.current.color = new Color(0xcc0000)
        
        textRef3.current.position.x = Math.tan(elapsed * randoms[2]) 
        textRef3.current.position.y = Math.tan(elapsed * randoms[2]) + 3
        textRef3.current.fontSize = ((Math.cos(elapsed) + 1) / 2) * .5 + .5
        // textRef3.current.color = new Color(0x990000)
        
        textRef4.current.position.x = - Math.tan(elapsed * randoms[3]) 
        textRef4.current.position.y = - Math.tan(elapsed * randoms[3]) + 1
        // textRef4.current.color = new Color(0x0000ff)
        
        textRef5.current.position.x = Math.tan(elapsed * randoms[4]) 
        textRef5.current.position.y = Math.tan(elapsed * randoms[4]) - 1
        // textRef5.current.color = new Color(0x0000cc)
        
        textRef6.current.position.x = - Math.tan(elapsed * randoms[5]) 
        textRef6.current.position.y = - Math.tan(elapsed * randoms[5]) - 3
        textRef6.current.fontSize = ((Math.sin(elapsed) + 1) / 2) * .5 + .5
        // textRef6.current.color = new Color(0x000099)
        
        textRef7.current.position.x = Math.tan(elapsed * randoms[6]) 
        textRef7.current.position.y = Math.tan(elapsed * randoms[6]) - 5
        // textRef7.current.color = new Color(0x000055)
        
        textRef8.current.position.x = - Math.tan(elapsed * randoms[7]) 
        textRef8.current.position.y = - Math.tan(elapsed * randoms[7]) - 7
        textRef8.current.fontSize = ((Math.cos(elapsed) + 1) / 2) * .5 + .5
        // textRef8.current.color = new Color(0xff0000)

        
    }) 

    return <>
    
        <Text 
            font='./fonts/Astrolab.woff'
            color='#eee'
            ref={textRef}
            // position-y={2}
            rotation-z={Math.PI * .25}
            fontSize={fontSize}
        >
            ULTRA MUSIC FESTIVAL
        </Text>

        <Text 
            font='./fonts/Astrolab.woff'
            color='#eee'
            ref={textRef2}
            rotation-z={-Math.PI * .75}
            fontSize={fontSize}
        >
            ULTRA MUSIC FESTIVAL
        </Text>

        <Text 
            font='./fonts/Astrolab.woff'
            color='#eee'
            ref={textRef3}
            rotation-z={Math.PI * .25}
            fontSize={fontSize}
        >
            ULTRA MUSIC FESTIVAL
        </Text>

        <Text 
            font='./fonts/Astrolab.woff'
            color='#eee'
            ref={textRef4}
            rotation-z={-Math.PI * .75}
            fontSize={fontSize}
        >
            ULTRA MUSIC FESTIVAL
        </Text>

        <Text 
            font='./fonts/Astrolab.woff'
            color='#eee'
            ref={textRef5}
            rotation-z={Math.PI * .25}
            fontSize={fontSize}
        >
            ULTRA MUSIC FESTIVAL
        </Text>

        <Text 
            font='./fonts/Astrolab.woff'
            color='#eee'
            ref={textRef6}
            rotation-z={-Math.PI * .75}
            fontSize={fontSize}
        >
            ULTRA MUSIC FESTIVAL
        </Text>

        <Text 
            font='./fonts/Astrolab.woff'
            color='#eee'
            ref={textRef7}
            rotation-z={Math.PI * .25}
            fontSize={fontSize}
        >
            ULTRA MUSIC FESTIVAL
        </Text>

        <Text 
            font='./fonts/Astrolab.woff'
            color='#eee'
            ref={textRef8}
            rotation-z={-Math.PI * .75}
            fontSize={fontSize}
        >
            ULTRA MUSIC FESTIVAL
        </Text>
    
    </>
}