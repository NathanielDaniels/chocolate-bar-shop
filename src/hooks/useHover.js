import {useState, useEffect, useRef} from "react";


function useHover() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  // const ref = useRef('')

  
  function mouseEnter() {
    setHovered(true)
  }
  
  function mouseLeave() {
    setHovered(false)
  }
  
  useEffect(() => {
    const myRef = ref.current
    myRef.addEventListener("mouseenter", mouseEnter);
    myRef.addEventListener("mouseleave", mouseLeave);
    
    return () => {    
      myRef.removeEventListener("mouseenter", mouseEnter);
      myRef.removeEventListener("mouseleave", mouseLeave);
    }
  }, [])
  
  console.log(ref)
  return [hovered, ref]

}

export default useHover