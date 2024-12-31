import Image from "next/image";
import React from "react";

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <div>
      <Image
        src="/logo-cropped.png"
        alt="Zulu Tech"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Logo;
