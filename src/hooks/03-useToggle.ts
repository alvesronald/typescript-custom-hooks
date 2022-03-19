import { useCallback, useState, useReducer } from 'react';

// export const useToggle = (initialState: boolean) => {
//     const [state, setState] = useState(initialState)

//     const toggle = useCallback(() => {
//         setState(prevState => !prevState)
//     }, [])

//     return [state, toggle] as const
// }


export const useToggle = (initialState: boolean) => useReducer((prevState: boolean) => !prevState, initialState)


