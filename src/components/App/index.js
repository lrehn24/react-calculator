import React, {useState} from 'react';
import Button from '../Button/Button';
import './App.css';
import displayNum from '../Utility/displayNum';
import Menu from '../Menu/Menu';

const App = () => {
    const [value, setValue] = useState("0");
    const [memory, setMemory] = useState(null);
    const [operator, setOperator] = useState(null);

    const buttonPress = content => () => {
        const num = parseFloat(value);

        // clear button
        if(content === "C") {
            setValue('0');
            setMemory(null);
            setOperator(null);
            return;
        }

        // decimal button
        if(content === '.') {
            if(value.includes('.')) return;

            setValue(value + '.');
            return;
        }

        // Operator buttons
        if(content === "×") {
            if(operator !== null) {
                if(operator === '+') {
                    setMemory(memory + num);
                } else if (operator === '-') {
                    setMemory(memory - num);
                } else if (operator === '÷') {
                    setMemory(memory / num);
                } else if (operator === '×') {
                    setMemory(memory * num);
                }
            } else {
                setMemory(num);
            }
            setValue('0');
            setOperator('×');
            return;
        }
        if(content === "+") {
            if(operator !== null) {
                if(operator === '+') {
                    setMemory(memory + num);
                } else if (operator === '-') {
                    setMemory(memory - num);
                } else if (operator === '÷') {
                    setMemory(memory / num);
                } else if (operator === '×') {
                    setMemory(memory * num);
                }
            } else {
                setMemory(num);
            }
            setValue('0');
            setOperator('+');
            return;
        }
        if(content === "-") {
            if(operator !== null) {
                if(operator === '+') {
                    setMemory(memory + num);
                } else if (operator === '-') {
                    setMemory(memory - num);
                } else if (operator === '÷') {
                    setMemory(memory / num);
                } else if (operator === '×') {
                    setMemory(memory * num);
                }
            } else {
                setMemory(num);
            }
            setValue('0');
            setOperator('-');
            return;
        }
        if(content === "÷") {
            if(operator !== null) {
                if(operator === '+') {
                    setMemory(memory + num);
                } else if (operator === '-') {
                    setMemory(memory - num);
                } else if (operator === '÷') {
                    setMemory(memory / num);
                } else if (operator === '×') {
                    setMemory(memory * num);
                }
            } else {
                setMemory(num);
            }
            setValue('0');
            setOperator('÷');
            return;
        }
        if(content === "=") {
            if(!operator) return;

            if(operator === '+') {
                setValue((memory + num).toString());
            } else if (operator === '-') {
                setValue((memory - num).toString());
            } else if (operator === '÷') {
                setValue((memory / num).toString());
            } else if (operator === '×') {
                setValue((memory * num).toString());
            }

            setMemory(num);
            setOperator(null);
            return;
        }

        if(value[value.length - 1] === '.') {
            setValue(value + content);
        } else {
            setValue((parseFloat(num + content)).toString());
        }

        console.log(value.length);
    }

    return <div className="App">
        <div className="top">
            <Menu />
        </div>
        <div className={`display ${value.length >= 10 ? 'small' : ''} ${value.length >= 13 ? 'smaller' : ''}
                        ${value.length >= 16 ? 'smallest' : ''} ${value.length >= 20 ? 'moreSmall' : ''}`}>
            {displayNum(value)}
        </div>
        <div className="buttons">
            <Button buttonClick={buttonPress} content="C" type="function" />
            <Button buttonClick={buttonPress} content="" />
            <Button buttonClick={buttonPress} content="÷" type="operator" />
            <Button buttonClick={buttonPress} content="×" type="operator" />
            <Button buttonClick={buttonPress} content="7" />
            <Button buttonClick={buttonPress} content="8" />
            <Button buttonClick={buttonPress} content="9" />
            <Button buttonClick={buttonPress} content="-" type="operator" />
            <Button buttonClick={buttonPress} content="4" />
            <Button buttonClick={buttonPress} content="5" />
            <Button buttonClick={buttonPress} content="6" />
            <Button buttonClick={buttonPress} content="+" type="operator" />
            <Button buttonClick={buttonPress} content="1" />
            <Button buttonClick={buttonPress} content="2" />
            <Button buttonClick={buttonPress} content="3" />
            <Button buttonClick={buttonPress} content="=" type="operator" />
            <Button buttonClick={buttonPress} content="0" />
            <Button buttonClick={buttonPress} content="." />
        </div>
        <div className="bottom"></div>
    </div> 
};

export default App;