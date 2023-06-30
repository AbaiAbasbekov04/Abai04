import React, {useState, useEffect} from "react";


const Calculator = () => {
    const [result, setResult] = useState(0);
    const [input, setInput] = useState("")

    useEffect(() => {
        calculateResult();
    }, [input]);

    const calculateResult = () => {
        try {
            setResult(eval(input))
        } catch (error) {
            setResult('Ошибка')
        }
    }

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="divi">
            <h2>Калькулятор</h2>
            <input type="text" value={input} onChange={handleInputChange}/>
            <h3>Результат: {result}</h3>
        </div>
    )
}

export default Calculator;