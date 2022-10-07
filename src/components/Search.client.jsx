import { resetIdCounter, useCombobox } from "downshift";
import { useState } from "react";

/* const PRODUCTS_SEARCH_QUERY = gql`
  query productsSearchQuery($first: Int!, $searchTerm: String!) {
    products(first: $first, query: $searchTerm) {
      nodes {
        id
        title
        description
        featuredImage {
          url
          width
          height
          altText
        }
      }
    }
  }
`; */

function Search() {
  const [items, setItems] = useState([]);
  const { isOpen, inputValue, getInputProps, getComboboxProps, getItemProps } =
    useCombobox({
      items,
      async onInputValueChange() {
        const result = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            searchTerm: inputValue,
          }),
        });
        const { data } = await result.json();

        setItems(data.nodes);
      },
      onSelectedItemChange({ selectedItem }) {},
      itemToString: (item) => item?.name || "",
    });

  return (
    <div className="grid bar-box layout-subbar-grid relative">
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: "search",
            placeholder: "Search for an item",
            id: "search",
            className: "w-full p-3 b-0 text-3xl",
          })}
        />
      </div>
    </div>
  );
}

export default Search;
