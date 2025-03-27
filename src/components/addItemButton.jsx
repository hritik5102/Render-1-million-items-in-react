import PropTypes from "prop-types";

const AddItemButton = ({ addItem }) => {
  return (
    <button className="addItem" onClick={addItem}>
      Add new item 🧸
    </button>
  );
};

AddItemButton.propTypes = {
  addItem: PropTypes.func,
};

export default AddItemButton;
