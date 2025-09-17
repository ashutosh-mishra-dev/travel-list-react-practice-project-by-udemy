export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! redy to go ✈️"
          : `💼You have ${numItem} item on your list, and you already packed${" "}
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
