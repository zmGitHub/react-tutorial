export default function counter (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 5
    case 'DECREMENT':
      return state - 10
    default:
      return state
  }
}
