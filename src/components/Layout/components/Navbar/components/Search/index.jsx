import cn from "./style.module.scss";

const Search = () => {
  return (
    <div className={cn.Search}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
