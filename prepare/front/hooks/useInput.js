import {useCallback, useState} from 'react';


const userInput = (initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback(e => setValue(e.target.value), []);
    return [value, handler];
}

export default userInput;