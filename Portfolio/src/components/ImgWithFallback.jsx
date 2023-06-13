import PropTypes from "prop-types";

export const ImgWithFallback = ({
  src,
  fallback,
  type = "image/webp",
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} {...delegated} />
    </picture>
  );
};

ImgWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  fallback: PropTypes.string.isRequired,
  type: PropTypes.string,
};
