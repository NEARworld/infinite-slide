import { VisibleArea } from "./components/VisibleArea";
import { Slider } from "./components/Slider";

function App() {
  return (
    <VisibleArea width={1200} height={400}>
      <Slider />
    </VisibleArea>
  );
}

export default App;
