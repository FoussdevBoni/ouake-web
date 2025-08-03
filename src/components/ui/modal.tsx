import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showCloseButton?: boolean;
  closeOnEscape?: boolean;
  closeOnOutsideClick?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnEscape = true,
  closeOnOutsideClick = true
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Définir la largeur du modal en fonction de la prop `size`
  const modalWidth = {
    sm: 'w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3',
    md: 'w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2',
    lg: 'w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/4',
  }[size];

  // Gestion de la touche Echap pour fermer le modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Empêcher le scroll du body quand le modal est ouvert
      document.body.style.overflow = 'hidden';
      
      // Focus sur le modal pour l'accessibilité
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, closeOnEscape]);

  // Gestion du clic extérieur
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOutsideClick && modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  // Si le modal n'est pas ouvert, ne rien rendre
  if (!isOpen) return null;

  // Utiliser createPortal pour rendre le modal à la racine du DOM
  // Cela garantit que le modal n'est pas affecté par les z-index des éléments parents
  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 flex items-center justify-center p-4"
      onClick={handleOutsideClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Conteneur du modal */}
      <div
        ref={modalRef}
        className={`${modalWidth} bg-white rounded-lg shadow-lg max-h-[90vh] overflow-hidden flex flex-col relative`}
        tabIndex={-1}
        style={{ 
          maxHeight: '90vh',
          zIndex: 10000,
        }}
      >
        {/* Header avec bouton de fermeture */}
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h2 id="modal-title" className="text-xl font-semibold">{title}</h2>
          {showCloseButton && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
              aria-label="Fermer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Contenu scrollable */}
        <div className="px-6 py-10 overflow-y-auto flex-1">{children}</div>

        {/* Footer */}
        <div className="px-6 py-4 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>,
    document.body // Le modal est rendu directement dans le body
  );
};

export default Modal;