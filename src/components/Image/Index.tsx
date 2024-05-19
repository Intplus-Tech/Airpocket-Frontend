import { ReactNode } from "react";

type ImageProps = {
  className?: string;
  src: string;
  alt: string;
  rest?: ReactNode;
  height?: number;
  width?: number;
  handleError?: () => void;
  handleLoad?: () => void;
};

export function Image({ className, src, alt, ...rest }: ImageProps) {
  // const handleLoad = () => {
  //   setLoading(false); // Set loading state to false when the image is successfully loaded
  // };

  // const handleError = () => {
  //   setLoading(false); // Set loading state to false if there's an error loading the image
  //   // You can also handle the error here if needed
  // };

  return (
    <div className="flex">
      {/* {loading && (
        <div className="w-full flex items-center justify-center">
          Loading...
        </div>
      )} */}
      <img
        className={className}
        loading="lazy"
        src={src}
        alt={alt}
        // onLoad={handleLoad}
        // onError={handleError}
        {...rest}
        // style={{ display: loading ? "none" : "block" }}
      />
    </div>
  );
}

//made teh onload functiona a prop and add a skeleton loader when it's not loaded yet
