import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

export function SuccessModal({ isOpen, onClose, hash }: {isOpen:boolean, onClose: () => void, hash:string | undefined}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Success</ModalHeader>
        <ModalBody>
          <a href={`https://bscscan.com/tx/${hash}`} target='_blank'><u>You can view transaction here</u></a>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export function FailureModal({ isOpen, onClose, message }: {isOpen:boolean, onClose: () => void, message: string}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Error</ModalHeader>
        <ModalBody>
          Oops! Something went wrong. Please try again.
          {message}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
