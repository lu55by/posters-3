import { Canvas } from '@react-three/fiber'
import P1 from './components/p1'
import P2 from './components/p2'
import P3 from './components/p3'
import { Leva } from 'leva'
import { styled } from 'styled-components'


export default function Experience()
{
    
    const styledLeva = styled(Leva)`
    width: 500px;
    `
    return <>
        
        <div className="container container-1">
            <div className=" canvas-box left">
                {/* Canvas 1 */}
                <Leva style={{width:'1000px'}}
                    collapsed
                     
                />
                <Canvas
                    camera={ {
                        fov: 45,
                        near: 0.1,
                        far: 100,
                        position: [ 0, 0, 15 ]

                        // For hand decal test
                        // position: [ 0, 0, 9 ]

                        // For P3Text position-z test
                        // position: [ 0, 0, 5 ]
                        // position: [ 0, 0, 5 ]
                    } }
                >   
                    {/* <color args={['#230512']} attach="background" /> */}
                    <P1 />
                    
                    {/* P3 test */}
                    {/* <P3 /> */}
                </Canvas>
            </div>
        </div>

        <div className="container container-2">
            <div className=" canvas-box mid">
                {/* Canvas 2 */}
                {/* <Leva 
                    collapsed
                /> */}
                <Canvas
                    camera={ {
                        fov: 45,
                        near: 0.1,
                        far: 200,
                        position: [ 0, 0, 9 ]
                        
                    } }
                >
                    <color args={['#130546']} attach="background" />
                    <P2 />
                </Canvas>
            </div>
        </div>

        <div className="container container-3">
            <div className=" canvas-box right">
                {/* Canvas 3 */}
                {/* <Leva 
                    // collapsed
                /> */}
                <Canvas
                    camera={ {
                        fov: 45,
                        near: 0.1,
                        far: 200,
                        position: [ 0, 0, 5 ]
                    } }
                >
                    <color args={['#074f5c']} attach="background" />
                    <P3 />
                </Canvas>
            </div>
        </div>


    </>
}