import { ReactNode, createContext, useEffect, useState } from 'react';

interface AlertDialogContextProps {
  isOpen: boolean;
  show: (msg: string) => void;
  message: string;
}

interface AlertDialogProviderProps {
  children: ReactNode;
}

const AlertDialogContext = createContext<AlertDialogContextProps>({
  isOpen: false,
  show: () => null,
  message: '',
});

const AlertDialogProvider = ({ children }: AlertDialogProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 1050);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const show = (message: string) => {
    setIsOpen(true);
    setMessage(message);
  };

  const value = {
    message,
    isOpen,
    show,
  };

  return (
    <AlertDialogContext.Provider value={value}>
      {children}
    </AlertDialogContext.Provider>
  );
};

export { AlertDialogContext, AlertDialogProvider };
