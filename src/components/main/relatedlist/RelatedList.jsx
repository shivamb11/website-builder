import "./relatedlist.scss";
import RelatedItem from "./relateditem/RelatedItem.jsx";
import Subtitle from "./subtitle/Subtitle.jsx";

const related = [
  {
    id: 1,
    labels: ["20% Off", "Limited time"],
    name: "Web builder1",
    detail: "Computer  Modern clasic with wix support",
    discountedPrice: 39.96,
    actualPrice: 49.96,
    discount: 20,
  },
  {
    id: 2,
    labels: ["20% Off", "Limited time"],
    name: "Web builder2",
    detail: "Computer  Modern clasic with wix support",
    discountedPrice: 39.96,
    actualPrice: 49.96,
    discount: 20,
  },
  {
    id: 3,
    labels: ["20% Off", "Limited time"],
    name: "Web builder3",
    detail: "Computer  Modern clasic with wix support",
    discountedPrice: 39.96,
    actualPrice: 49.96,
    discount: 20,
  },
  {
    id: 4,
    labels: ["20% Off", "Limited time"],
    name: "Web builder3",
    detail: "Computer  Modern clasic with wix support",
    discountedPrice: 39.96,
    actualPrice: 49.96,
    discount: 20,
  },
];

function RelatedList() {
  return (
    <div className="related">
      <Subtitle />
      <ul>
        {related.map((item) => (
          <RelatedItem related={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default RelatedList;
