export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const TOGGLE_TAG = 'TOGGLE_TAG';

interface ToggleItemAction {
    type: typeof TOGGLE_ITEM,
    payload: string,
}

interface ToggleTagAction {
    type: typeof TOGGLE_TAG,
    payload: string,
}

export type ListActionTypes = ToggleItemAction | ToggleTagAction;
