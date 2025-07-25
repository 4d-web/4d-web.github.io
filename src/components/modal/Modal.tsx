import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../store';
import Button from '../button/Button';
import { IModal } from '../../interfacesAndEnums/interfaces';

Modal.setAppElement('#root');

export default function ModalWindow(props: IModal) {
  const modals = useSelector((state: any) => state.modals.modals);
  const dispatch = useDispatch();
  const openedModalKey = Object.keys(modals).find((key) => modals[key] === 'open');

  const isOpen = openedModalKey === props.name;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      dispatch(closeModal(openedModalKey));
    }, 300); // час має збігатись із transition
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Modal"
      style={{
        content: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: '2rem',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: animate ? 1 : 0,
          transform: animate ? 'scale(1)' : 'scale(0.95)',
        },
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 999,
          transition: 'opacity 0.3s ease',
          opacity: animate ? 1 : 0,
        },
      }}
    >
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {props?.title ? <h2>{props.title}</h2> : null}
          <Button icon="BsXLg" onClick={handleClose} />
        </div>
        {props.children ? props.children : null}
      </div>
    </Modal>
  );
}
