import "../modal.css"

const Modal = ({children, isOpen, closeModal}) => {
    return (
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container">
                <button classname="modal-close" onClick={closeModal}><i className="fa-solid fa-xmark modal-close"></i></button>
                {children}
            </div>
        </article>
    );
};

export default Modal;