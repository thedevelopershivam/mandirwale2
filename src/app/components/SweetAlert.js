import React, { useState } from "react"

function SweetAlert({backgroundColor = "success"}) {
    const [decoration, setDecoration] = useState('flex');
    const [hide, setHide] = useState({ opacity: 1, mt: "auto", shadow: "0_10px_25px_-8px_rgba(0,2000,30,.3)"});

    
    setTimeout(() => {
        setHide({opacity: 0, mt: "-5px", shadow: "none"})
    }, 4500);



  return (
      <div className={`absolute right-2 top-5 max-w-[300px] w-full h-auto overflow-y-auto bg-[#21ca21e9] z-[999] p-4 rounded backdrop-blur-sm text-textWhite font-medium transition duration-500 mt-[-10px] pointer-events-none 
      opacity-[${hide.opacity}] mt-[${hide.mt}] shadow-[${hide.shadow}]`}>
        lorem ipsum dolar sit amet

    </div>
  )
}

export default React.memo(SweetAlert)