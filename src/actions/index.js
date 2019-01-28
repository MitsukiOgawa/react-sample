
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// アクションクリエーター
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}
