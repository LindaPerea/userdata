// import ReactDOM from 'react-dom/client'
import ReactDOM from "react-dom";
import "../modal.css"

const ModalPortal = ({ children, isOpen, closeModal }) => {
    const handleModalContainerClick = (e) => e.stopPropagation();

    return ReactDOM.createPortal(
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                
                    <button classname="modal-close" onClick={closeModal}><i className="fa-solid fa-xmark modal-close"></i></button>
                
                {children}
            </div>
        </article>,
        document.getElementById("modal")
    );
};

export default ModalPortal;