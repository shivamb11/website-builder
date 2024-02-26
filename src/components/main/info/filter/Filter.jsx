import "./filter.scss";

const filterOptions = [
  { name: "Top Relevant", value: "top-relevant" },
  { name: "Latest", value: "latest" },
];

function Filter() {
  return (
    <select className="filter">
      {filterOptions.map((item) => (
        <option value={item.value} key={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default Filter;
