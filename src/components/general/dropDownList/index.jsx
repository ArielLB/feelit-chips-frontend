import React from "react";

/*a component that takes the an array of objects called "items"
each item object is of structure {value:"bla bla", text:"pretty bla bla text"}
*/

const DropDownList = (props) => {
    const setGlobalValue = props.selectItem||((...args)=>{});//this is used to as placeholder for useContext setter

    // const [selectedItem, setSelectedItem] = React.useState(props.items[0]);
    const [selectedItem, setSelectedItem] = React.useState(props.selectedItem||null);
    const [items, setItems] = React.useState([...props.items])
    const changePick = (e) => {
        setSelectedItem(e.target.value)
      };
  
    React.useEffect(() => {
      setGlobalValue(selectedItem);
    }, [selectedItem]);
  
    React.useEffect(()=>{
        setItems(props.items)
    },[props])

    return <div>
      <select onChange={(e) => changePick(e)} name="hours" >
      <option value="" selected disabled hidden>Choose here</option>
        {items.map(item => <option  value={item.value}>{item.text}</option>)}
      </select>
    </div>;
  };
export default DropDownList;