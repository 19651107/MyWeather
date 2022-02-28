import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

const Vanta = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                color: 0xcfff,
                backgroundColor: 0x0,
                THREE: THREE
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div ref={myRef} className="vanta"> </div>
}

export default Vanta