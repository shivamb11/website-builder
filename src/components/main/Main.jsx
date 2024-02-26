import Categories from "./cateogories/Categories.jsx";
import Features from "./features/Features.jsx";
import Hr from "./hr/Hr.jsx";
import Info from "./info/Info.jsx";
import RelatedList from "./relatedlist/RelatedList.jsx";
import ResultList from "./resultlist/ResultList.jsx";
import Signup from "./signup/Signup.jsx";
import Title from "./title/Title.jsx";
import "./main.scss";

function Main() {
  return (
    <main className="main">
      <Title />
      <Hr />
      <Info />
      <Hr />
      <Features />
      <Categories />
      <ResultList />
      <RelatedList />
      <Signup />
    </main>
  );
}

export default Main;
