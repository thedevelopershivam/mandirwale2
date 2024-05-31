import React, { useState } from "react"

function Popup({ children }) {

    
    const [decoration, setDecoration] = useState('flex');
    const [hide, setHide] = useState({ opacity: 1, mt: "auto", shadow: "0_10px_25px_-8px_rgba(0,2000,30,.3)", delay: "0ms" });


    setTimeout(() => {
        setHide({ opacity: 0, mt: "-5px", shadow: "none", display: "hidden", delay: "5000ms"})
    }, 4500);

    // setTimeout(() => {
    //     setHide({ opacity: 0, mt: "-5px", shadow: "none" })
    // }, 5000);



    return (
        <div className={`bg-[#21ca21e9] z-[999] p-4 rounded backdrop-blur-sm text-textWhite font-medium transition duration-500 mt-[-10px] pointer-events-none 
      opacity-[${hide.opacity}] mt-[${hide.mt}] shadow-[${hide.shadow}] delay-[${hide.delay}]`}>
            {children}
        </div>
    )
}

export default React.memo(Popup)