import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  productId?: string; // Include productId prop
  onClose: () => void;
}

const Modal = ({ children, show, productId, onClose }: ModalProps) => {
  const router = useRouter();

  const handleClose = () => {
    onClose();
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/80" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="relative bg-white rounded-2xl p-4 sm:p-6 w-full max-w-lg">
              {children}
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
