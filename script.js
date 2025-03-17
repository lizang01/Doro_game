body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f9;
    margin: 0;
}

.container {
    text-align: center;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: opacity 0.5s ease-in-out;
}

.input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.retry-container {
    display: none;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.retry-container input[type="number"] {
    width: 200px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.retry-container button {
    padding: 15px 30px;
    border: none;
    background-color: #dc3545;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}

.retry-container button:hover {
    background-color: #c82333;
}

input[type="number"] {
    width: 200px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button {
    padding: 15px 30px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}

img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
    transition: opacity 0.5s ease-in-out;
}



