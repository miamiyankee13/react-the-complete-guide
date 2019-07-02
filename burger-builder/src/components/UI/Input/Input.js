import React from 'react';
import styles from './Input.module.css';

const Input = props => {
    //create input element & input classes array
    let inputElement = null;
    const inputClasses = [styles.inputElement];

    //check if invalid class should be added to input classes array
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(styles.invalid);
    }

    switch(props.elementType) {
        case "input":
            inputElement = <input 
                                className={inputClasses.join(' ')}
                                id={props.elementConfig.name} 
                                {...props.elementConfig} 
                                value={props.value}
                                onChange={props.changed}
                            />;
            break;
        case "textarea":
            inputElement = <textarea 
                                className={inputClasses.join(' ')} 
                                id={props.elementConfig.name} 
                                {...props.elementConfig} 
                                value={props.value} 
                                onChange={props.changed}
                            />;
            break;
        case "select":
            inputElement = (
                <select className={inputClasses.join(' ')} id={props.elementConfig.name} value={props.value} onChange={props.changed}>
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
                                className={inputClasses.join(' ')}
                                id={props.elementConfig.name}  
                                {...props.elementConfig} 
                                value={props.value}
                                onChange={props.changed}
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