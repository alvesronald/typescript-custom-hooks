
import { useState, useEffect } from 'react';


type debouncedValueType = string | number;


export const useDebouncedValue = (value: debouncedValueType, delay: 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {

        const handler = setTimeout(() => setDebouncedValue(value), delay)

        return () => clearTimeout(handler)

    }, [delay, value])

    return debouncedValue;
}