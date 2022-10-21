import { Image, useNavigate } from "@shopify/hydrogen";
import { resetIdCounter, useCombobox } from "downshift";
import { useState } from "react";

function Search() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  resetIdCounter();
  const {
    isOpen,
    inputValue,
    getInputProps,
    getComboboxProps,
    getItemProps,
    getMenuProps,
    highlightedIndex,
    closeMenu,
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
    },
    onSelectedItemChange({ selectedItem }) {
      navigate(`products/${selectedItem.handle}`);
    },
    itemToString: (item) => item?.title || "",
  });

  return (
    <div className="grid bar-box layout-subbar-grid relative ">
      <div
        {...getComboboxProps()}
        className="shadow-md flex justify-between items-center relative"
      >
        <input
          {...getInputProps({
            type: "search",
            placeholder: "Search for an item",
            id: "search",
            className:
              "w-full p-3 b-0 text-3xl  focus:outline focus:outline-red-100 focus:outline-offset-2 ",
          })}
        />
        {isOpen && (
          <button
            aria-label="clear selection"
            className="absolute right-4 top-3   pb-1 px-2 rounded-full flex items-center justify-center bg-red-600 text-white w-8 h-8 mr-4"
            type="button"
            onClick={() => {
              closeMenu();
            }}
            tabIndex={-1}
          >
            <span className="justify-center text-lg">&#215;</span>
          </button>
        )}
      </div>
      <ul
        {...getMenuProps()}
        className="absolute top-[60px] w-full z-30  left-0 border border-stone-300 bg-white text-stone-600"
      >
        {isOpen &&
          items.map((item, index) => {
            return (
              <li
                className={`p-4 flex items-center border-b
               border-red-100 ${
                 index === highlightedIndex ? "bg-red-100" : ""
               }`}
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
