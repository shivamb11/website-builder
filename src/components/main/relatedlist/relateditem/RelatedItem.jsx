import "./relateditem.scss";

const IMG_URL =
  "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__";

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
