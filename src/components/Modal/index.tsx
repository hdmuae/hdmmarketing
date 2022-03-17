import * as React from "react";
import Image from "next/image";
import ReactDOM from "react-dom";

interface myProps {
  show: boolean;
  title?: string;
  children: any;
  onClose: () => void;
  setShowModal: (arg: boolean) => void;
}

const Modal: React.FC<myProps> = ({
  show,
  title,
  children,
  onClose,
  setShowModal,
}) => {
  const [isBrowser, setIsBrowser] = React.useState(false);

  React.useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };
  const ref = React.createRef<any>();

  React.useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (ref.current && ref.current.id === e.target.id) {
        setShowModal(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [show]);

  const modalContent = show ? (
    <div
      ref={ref}
      id="modal"
      className="absolute top-0 left-0 z-30 flex h-full w-full items-center justify-center"
    >
      <div className="mt-32 h-[670px] w-11/12 overflow-hidden rounded-xl bg-white p-4 shadow-sm lg:mt-0 lg:w-[500px]">
        <div className="flex justify-end text-lg">
          <button onClick={handleCloseClick}>
            <Image
              src="/svg/close.svg"
              width={25}
              height={25}
              alt="close icon"
            />
          </button>
        </div>
        {title && <div className="text-center text-lg">{title}</div>}
        <div className="pt-4">{children}</div>
      </div>
    </div>
  ) : null;

  return isBrowser
    ? ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root") as HTMLElement
      )
    : null;
};

export default Modal;
