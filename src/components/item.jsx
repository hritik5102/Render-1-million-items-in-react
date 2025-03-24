const Item = ({ value }) => {
  return (
    <div>
      <figure>
        <img
          src={`https://picsum.photos/200?random=${value}`}
          width={200}
          height={200}
          alt="picsum photos"
        />
        <figcaption>
          <p className="item">{value}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Item;
