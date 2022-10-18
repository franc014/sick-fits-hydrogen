import { Image } from "@shopify/hydrogen";
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
  const {
    isOpen,
    inputValue,
    getInputProps,
    getComboboxProps,
    getItemProps,
    getMenuProps,
  } = useCombobox({
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
      console.log(items);
    },
    onSelectedItemChange({ selectedItem }) {},
    itemToString: (item) => item?.name || "",
  });

  return (
    <div className="grid bar-box layout-subbar-grid relative ">
      <div {...getComboboxProps()} className="shadow-md">
        <input
          {...getInputProps({
            type: "search",
            placeholder: "Search for an item",
            id: "search",
            className:
              "w-full p-3 b-0 text-3xl  focus:outline focus:outline-red-100 focus:outline-offset-2 ",
          })}
        />
      </div>
      <ul
        {...getMenuProps()}
        className="absolute top-[60px] w-full z-30  left-0 border border-stone-300 bg-white text-stone-600"
      >
        {items.map((item, index) => {
          console.log({ item });
          return (
            <li
              className="p-4 flex items-center border-b border-red-100 "
              key={item.id}
              {...getItemProps({ item })}
            >
              <Image
                data={item.featuredImage}
                className="object-fit w-16 h-16 mr-4"
              />

              {item.title}
            </li>
          );
        })}
        {isOpen && !items.length && (
          <div>Sorry no items found for {inputValue}</div>
        )}
      </ul>
    </div>
  );
}

export default Search;
