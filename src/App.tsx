import { useRef } from "react";

import { useImage } from "./hooks/useImage";

import { Slider } from "./components/Slider";
import { VisibleArea } from "./components/VisibleArea";

function App() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { VISIBLE_AREA_WIDTH, slideWidth, getImageElements } = useImage();

  return (
    <VisibleArea width={VISIBLE_AREA_WIDTH} height={400}>
      <Slider
        sliderRef={sliderRef}
        width={slideWidth}
        getImageElements={getImageElements}
      />
    </VisibleArea>
  );
}

export default App;
