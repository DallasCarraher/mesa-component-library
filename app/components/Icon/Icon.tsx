type IconProps = {
  svg: string;
  height: number;
  invert?: boolean;
};

export const Icon: React.FC<IconProps> = ({ svg, height, invert }) => {
  return (
    <span className="icon">
      <img
        src={svg}
        style={{
          height,
          filter: invert ? "invert(100%)" : undefined,
        }}
      />
    </span>
  );
};
