import "./footerlistbody.scss";

function FooterListBody({ body, font }) {
  return (
    <ul className="footer-list-body">
      {body.map((item) => (
        <li key={item} className={font}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default FooterListBody;
