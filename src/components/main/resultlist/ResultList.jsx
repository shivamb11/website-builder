import "./resultlist.scss";
import ResultItem from "./resultitem/ResultItem.jsx";

const results = [
  {
    id: 1,
    performance: "Best Choice",
    name: "Builder 1",
    title: "WixPro 72-Inch Responsive Website Builder",
    detail:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    mainHighlights:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.8,
    review: "Exceptional",
    stars: 5,
  },
  {
    id: 2,
    performance: "Best Value",
    name: "Builder",
    title: "SiteCraft 68-Inch Ultimate Web Design Studio",
    detail:
      "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    mainHighlights:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating: 9.5,
    review: "Excellent",
    stars: 4.5,
  },
  {
    id: 3,
    name: "Builder 1",
    title: "WixPro 72-Inch Responsive Website Builder",
    detail:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    mainHighlights:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.3,
    review: "Exceptional",
    stars: 5,
  },
  {
    id: 4,
    name: "CDK",
    title: "CDK Resposive Builder",
    detail:
      "An extensive library of widgets and apps, and detailed step-by-step guides",
    mainHighlights: [
      { points: 9.9, quality: "Building Responsive" },
      { points: 8.9, quality: "Cool" },
      { points: 8.9, quality: "Docs" },
    ],
    whyWeLoveIt: ["Documentation", "Easy Use", "Out Of Box"],
    rating: 9.1,
    review: "Very Good",
    stars: 4,
  },
];

function ResultList() {
  return (
    <ul className="result-list">
      {results.map((item) => (
        <ResultItem result={item} key={item.id} />
      ))}
    </ul>
  );
}

export default ResultList;
