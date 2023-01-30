import React from "react";
import { useState } from "react";
var fruits = [
  {
    name: "Apple",
    isChecked: false,
  },
  {
    name: "pineapple",
    isChecked: false,
  },
  {
    name: "peach",
    isChecked: false,
  },
  {
    name: "banana",
    isChecked: false,
  },
  {
    name: "orange",
    isChecked: false,
  },
  {
    name: "cherry",
    isChecked: false,
  },

  {
    name: "grape",
    isChecked: false,
  },

  {
    name: "strawberry",
    isChecked: false,
  },

  {
    name: "mango",
    isChecked: false,
  },

  {
    name: "kiwi",
    isChecked: false,
  },
];
let list = {
  display: "flex",
  gap: "2rem",
  color: "red",
};
const ListWithDel = () => {
  const [ArrayItems, setArrayItems] = useState(fruits);
  const [HideDelete, setHideDelete] = useState(true);
  const [checked, setChecked] = useState(fruits);

 
let deleteObj = (obj, item) => {
  const updatedData = obj.filter((obj) => obj.name !== item);;
  return updatedData;
};
  let onDelete = (ele) => {
    console.log("onclick Triggered");
    let flag = prompt("Are you sure? to delete a item");
    let item=ele.name;
    flag = flag.toLowerCase();
    if (flag === "yes") {
      let newArrayItems = deleteObj(ArrayItems,item);
      console.log(newArrayItems);
      setArrayItems(newArrayItems);
      alert("Item is deleted successfully");
    } else {
      setArrayItems(ArrayItems);
      setChecked(true);

      alert("OK NP");
    }
    setChecked(true);
  };



  const updatedArray=(ele) => {
    checked.map((i) => {
      if (i.name===ele.name) {
        return { ...checked,isChecked:true};
      }
      return checked;
    });
  }


  const handleChangeCheckbox = (e, ele) => {
    if (e.target.checked) {
      setChecked(updatedArray(ele.name));
    } else {
      setChecked(checked);
    }
  };

  return (
    <>
      <div>
        <h1>Lorem, ipsum dolor.</h1>
        <ul
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {ArrayItems.map((ele, index) => {
            return (
              <div className="container-ListWithDel" key={ele.name.toString()}>
                <input
                  type="checkbox"
                  name="check"
                  id=""
                  onClick={(e) => handleChangeCheckbox(e, ele)}
                />
                <span>
                  {ele.name}
                </span>
                { (!ele.isChecked)  && (
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => onDelete(ele)}
                  ></i>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ListWithDel;
