import { ReactNode } from "react";

interface AlertProps {
    children: ReactNode;
    onButtonClick: () => void;
}

const Alert = ({children, onButtonClick} : AlertProps) => {
  return (
    // <div className="alert alert-primary">{children}</div>
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
        {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onButtonClick}></button>
    </div>
  )
}

export default Alert;