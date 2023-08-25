import Modal from 'react-modal';

const customStyles = {
  overlay: { zIndex: 2 },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalItem = ({ onOpen, onClose, children }) => {
  return (
    <Modal isOpen={onOpen} onRequestClose={onClose} style={customStyles}>
      {children}
    </Modal>
  );
};
