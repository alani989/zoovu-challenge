import React, { useMemo } from "react";
import DragSortableList from "react-drag-sortable";

const LogoSort = props => {
  const onSort = (sortedList, e) => {
    processSort(sortedList);
  };

  const processSort = sortedList => {
    let z =
      sortedList[0].rank === 0 && sortedList[0].content.props.value === "z";
    let v =
      sortedList[3].rank === 3 && sortedList[3].content.props.value === "v";
    let u =
      sortedList[4].rank === 4 && sortedList[4].content.props.value === "u";
    // ignore O as it is the same letter for two indexes
    if (z && v & u) {
      return props.endGame();
    } else {
      return null;
    }
  };

  const renderComponent = useMemo(() => {
    return (
      <div className="container m-5">
        <div className="row">
          <h4>Please Sort</h4>
        </div>
        <hr />
        <div className="row">
          <DragSortableList
            items={props.sortList}
            onSort={onSort}
            type="horizontal"
          />
        </div>
      </div>
    );
  }, []);

  return renderComponent;
};

export default LogoSort;
