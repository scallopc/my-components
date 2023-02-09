import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  Ref,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import "./styles.css";

const Icon: FC<PropsWithChildren> = ({ children }) => (
  <i className="fa-solid fa-user">{children}</i>
);

function useOnClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: MouseEventHandler<HTMLButtonElement>
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className={`dropdown ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <i className="fa-solid fa-user"/> <FontAwesomeIcon icon={faUser} />
        <span>Jason Smith</span>
        {isOpen ? <FontAwesomeIcon icon={faUser} /> : <FontAwesomeIcon icon={faXmark} />}
      </button>
      <div className="menu">
        <button>
        <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </button>
        <button>
        <FontAwesomeIcon icon={faUser} />
          <span>Settings</span>
        </button>
        <button>
        <FontAwesomeIcon icon={faUser} />
          <span>Account</span>
        </button>
      </div>
    </div>
  );
};
