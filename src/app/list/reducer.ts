import produce from 'immer';
import { ListActionTypes, TOGGLE_ITEM } from './types';
import ItemModel from './models/item';
import inventory from '../../assets/inventory.json';

export interface ListState {
  data: ItemModel[],
}

const initialState: ListState = {
  data: inventory.map((i: any) => ({ ...i, selected: false })),
};

export function listReducer(state = initialState, action: ListActionTypes): ListState {
  switch (action.type) {
    case TOGGLE_ITEM:
      return produce(state, draftState => {
        const idx = state.data.findIndex(i => action.payload === i.name);
        draftState.data[idx].selected = !draftState.data[idx].selected;
      });
    default:
      return state
  }
}

export default listReducer;
