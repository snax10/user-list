import type { ReactNode } from "react";
import { CloseButton, ModalContainer, ModalOverlay } from './Modal.styles';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={handleOverlayClick}>
            <ModalContainer>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {children}
            </ModalContainer>
        </ModalOverlay>
    );
};
