
import { Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useRef } from "react"

export default function Word ({ children, ...props }) {

    const fontProps = {
        font: "./fonts/Astrolab.woff",
        fontSize: 1,
        letterSpacing: -.05,
        lineHeight: 5,
        // 'meterial-toneMapped': false

    }

    // Debug
    // const animationProps = useControls('P3WordAnimationProps', {
    const animationProps = useControls('海报三文字属性', {
        // speed: {
        速度: {
            value: .45,
            min: .2,
            max: 1,
            step: .001
        },
        // angle: {
        角度: {
            value: Math.PI * .25,
            min: Math.PI * .1,
            max: Math.PI * .5,
            step: Math.PI * .01
        },

    })

    const textRef = useRef()
    const groupRef = useRef()

    useFrame(({ camera, clock }) => {
        textRef.current.quaternion.copy(camera.quaternion)

        // Elapsed Time
        const elapsed = clock.elapsedTime

        // Letter spacing animation
        // textRef.current.letterSpacing = Math.tan(elapsed * animationProps.speed)
        textRef.current.letterSpacing = Math.tan(elapsed * animationProps.速度)

        // Font size animation
        // textRef.current.fontSize = (Math.sin(elapsed * animationProps.speed) + 1.5) / 2
        textRef.current.fontSize = (Math.sin(elapsed * animationProps.速度) + 1.5) / 2

        // Rotation animation
        // groupRef.current.rotation.y = Math.sin(elapsed * animationProps.speed) * animationProps.angle
        groupRef.current.rotation.y = Math.sin(elapsed * animationProps.速度) * animationProps.角度
    
    })

    return <>
        <group
            ref={groupRef}
            position-y={-8}
            position-z={-55}
        >

            <Text
                ref={textRef}
                {...fontProps}
                children={children}
                {...props}
            />
        </group>

    </>
}


/*
    function Word({ children, ...props }) {
        const color = new THREE.Color()
        const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
        const ref = useRef()
        const [hovered, setHovered] = useState(false)
        const over = (e) => (e.stopPropagation(), setHovered(true))
        const out = () => setHovered(false)
        // Change the mouse cursor on hover
        useEffect(() => {
            if (hovered) document.body.style.cursor = 'pointer'
            return () => (document.body.style.cursor = 'auto')
        }, [hovered])
        // Tie component to the render-loop
        useFrame(({ camera }) => {
            // Make text face the camera
            ref.current.quaternion.copy(camera.quaternion)
            // Animate font color
            ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
        })
        return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
    }
*/