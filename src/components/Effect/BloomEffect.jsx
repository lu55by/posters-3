
import { EffectComposer } from "@react-three/postprocessing"
import { Bloom } from "@react-three/postprocessing"

export default function BloomEffect () {
    return <>
        <EffectComposer>

            <Bloom
                mipmapBlur
                luminanceThreshold={1}
                intensity={.2}
                radius={.6}
            />

        </EffectComposer>
    </>
}