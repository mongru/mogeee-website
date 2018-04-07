import React from 'react';
// import Flip from 'react-reveal/Flip';


const WorkModal = ({
    history,
    onClose,
    isOpen,
    className,
    children,
    noBackdrop,
    works
}) => {


    const close = (e) => {
        e.preventDefault();
        if (onClose) {
            onClose();
        }
        // e.stopPropagation();
        // history.goBack();
    }

    if (isOpen === false)
        return null

    let modalStyle = {
        position: 'fixed',
        top: '50vh',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        background: '#fff',
        width: '80%',
        maxWidth: '768px',
        height: '80%',
        maxHeight: '768px',
        overflowY: 'scroll',
        borderRadius: '2%',
    }

    let backdropStyle = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, 0.3)'
    }

    return (
        <div>
            <div style={modalStyle}>
                {children}
            </div>
            {!noBackdrop && <div className="work__modal" style={backdropStyle} onClick={e => close(e)}/>}
        </div>
    );
}

export default WorkModal;
