import { SearchOutlined } from "@mui/icons-material";
import "./search.scss";

function Search() {
  return (
    <div className="search">
      <SearchOutlined className="search-icon" />
      <input type="text" />
    </div>
  );
}

export default Search;
