import React, { FC, useState } from "react";

interface product {
    item: string;
      itemsRecieved: string;
      itemPrice: number;
}

interface props {
    stock: product[];
    onCall: (num: number) => void;
    onUpdate: (arr: any) => void;
    onEmail: (message: string) => void;
}

const DeleteStock: FC<props> = (props) => {
  const [removeStock, setRemoveStock] = useState(props.stock);
  const [product, setProduct] = useState("");
  const [email, setEmail] = useState("");
  const [preValue, setPreValue] = useState(removeStock);
  
  function getProductCode(event: any): void {
    const value = event.target.value;
    setProduct(value);
    sendEmail();
  }

  // Gets input from user and calculates sum of stock
  function getDeleteStock(event: any): void {
    const value : string = event.target.value;
    const name : string = event.target.getAttribute("name");
    const index : number = parseInt(product, 10);;
    let newArr: product[] = [...removeStock];
    let prevObj = { ...preValue[index] as any };
    let obj = { ...newArr[index] as any };
    obj[name] = parseInt(prevObj[name], 10) - parseInt(value, 10);

    newArr[index] = obj;
    setRemoveStock(newArr);

    handlePreviousValue();
  }

  function handlePreviousValue(): void {
    setPreValue(removeStock);
  }

  // gets email from user
  function getEmail(event: any): void {
    const value = event.target.value;
    setEmail(value);
    
  }

  // sends email to App.jsx fro validation
  function sendEmail(): void {
    props.onEmail(email);
  }

  return (
    <div className="form">
      <div className="btn-group">
        <button onClick={() => props.onCall(0)}>Add Stock</button>
        <button id="Red">Purchase Stock</button>
        <button onClick={() => props.onCall(2)}>View Stock</button>
      </div>
      <h2>Delete Stock</h2>
      <div className="dropBox">
        <label>Buyer Email Address</label>
        <input type="email" onChange={getEmail} value={email} name="Email" />

        <div className="Product">
          <label>Select a Product Code</label>
          <select
            onChange={getProductCode}
            value={product}
            name="item"
            id="Stock"
          >
            <option value="">--Please choose an option--</option>
            <option  value="0">
              Product1
            </option>
            <option value="1">
              Product2
            </option>
            <option  value="2">
              Product3
            </option>
          </select>
        </div>
      </div>

      <div>
        <label>Items Bought</label>
        <input
          onChange={getDeleteStock}
          
          name="itemsRecieved"
        />
      </div>

      <div className="dropBox">
        <button onClick={() => props.onUpdate(removeStock)}>
          <span>Remove Stock</span>
        </button>
      </div>
    </div>
  );
}

export default DeleteStock;