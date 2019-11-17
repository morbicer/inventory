import { createSelector } from 'reselect';
import { RootState } from 'app/reducers';

export const getAllItems = (state: RootState) => state.list.data;

export const getTags = (state: RootState) => state.list.tags;

function hasIntersection<T>(a: Array<T>, b: Array<T>):boolean {
    return Boolean(a.filter(value => b.includes(value)).length);
}

export const getItems = createSelector(
    getAllItems,
    getTags,
    (items, tags) => {
        const unselectedTags = tags.filter(tag => !tag.selected).map(tag => tag.tag);
        return items.filter(item => !hasIntersection(item.tags, unselectedTags));
    },
);

