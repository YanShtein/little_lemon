import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useSearch = ({ search }) => {
  const { menuData } = useContext(AppContext);

  function handleSearch() {
    let filteredItems = menuData.filter(item => {
      if (search === '') {
        return item;
      } else {
        return (
          item.dishUpper.toLowerCase().includes(search.toLowerCase())
        )
      }
    });

    return filteredItems;
  };

  return { handleSearch };
};

export default useSearch;