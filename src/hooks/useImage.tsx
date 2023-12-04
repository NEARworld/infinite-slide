import { useMemo, useRef } from "react";

const images = [
  {
    id: 1,
    src: "first.jpeg",
  },
  {
    id: 2,
    src: "second.jpeg",
  },
  {
    id: 3,
    src: "third.jpeg",
  },
];

const VISIBLE_AREA_WIDTH = 1200;

export const useImage = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const updatedImages: { id: number; src: string }[] = useMemo(() => {
    return images.concat({ id: images.length + 1, src: images[0].src });
  }, []);

  const getImageElements = () => {
    return updatedImages.map((image) => (
      <div
        key={image.id}
        style={{
          width: 1200,
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${image.src})`,
        }}
      />
    ));
  };

  return {
    sliderRef,
    VISIBLE_AREA_WIDTH,
    slideWidth: updatedImages.length * VISIBLE_AREA_WIDTH,
    getImageElements,
  };
};
