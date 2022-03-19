import { useState } from "react"

// readonly => não é imutavel


// COMMENTS => isso pode ser reduzido já que a linha 8 e a 9 são praticamente a mesma coisa.

// export const useNumber = (initialValue: number) => {
//     const [count, setCount] = useState(initialValue)
//     return [count, setCount] as const
// }


export const useNumber = (initialValue: number) => useState(initialValue)

