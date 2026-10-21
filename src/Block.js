// One block: bgcolor is a prop, the number is the child
export default function Block({ bgcolor, children }) {
  return (
    <div
      className="block"
      style={{ "--bg": bgcolor }}
      onClick={() => alert(children)}
    >
      {children}
    </div>
  );
}
