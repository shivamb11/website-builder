import "./country.scss";

const countryOptions = [
  { id: 1, name: "United States" },
  { id: 2, name: "India" },
];

function Country() {
  return (
    <select className="country-select">
      {countryOptions.map((item) => (
        <option key={item.id}>{item.name}</option>
      ))}
    </select>
  );
}

export default Country;
