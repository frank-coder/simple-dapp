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
          <a href={`${hash}`}>You can view transaction here</a>
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

export function FailureModal({ isOpen, onClose }: {isOpen:boolean, onClose: () => void}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Error</ModalHeader>
        <ModalBody>
          Oops! Something went wrong. Please try again.
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
