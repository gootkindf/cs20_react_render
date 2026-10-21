import ColorGrid from "./ColorGrid";
import MyColors from "./MyColors";

export default function App() {
  return (
    <div className="app">
      <h1>Color Grid</h1>
      <ColorGrid colorArray={MyColors} />
    </div>
  );
}
