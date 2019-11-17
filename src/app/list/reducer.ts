import produce from 'immer';
import { ListActionTypes, TOGGLE_ITEM, TOGGLE_TAG } from './types';
import ItemModel from './models/item';
import TagModel from './models/tag';
import inventory from '../../assets/inventory.json';

const initialData = inventory.map((item: any) => ({ ...item, selected: false }));
const initialTags = Array.from(new Set(inventory.flatMap((item: any) => item.tags)))
  .map((tag) => ({ tag, selected: true }));

export interface ListState {
  data: ItemModel[],
  tags: TagModel[],
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
        const idx = state.tags.findIndex(tag => action.payload === tag.tag);
        draftState.tags[idx].selected = !draftState.tags[idx].selected;
      });
    default:
      return state
  }
}

export default listReducer;
