export function drawerLockModeReducer(state = 'unlocked', action) {
    if (action.type === 'LOCKED_OPEN') {
        return 'locked-open';
    }
    return state;
}