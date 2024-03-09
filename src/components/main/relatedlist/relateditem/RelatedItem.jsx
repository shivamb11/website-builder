import "./relateditem.scss";

const IMG_URL = "images/web.png";

function RelatedItem({ related }) {
  return (
    <li className="related-item">
      <div>
        <img src={IMG_URL} alt="" />
      </div>
      <div className="labels">
        {related.labels.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <p className="name">{related.name}</p>
      <p>{related.detail}</p>
      <div className="price">
        <p className="discounted-price">${related.discountedPrice}</p>
        <p className="actual-price">${related.actualPrice}</p>
        <p className="discount">({related.discount}% Off)</p>
      </div>
      <button>View deal</button>
    </li>
  );
}

export default RelatedItem;
