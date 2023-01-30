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
      // console.log(newArrayItems);
      setArrayItems(newArrayItems);
      alert("Item is deleted successfully");
    } else {
      setArrayItems(ArrayItems);
      setChecked(true);
      alert("OK NP");
    }
    setChecked(true);
  };



  const updatedArray=(ele,index) => {
    // console.log(ele.isChecked+" index is "+index)
   const newState = ArrayItems.map((obj) =>
     obj.name ===ele.name ? { ...obj, isChecked: true } : obj
   );
   return newState;

  }
  const updatedArray_Unchecked = (ele, index) => {
    // console.log(ele.isChecked + " index is " + index);
    const newState = ArrayItems.map((obj) =>
      obj.name === ele.name ? { ...obj, isChecked: false } : obj
    );
    return newState;
  };


  const handleChangeCheckbox = (e, ele,index) => {
    console.log("Clicked");
    if (e.target.checked) {
      setArrayItems(updatedArray(ele,index));
    } else {
      setArrayItems(updatedArray_Unchecked(ele,index));
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
            color:'green',
            fontFamily:'sans-serif',
            textAlign: 'center',
            textTransform:'uppercase',
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          { ArrayItems && ArrayItems.map((ele, index) => {
            return (
              <div className="container-ListWithDel" key={ele.name.toString()}>
                <input
                  type="checkbox"
                  name="check"
                  id=""
                  onChange={(e) => handleChangeCheckbox(e, ele,index)}
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
