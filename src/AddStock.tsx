import React, {FC, useState} from 'react';


export interface product {
    item: string;
      itemsRecieved: string;
      itemPrice: number;
}

 export interface props {
    stock: product[];
    onCall: (num: number) => void;
    onUpdate: (arr: any) => void;
}

const AddStock: FC<props> = ({stock, onCall, onUpdate}) => {

    const [Input, setInput] = useState(stock);

    const [product, setProduct] = useState("");
    const [preValue, setPreValue] = useState(Input);
  
    // Gets input from user and calculates sum of stock
    function getInput(event: any) : void {
      const value = event.target.value;
      
      const name = event.target.getAttribute("name");
      const index = parseInt(product, 10);
      let newArr: product[] = [...Input];
      let prevObj = { ...preValue[index] as any } ;
      let obj = { ...newArr[index] as any };
      obj[name] = parseInt(value, 10) + parseInt(prevObj[name], 10);
      (newArr[index] as any) = obj;
      setInput(newArr);
      onUpdate(newArr);
      handlePreviousValue();
    }
  
    // Gets input from user and calculates average price
    function getPrice(event: any): void {
      const value = event.target.value;
      const name = event.target.getAttribute("name");
      const index: number = parseInt(product, 10);
      let newArr: product[] = [...Input];
      let prevObj = { ...preValue[index] as any };
      let obj = { ...newArr[index] as any };
      obj[name] =
        (Math.round(value * 100) + Math.round(prevObj[name] * 100)) / 100 / 2;
      (newArr[index] as any) = obj;
      setInput(newArr);
      onUpdate(newArr);
      handlePreviousValue();
    }
  
    function handlePreviousValue() : void {
      setPreValue(Input);
    }
  
    // Specifies which product to calculate stock and price
    function getProductCode(event: any) : void {
      const value = event.target.value;
      setProduct(value);
    }

  return (
    <div className="form">
      <div className="btn-group">
        <button id="Red">Add Stock</button>
        <button onClick={() => onCall(1)}>Purchase Stock</button>
        <button onClick={() => onCall(2)}>View Stock</button>
      </div>
      <h2>Add Stock</h2>

      <div className="dropBox">
        <label>Select a Product Code</label>
        <select
          onChange={getProductCode}
          name="item"
          value={product}
          id="Stock"
        >
          <option value="">--Please choose an option--</option>
          <option  value="0">
            Product1
          </option>
          <option  value="1">
            Product2
          </option>
          <option  value="2">
            Product3
          </option>
        </select>
      </div>

      <label>Items Recieved</label>
      <input
        onChange={getInput}
        name="itemsRecieved"
        type="text"
      />

      <div>
        <label>Price per Item Recieved</label>
        <input
          type="number"
          onChange={getPrice}
          name="itemPrice"
        />
      </div>

      

      <div className="dropBox">
        <button onClick={() => onUpdate}>
          <span>Add Stock</span>
        </button>
      </div>
    </div>
  );
}

export default AddStock;
