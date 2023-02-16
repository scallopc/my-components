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
}: IButton) {
  const handleSizeButton = () => {
    return (
      <>
        {/* switch (size) {
      case small:
        return (size = "small");
      case large:
        return (size = "large");
      default:
        size = "medium";
    } */}
        {small
          ? (size = "small")
          : large
          ? (size = "large")
          : (size = "medium")}
      </>
    );
  };

  const handleTypeButton = () => {
    return (
      <div>
        {outline ? (
          <Container
            type="outline"
            size={handleSizeButton}
            disabled={disabled}
            onClick={onClick}
          >
            <i className={icon} />
            <Span>{label}</Span>
          </Container>
        ) : text ? (
          <Container
            type="text"
            size={handleSizeButton()}
            disabled={disabled}
            onClick={onClick}
          >
            <i className={icon} />
            <Span>{label}</Span>
          </Container>
        ) : danger ? (
          <Container
            type="danger"
            size={handleSizeButton()}
            disabled={disabled}
            onClick={onClick}
          >
            <i className={icon} />
            <Span>{label}</Span>
          </Container>
        ) : (
          <Container
            type="primary"
            size={handleSizeButton()}
            disabled={disabled}
            onClick={onClick}
          >
            <i className={icon} />
            <Span>{label}</Span>
          </Container>
        )}
      </div>
    );
  };

  return handleTypeButton();
}
