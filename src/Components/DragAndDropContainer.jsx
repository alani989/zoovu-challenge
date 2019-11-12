import React, { Component } from "react";
import DragAndDrop from "./DragAndDrop";
import LogoSort from "./LogoSort";
import DropSlot from "./DropSlot";

const imagesPath = process.env.PUBLIC_URL + "/assets/";

let initOrderList = [];
let newList = [];

class DragAndDropContainer extends Component {
  createList = () => {
    let slots = [];
    this.props.letters.map((letter, i) => {
      return slots.push({
        content: (
          <DropSlot
            id={letter.id}
            key={`dropSlotKey-${i}`}
            allowDrop={this.allowDrop}
            drop={this.drop}
          />
        )
      });
    });
    return slots;
  };

  createNewList = () => {
    let slots = [];
    newList.map((listItem, i) => {
      return slots.push({
        content: listItem
      });
    });
    return slots;
  };

  allowDrop = e => {
    e.preventDefault();
  };

  getValueFromImg = img => {
    let n = img.indexOf("assets/");
    let value = img[n + 7];
    return value;
  };

  drop = e => {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    let droppedImg = document.getElementById(data);
    let dropSlot = e.target;
    // reveal card when dropped
    droppedImg.setAttribute("src", imagesPath + droppedImg.alt);
    dropSlot.appendChild(droppedImg);
    // change the FindMeCard
    this.props.updatePickedCards(droppedImg.id);
    // initial check for value dropped
    dropSlot.setAttribute("value", droppedImg.id);
    let dropSlotId = dropSlot.getAttribute("id");
    initOrderList.push({ slot: dropSlotId, value: droppedImg.id });
    // if all letters found, check order
    if (initOrderList.length === 5) {
      this.checkInitialOrder(initOrderList);
    }
    // add image to new sort list
    newList[this.getRank(dropSlotId)] = (
      <img
        src={droppedImg.src}
        className="card-img"
        onDragOver={e => this.allowDrop(e)}
        onDrop={e => this.drop(e)}
        value={this.getValueFromImg(droppedImg.src)}
        alt=""
      />
    );
  };

  getRank = id => {
    switch (id) {
      case "z":
        return 0;
      case "o":
        return 1;
      case "o2":
        return 2;
      case "v":
        return 3;
      case "u":
        return 4;
      default:
        return null;
    }
  };

  checkInitialOrder = list => {
    let check = 0;
    list.map(item => {
      if (item.slot === item.value) {
        check++;
      } else if (
        item.slot === "o" &&
        (item.value === "o" || item.value === "o2")
      ) {
        check++;
      } else if (
        item.slot === "o2" &&
        (item.value === "o" || item.value === "o2")
      ) {
        check++;
      }
      return null;
    });
    if (check === 5) {
      return this.props.endGame();
    } else {
      return false;
    }
  };

  render() {
    return initOrderList.length !== 5 ? (
      <DragAndDrop unrevealedLetters={this.props.unrevealedLetters} letters={this.props.letters} sortList={this.createList()} />
    ) : (
      <LogoSort sortList={this.createNewList()} endGame={this.props.endGame} />
    );
  }
}

export default DragAndDropContainer;
