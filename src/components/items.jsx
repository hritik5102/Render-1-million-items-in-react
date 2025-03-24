import Item from "./item";

const Items = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} value={item.value} />
      ))}
    </>
  );
};

export default Items;
