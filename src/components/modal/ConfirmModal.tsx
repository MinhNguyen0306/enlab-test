import React from 'react';
import "./ConfirmModal.scss";

interface ConfirmModalProps {
    message: string;
    onClose: () => void;
    onConfirmClick: () => void;
}

const ConfirmModal = (props: ConfirmModalProps) => {
    const { message, onConfirmClick, onClose } = props;

    return (
        <div className='modal'>
            <div className='modal__container'>
                <span className='modal__title'>{ message }</span>
                <div className='modal__button'>
                    <button type='button' className='btn-cancel' onClick={onClose}>
                        Cancel
                    </button>
                    <button type='button' className='btn-confirm' onClick={onConfirmClick}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal
