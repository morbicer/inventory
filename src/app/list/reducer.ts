import produce from 'immer';
import { ListActionTypes, TOGGLE_ITEM, TOGGLE_TAG } from './types';
import ItemModel from './models/item';
import TagModel from './models/tag';
import inventory from '../../assets/inventory.json';

const initialData = inventory.map((item: any) => ({ ...item, selected: false, tagStyle: 0 }));
const initialTags = inventory.reduce((acc, o) => {
  o.tags.forEach((t: string) => {
    if (acc[t] !== undefined) {
      acc[t].count += 1;
    }
    else {
      acc[t] = { tag: t, count: 0, selected: true };
    }
  })
  return acc;
}, {} as ListState['tags']);

export interface ListState {
  data: ItemModel[],
  tags: Record<string, TagModel>,
}

const initialState: ListState = {
  data: initialData,
  tags: initialTags,
};

export function listReducer(state = initialState, action: ListActionTypes): ListState {
  switch (action.type) {
    case TOGGLE_ITEM:
      return produce(state, draftState => {
        const idx = state.data.findIndex(item => action.payload === item.name);
        draftState.data[idx].selected = !draftState.data[idx].selected;
      });
    case TOGGLE_TAG:
      return produce(state, draftState => {
        draftState.tags[action.payload].selected = !state.tags[action.payload].selected
      });
    default:
      return state
  }
}

export default listReducer;
