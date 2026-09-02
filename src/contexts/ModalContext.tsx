"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isContactModalOpen: boolean;
  selectedTypology?: string;
  openContactModal: (typology?: unknown) => void;
  closeContactModal: () => void;
  isBrochureModalOpen: boolean;
  openBrochureModal: () => void;
  closeBrochureModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedTypology, setSelectedTypology] = useState<string | undefined>(undefined);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const openContactModal = (typology?: unknown) => {
    setSelectedTypology(typeof typology === 'string' ? typology : undefined);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setSelectedTypology(undefined);
  };

  return (
    <ModalContext.Provider
      value={{
        isContactModalOpen,
        selectedTypology,
        openContactModal,
        closeContactModal,
        isBrochureModalOpen,
        openBrochureModal: () => setIsBrochureModalOpen(true),
        closeBrochureModal: () => setIsBrochureModalOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

