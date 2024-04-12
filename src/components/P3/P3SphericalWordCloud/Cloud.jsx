
import { useMemo } from "react"
import Word from "./Word"
import { Spherical, Vector3 } from "three"

export default function Cloud ({ count = 4, radius = 20 }) {

    const words = useMemo(() => {
        const temp = []
        const spherical = new Spherical()
        const phiSpan = Math.PI / (count + 1)
        const thetaSpan = (Math.PI * 2) / count
        for (let i = 1; i < count + 1; i++)
            for (let j = 0; j < count; j++)
                temp.push(
                    [
                        new Vector3().setFromSpherical(
                            spherical.set(radius, phiSpan * i, thetaSpan * j)
                        ),
                        "SEE YOU IN MIAMI"
                    ]
                )
        return temp 
    }, [count, radius])

    console.log(words)

    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}


/*

    function Cloud({ count = 4, radius = 20 }) {
        // Create a count x count random words with spherical distribution
        const words = useMemo(() => {
            const temp = []
            const spherical = new THREE.Spherical()
            const phiSpan = Math.PI / (count + 1)
            const thetaSpan = (Math.PI * 2) / count
            for (let i = 1; i < count + 1; i++)
                for (let j = 0; j < count; j++) 
                    temp.push(
                        [
                            new THREE.Vector3().setFromSpherical(
                            spherical.set(radius, phiSpan * i, thetaSpan * j)
                        ), 
                        // randomWord()
                        "randomWord()"
                        ]
                    )
            return temp
        }, [count, radius])

        console.log(words.length)

        // Log value in words
        // words.map(
        //   (value, index) =>
        //   console.log(value)
        // )

        return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
    }

*/