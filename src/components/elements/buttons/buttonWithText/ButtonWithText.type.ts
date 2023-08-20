export type ButtonWithTextStyledProps = {
  $size: "regular" | "half";
  $type: "primary" | "secondary" | "normal";
};

export type ButtonWithTextComponentProps = {
  size: "regular" | "half";
  type: "primary" | "secondary" | "normal";
  handleOnClick: () => void;
};
