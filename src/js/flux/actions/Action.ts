export interface Action<T> {
    actionType: T,
    payload?: any
}
