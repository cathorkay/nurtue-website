/* eslint-disable @next/next/no-img-element */

const PUBLIC_IMAGE_URL = "./images";

const MyImage: React.FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = (props) => {
  const { alt, src, ...restProps } = props;

  return src?.endsWith(".svg") ? (
    <img {...restProps} src={`${PUBLIC_IMAGE_URL}/${src}`} alt={alt} />
  ) : (
    <picture {...restProps}>
      <source type="image/webp" src={`${PUBLIC_IMAGE_URL}/${src}.webp`} />
      <img {...restProps} src={`${PUBLIC_IMAGE_URL}/${src}`} alt={alt} />
    </picture>
  );
};

export default MyImage;
