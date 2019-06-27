import React from 'react';
import styles from './Input.module.css';

const Input = props => {
    let inputElement = null;

    switch(props.elementType) {
        case "input":
            inputElement = <input 
                                className={styles.inputElement}
                                id={props.elementConfig.name} 
                                {...props.elementConfig} 
                                value={props.value}
                                onChange={props.changed}
                                required 
                            />;
            break;
        case "textarea":
            inputElement = <textarea 
                                className={styles.inputElement} 
                                id={props.elementConfig.name} 
                                {...props.elementConfig} 
                                value={props.value} 
                                onChange={props.changed}
                                required  
                            />;
            break;
        case "select":
            inputElement = (
                <select className={styles.inputElement} id={props.elementConfig.name} value={props.value} onChange={props.changed} required>
                    <option value=''>--Select Delivery Method--</option>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.display}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input 
                                className={styles.inputElement}
                                id={props.elementConfig.name}  
                                {...props.elementConfig} 
                                value={props.value}
                                onChange={props.changed}
                                required   
                            />;
    }

    return (
        <div className={styles.input}>
            <label className={styles.label} htmlFor={props.elementConfig.name}>{props.elementConfig.name}</label>
            {inputElement}
        </div>
    );
};

export default Input;