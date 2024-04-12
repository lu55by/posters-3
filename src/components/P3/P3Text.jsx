
import { Text } from "@react-three/drei"
import { useControls } from "leva"
import Cloud from "./P3SphericalWordCloud/Cloud"

export default function P3Text () {

    // Debug
    // const fontProps = useControls('P3TestText', {
    //     color: '#eee',
    //     fontSize: {
    //         value: 1,
    //         min: .2,
    //         max: 10,
    //         step: 1
    //     },
    //     position: {
    //         value: [0, 5, 35],
    //         min: 0,
    //         max: 50,
    //         step: 1
    //     }
    // })


    return <>
        {/* <Text 
            font='./fonts/Astrolab.woff'
            {...fontProps}
            children="P3"
        /> */}
            

        <Cloud count={5} radius={15} />
    </>

}
