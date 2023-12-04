import { FC, MutableRefObject, ReactNode } from "react";

type Props = {
  sliderRef: MutableRefObject<HTMLDivElement | null>;
  getImageElements: () => ReactNode[];
  width: number;
};

export const Slider: FC<Props> = ({ sliderRef, width, getImageElements }) => {
  return (
    <div
      ref={sliderRef}
      style={{
        width,
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        transition: "all 1s ease-in-out",
      }}
    >
      {getImageElements()}
    </div>
  );
};
