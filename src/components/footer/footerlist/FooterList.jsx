import "./footerlist.scss";
import FooterListBody from "./footerlistbody/FooterListBody.jsx";
import FooterListHeader from "./footerlistheader/FooterListHeader.jsx";

function FooterList({ item }) {
  return (
    <ul className="footer-list">
      <FooterListHeader header={item.header} />
      <FooterListBody
        body={item.body}
        font={item.header === "Contact" ? "md" : "small"}
      />
    </ul>
  );
}

export default FooterList;
