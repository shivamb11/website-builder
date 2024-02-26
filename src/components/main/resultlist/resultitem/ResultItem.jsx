import {
  CheckCircleTwoTone,
  DiamondOutlined,
  EmojiEventsOutlined,
  KeyboardArrowDownOutlined,
  Star,
  StarBorder,
  StarHalf,
} from "@mui/icons-material";
import "./resultitem.scss";

const IMG_URL =
  "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__";

function ResultItem({ result }) {
  const stars = result.stars;

  const starsArr = Array.from({ length: 5 }, (_, i) => {
    return stars - i >= 1 ? 1 : stars - i >= 0 ? 0.5 : 0;
  });

  return (
    <li className="result-item">
      {result.performance && (
        <div className="performance">
          {result.performance === "Best Choice" ? (
            <EmojiEventsOutlined />
          ) : (
            <DiamondOutlined />
          )}
          <p>{result.performance}</p>
        </div>
      )}
      <div className="id">
        <p>{result.id}</p>
      </div>
      <div className="visual">
        <img src={IMG_URL} alt="" />
        <h4>{result.name}</h4>
      </div>
      <div className="description">
        <p>
          <span className="bold">{result.title}</span>- {result.detail}
        </p>
        <p className="bold">Main highlights</p>
        {typeof result.mainHighlights === "string" ? (
          <p>{result.mainHighlights}</p>
        ) : (
          <div className="key-highlights">
            {result.mainHighlights.map((item) => (
              <p key={item.quality}>
                <span>{item.points}</span>
                {item.quality}
              </p>
            ))}
          </div>
        )}
        {result.whyWeLoveIt && (
          <div className="why-we-love-it">
            <p>Why we love it</p>
            {result.whyWeLoveIt?.map((item, i) => (
              <p key={i}>
                <CheckCircleTwoTone className="circle-tick" />
                {item}
              </p>
            ))}
          </div>
        )}
        <p className="show-more">
          <button>Show more</button>
          <KeyboardArrowDownOutlined />
        </p>
      </div>
      <div className="views">
        <div>
          <p className="rating">{result.rating}</p>
          <p className="review">{result.review}</p>
          <p>
            {starsArr.map((item, i) =>
              item === 1 ? (
                <Star key={i} className="stars" />
              ) : item === 0.5 ? (
                <StarHalf key={i} className="stars" />
              ) : (
                <StarBorder key={i} className="stars" />
              )
            )}
          </p>
        </div>
        <button className="view">View</button>
      </div>
    </li>
  );
}

export default ResultItem;
