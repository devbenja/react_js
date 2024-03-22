import { useState } from "react";

export const AddCategory = () => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputValueChange = () => {
        setInputValue(event.target.value);
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Search gifts"
                value={inputValue}
                onChange={onInputValueChange}
            />
        </form>
    );

};      
