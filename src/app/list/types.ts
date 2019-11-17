export const TOGGLE_ITEM = 'TOGGLE_ITEM';

interface ToggleItemAction {
    type: typeof TOGGLE_ITEM,
    payload: string,
}

export type ListActionTypes = ToggleItemAction;
