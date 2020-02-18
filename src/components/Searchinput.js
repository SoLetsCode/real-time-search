import React from "react";

function SearchInput(prop) {
  function onKeyUp(event) {
    prop.setSearchCriteria(event.target.value);
    prop.setSearchField(
      searchHighlights(prop.originalField, event.target.value)
    );
  }

  function searchHighlights(text, criteria) {
    if (criteria === "") {
      return text;
    }
    let regExp = new RegExp(`${criteria}`, "g");
    let tempJSXArray = [];
    let tempArray = text.split(regExp);
    for (let i = 0; i < tempArray.length; i++) {
      tempJSXArray.push(tempArray[i]);
      if (i < tempArray.length - 1) {
        tempJSXArray.push(
          <span className="search-field__highlight">{criteria}</span>
        );
      }
    }
    return tempJSXArray;
  }

  return (
    <div className="search-input">
      <h2 className="search-input__title">Start Searching!</h2>
      <form
        action=""
        className="search-input__form"
        autoComplete="off"
        onKeyUp={onKeyUp}
      >
        <input className="search-input__box" type="text" name="usersearch" />
      </form>
    </div>
  );
}

export default SearchInput;
