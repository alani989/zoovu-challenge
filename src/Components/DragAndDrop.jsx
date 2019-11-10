import React from "react";
import DragSortableList from "react-drag-sortable";

const imagesPath = process.env.PUBLIC_URL + "/assets/";

const DragAndDrop = props => {
  const drawRandomCards = letters => {
    return letters.map((letter, i) => {
      return (
        <div
          className="drag-box"
          key={`drag-box-key-${i}`}
          onDrop={e => props.drop(e)}
          onDragOver={e => props.allowDrop(e)}
        >
          <img
            className="card-img"
            id={letter.id}
            src={`${imagesPath}question.jpg`}
            onDragStart={e => drag(e)}
            alt={letter.src}
          />
        </div>
      );
    });
  };

  const drag = e => {
    e.dataTransfer.setData("text", e.target.id);
  };

  const onSort = (sortedList, dropEvent) => {
    let newList = [];
    sortedList.map(letter => {
      newList.push(letter.id);
    });
    checkSort(newList);
  };

  const checkSort = arr => {
    let sorted = false;
    if (
      arr[0] === "z" &&
      arr[1] === "o" &&
      arr[2] === "o2" &&
      arr[3] === "v" &&
      arr[4] === "u"
    ) {
      sorted = true;
    }
    return sorted;
  };

  return (
    <div>
      <div className="row">{drawRandomCards(props.letters)}</div>
      <br />
      <hr />
      <DragSortableList
        items={props.sortList}
        onSort={onSort}
        type="horizontal"
      />
    </div>
  );
};

export default DragAndDrop;
