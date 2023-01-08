
import React, {useEffect, useRef} from "react";
const Modal = ({ element,visible,closeModal,closingAnimation}) => {
    const modal = useRef(null);   
 
    useEffect(() => {   
        setTimeout(function () {
            modal.current.style.opacity = '1'; 
        }, 17) 
      
    }, [visible])
    useEffect(() => {
          modal.current.style.opacity = '0'; 
  }, [closingAnimation])
    return (
      <div className="modal" ref={modal}>
        <div className="modal-bg" onClick={closeModal}></div>
          {element }
        </div>
    )
}

export default Modal