import Country from "./country/Country.jsx";
import FooterList from "./footerlist/FooterList.jsx";
import "./footer.scss";

const footer = [
  {
    header: "Categories",
    body: ["Web Builder", "Hosting", "Data Center", "Robotic-Automation"],
  },
  {
    header: "Contact",
    body: [
      "Contact",
      "Privacy Policy",
      "Terms Of Service",
      "Robotic-Automation",
      "Categories",
      "About",
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      {footer.map((item) => (
        <FooterList item={item} key={item.header} />
      ))}
      <Country />
    </footer>
  );
}

export default Footer;
