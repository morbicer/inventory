
import {
  TOGGLE_ITEM,
  TOGGLE_TAG,
  ListActionTypes,
} from './types';

export function toggleItem(name: string): ListActionTypes {
  return {
    type: TOGGLE_ITEM,
    payload: name,
  }
}

export function toggleTag(tag: string): ListActionTypes {
  return {
    type: TOGGLE_TAG,
    payload: tag,
  }
}
