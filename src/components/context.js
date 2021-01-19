import React, { createContext, useState } from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
    const [items, setItems] = useState([])
    const [description, setDescription] = useState([]);

    const addItems = (item) => {
        setItems([...items, item])
    };

    return(
        <context.Provider
            value={{
                items,
                setItems,
                description,
                setDescription,
                addItems,
            }}>
            {props.children}
        </context.Provider>
    )
}