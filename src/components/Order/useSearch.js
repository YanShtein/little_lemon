import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useSearch = ({ search }) => {
  const { dishData } = useContext(AppContext);

  function handleSearch() {
    let filteredItems = dishData.filter(item => {
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