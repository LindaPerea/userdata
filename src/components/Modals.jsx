import Modal from './Modal';
import React from 'react';
import { UseModal } from '../hooks/UseModal';
import ModalPortal from './ModalPortal';

const Modals = () => {
    // const [ isOpenModal1, openModal1, closeModal ] = UseModal(false);
    const [isOpenPortal, openModalPortal, closeModalPortal] = UseModal(true);
    return (
        <div>

            {/* <button onClick={openModal1}>Modal1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal}> */}

            <button onClick={openModalPortal}></button>
            <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>

                <div className='center-i'>
                    <h3>Welcome, enter your data</h3>
                    </div>
                    <div className='button-eject-modal-portal'>
                        {/* <i className="fa-solid fa-eject"></i> */}
                    </div>
                

                {/* <img src="https://placeimg.com/100/100/animals"/> */}

            </ModalPortal>
        </div>
    );
};

export default Modals;