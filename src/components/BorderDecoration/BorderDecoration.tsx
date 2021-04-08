import { SC_BORDERDECORATION } from  './BorderDecoration.styles';

interface IBorderDecorationProps {
  position: string;
  size: string;
}

const BorderDecoration: React.FC<IBorderDecorationProps> = ({ position, size, children }) => (
  <SC_BORDERDECORATION
    className="BorderDecoration"
    position={position}
    size={size}
    data-testid="BorderDecoration"
  >
    { children }
  </SC_BORDERDECORATION>
);

export default BorderDecoration;