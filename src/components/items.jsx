import Item from "./item";
import PropTypes from "prop-types";

const Items = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} value={item.value} />
      ))}
    </>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    })
  ),
};

export default Items;
