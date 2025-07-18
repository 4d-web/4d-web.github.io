import React from 'react';
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
  console.log('openedModalKey', openedModalKey, openedModalKey === props.name);

  return (
    <Modal
      isOpen={openedModalKey === props.name}
      onRequestClose={() => dispatch(closeModal(openedModalKey))}
      contentLabel="Modal"
      style={{
        content: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: '2rem',
        },
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 999,
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
          <Button icon="BsXLg" onClick={() => dispatch(closeModal(openedModalKey))} />
        </div>
        {props.children ? props.children : null}
      </div>
    </Modal>
  );
}
