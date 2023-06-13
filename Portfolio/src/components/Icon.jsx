import * as icons from "lucide-react";
import PropTypes from "prop-types";

export const Icon = ({ name, color, size, strokeWidth }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} stroke-width={strokeWidth} />;
};

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};
