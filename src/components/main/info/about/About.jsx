import { CheckCircleOutline, InfoOutlined } from "@mui/icons-material";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <div>
        <CheckCircleOutline />
        <span>Last Updated - February 22, 2020</span>
      </div>
      <div>
        <InfoOutlined />
        <span>Advertising Discloure</span>
      </div>
    </div>
  );
}

export default About;
