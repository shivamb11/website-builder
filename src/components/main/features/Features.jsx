import "./features.scss";

const features = [
  "Tools",
  "AWS Builder",
  "Start Build",
  "Build Supplies",
  "Tooling",
  "BlueHosting",
];

function Features() {
  return (
    <div className="features">
      {features.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default Features;
