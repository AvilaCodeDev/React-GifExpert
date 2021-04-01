import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryAdd = ( {setCategories } ) => {
    const [InputValue, setInputValue] = useState('');
    
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const value = e.target.firstChild.value;

         if(InputValue.trim().length > 2){
            setCategories( cats => [value, ...cats ]);
            setInputValue('');
         }

    }

    return (
        <form onSubmit = { handleSubmit }>
            <input
                type = "text"
                value = { InputValue }
                onChange = { handleInputChange  }
            />
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories : PropTypes.func.isRequired
}