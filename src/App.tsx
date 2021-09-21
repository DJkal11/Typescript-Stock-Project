import React, {useState} from 'react';
import AddStock from './AddStock';
import DeleteStock from './deleteStock';
import ViewStock from './viewStock';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";



function App() {

  const [stock, setStock] = useState([
    {
      item: "Product01",
      itemsRecieved: "100",
      itemPrice: 20.89
    },
    {
      item: "Product02",
      itemsRecieved: "100",
      itemPrice: 30.89
    },
    {
      item: "Product03",
      itemsRecieved: "100",
      itemPrice: 40.99
    }
  ]);
  const [condition, setCondition] = useState(0);
  const [validateEmail, setValidate] = useState([
    "jj@Web.com",
    "test@test.com"
  ]);
  const [warning, setWarning] = useState(false);

  // Get
  function getEmail(email: string) {
    
    validateEmail.forEach((element, index) => {
      if (email === element) {
        setWarning(true);
      } else if (email !== element) {
        setValidate((preValue) => {
          return [...preValue, email];
        });
      }
    });

    console.log(validateEmail);
  }

  // Fetching input data from AddStock to update Stock
  function updateStock(inputInfo: []): void {
    
    setStock(inputInfo);
    setWarning(false);
  }

  // Function helps to navigate between sections in application
  function getCondition(tab: number): void {
    if (tab === 0) {
      setCondition(0);
    } else if (tab === 1) {
      setCondition(1);
    } else {
      setCondition(2);
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Stock Control</h1>
      </div>
      {(condition === 0 && (
        <AddStock stock={stock} onCall={getCondition} onUpdate={updateStock} />
      )) ||
        (condition === 1 && (
          <DeleteStock
            onCall={getCondition}
            stock={stock}
            onUpdate={updateStock}
            onEmail={getEmail}
          />
        )) ||
        (condition === 2 && <ViewStock stock={stock} onCall={getCondition} />)}
      {warning ? (
        <p>
          <b>
            <CancelIcon />
            This email has been used to purchase items before. Please enter a
            different email address.
          </b>
        </p>
      ) : (
        <h3>
          <CheckCircleIcon />
        </h3>
      )}
    </div>
  );
}

export default App;
