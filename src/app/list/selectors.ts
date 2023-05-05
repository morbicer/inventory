import { createSelector } from 'reselect';
import { RootState } from 'app/reducers';
import Tag from './models/tag';

export const getAllItems = (state: RootState) => state.list.data;

export const getTags = (state: RootState) => state.list.tags;
export const getSortedTags = createSelector(
    getTags,
    (tags) => Object.values(tags)
        .sort((a, b) => tagSortScore(a) > tagSortScore(b) ? 1 : -1),
);

function hasIntersection<T>(a: Array<T>, b: Array<T>):boolean {
    return Boolean(a.filter(value => b.includes(value)).length);
}

function getTagStyle(itemTags: string[], sortedTags: string[]) {
    const idx = itemTags.reduce((acc, tag) => {
        const tempIdx = sortedTags.findIndex((sortedTag) => tag === sortedTag);
        return tempIdx < acc ? tempIdx : acc;
    }, Infinity);

    return idx;
}

function tagSortScore(item: Tag) {
    return item.count
        + (item.tag === 'clothes' ? 20 : 0)
        + (item.tag === 'necessities' ? 10 : 0);
}

export const getItems = createSelector(
    getAllItems,
    getSortedTags,
    (items, tags) => {
        const unselectedTags = tags.filter(tag => !tag.selected).map(tag => tag.tag);

        return items
            .filter(item => !hasIntersection(item.tags, unselectedTags))
            .map(item => ({
                ...item,
                tagStyle: getTagStyle(item.tags, tags.map((t: Tag) => t.tag)),
            }))
            .sort((a,b) => a.tagStyle > b.tagStyle ? -1 : 1);
    },
);

