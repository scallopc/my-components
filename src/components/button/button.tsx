import { Container, Span } from "./styles";

export type IButton = {
  //children?: React.ReactNode;
  icon?: string;
  size?: any;
  isLoading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: any;
  label?: string;
  primary?: boolean;
  outline?: boolean;
  text?: boolean;
  danger?: boolean;
  small?: boolean;
  large?: boolean;
  medium?: boolean;
  variant?: "primary" | "outline" | "text" | "danger";
};

export default function Button({
  size,
  disabled,
  onClick,
  icon,
  label,
  type,
  outline,
  text,
  danger,
  small,
  large,
  primary,
  variant
}: IButton) {

  // const handleTypeButton = () => {
  //   return (
  //     <div>
  //       {outline ? (
  //         <Container
  //           type="outline"
  //           size={handleSizeButton}
  //           disabled={disabled}
  //           onClick={onClick}
  //         >
  //           <i className={icon} />
  //           <Span>{label}</Span>
  //         </Container>
  //       ) : text ? (
  //         <Container
  //           type="text"
  //           size={handleSizeButton()}
  //           disabled={disabled}
  //           onClick={onClick}
  //         >
  //           <i className={icon} />
  //           <Span>{label}</Span>
  //         </Container>
  //       ) : danger ? (
  //         <Container
  //           type="danger"
  //           size={handleSizeButton()}
  //           disabled={disabled}
  //           onClick={onClick}
  //         >
  //           <i className={icon} />
  //           <Span>{label}</Span>
  //         </Container>
  //       ) : (
  //         <Container
  //           type="primary"
  //           size={handleSizeButton()}
  //           disabled={disabled}
  //           onClick={onClick}
  //         >
  //           <i className={icon} />
  //           <Span>{label}</Span>
  //         </Container>
  //       )}
  //     </div>
  //   );
  // };

  return (
    <Container variant={variant} size={size} disabled={disabled} onClick={onClick}>
      <i className={icon} />
      <Span>{label}</Span>
    </Container>
  );
}
