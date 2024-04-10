import { ReactNode } from "react";

type ImageProps = {
  className?: string;
  src: string;
  alt: string;
  rest?: ReactNode;
  height?: number;
  width?: number;
};

export function Image({ className, src, alt, ...rest }: ImageProps) {
  return (
    <img
      className={className}
      loading="lazy"
      fetchPriority="high"
      src={src}
      alt={alt}
      {...rest}
    />
  );
}
