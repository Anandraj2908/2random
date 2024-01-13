import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 90) + 10;
  };

  const [num1, setNum1] = useState(generateRandomNumber());
  const [num2, setNum2] = useState(generateRandomNumber());
  const [product, setProduct] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleGenerateNumbers = () => {
    setNum1(generateRandomNumber());
    setNum2(generateRandomNumber());
    setProduct('');
    setIsCorrect(null);
  };

  const handleInputChange = (e) => {
    setProduct(e.target.value);
  };

  const handleCheck = () => {
    const calculatedProduct = num1 * num2;
    const enteredProduct = parseInt(product, 10);

    setIsCorrect(calculatedProduct === enteredProduct);
  };

  return (
    <div>
      <h1>Number Multiplication Game</h1>
      <div>
        <p>Number 1: {num1}</p>
        <p>Number 2: {num2}</p>
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter the product"
          value={product}
          onChange={handleInputChange}
        />
        <button onClick={handleCheck}>Check</button>
        <button onClick={handleGenerateNumbers}>Generate New Numbers</button>
      </div>
      {isCorrect !== null && (
        <p>{isCorrect ? 'Correct!' : 'Incorrect! Try again.'}</p>
      )}
    </div>
  );
}

export default App
