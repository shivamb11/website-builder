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

const IMG_URL = "images/web.png";

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
