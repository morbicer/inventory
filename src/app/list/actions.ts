
import { TOGGLE_ITEM, ListActionTypes } from './types';

export function toggleItem(name: string): ListActionTypes {
  return {
    type: TOGGLE_ITEM,
    payload: name,
  }
}
