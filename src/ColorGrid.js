import Block from "./Block";

export default function ColorGrid({ colorArray }) {
  return (
    <div className="grid">
      {colorArray.map((c) => (
        <Block key={c.value} bgcolor={c.color}>
          {c.value}
        </Block>
      ))}
    </div>
  );
}
