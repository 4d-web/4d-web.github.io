import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '@/store';
import Button from '@/components/button/Button';
import { IModal } from '@/interfacesAndEnums/interfaces';
import * as cStyles from './Modal.module.scss';
import { cn } from '@/utils/main';
import crashAviator from '@/apps/crashAviator/game';
import { EModalAppearance } from '@/interfacesAndEnums/enums';

Modal.setAppElement('#root');

export default function ModalWindow(props: IModal) {
  const modals = useSelector((state: any) => state.modals.modals);
  const dispatch = useDispatch();
  const openedModalKey = Object.keys(modals).find((key) => modals[key] === 'open');

  const isOpen = openedModalKey === props.name;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setAnimate(true);
        crashAviator();
      }, 10);
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
      shouldCloseOnOverlayClick={true}
      htmlOpenClassName="noScroll"
      portalClassName={cn([
        'ReactModalPortal',
        cStyles.modal,
        props.appearance === EModalAppearance.FULLSCREEN ? EModalAppearance.FULLSCREEN : '',
      ])}
      overlayClassName={cn(cStyles.modalOverlay)}
      className={cn(cStyles.modalContent)}
      style={{
        content: {
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: animate ? 1 : 0,
          transform: animate ? 'scale(1)' : 'scale(0.95)',
        },
        overlay: {
          transition: 'opacity 0.3s ease',
          opacity: animate ? 1 : 0,
        },
      }}
    >
      <div className={cn([cStyles.modalWrapper])}>
        <div className={cn([cStyles.modalHeader])} style={{}}>
          {props?.title ? <h2>{props.title}</h2> : null}
          <Button icon="BsXLg" onClick={handleClose} />
        </div>
        <div className={cn([cStyles.modalBody])}>{props.children ? props.children : null}</div>
      </div>
    </Modal>
  );
}
