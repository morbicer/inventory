import * as React from 'react';
import { Dispatch, Action } from 'redux';
import {
    useSelector as useSelectorGeneric,
    TypedUseSelectorHook,
    useDispatch as useDispatchGeneric,
} from 'react-redux';
import { RootState } from 'app/reducers';
import List from './List';
import { toggleItem, toggleTag } from '../actions';
import { getItems, getSortedTags } from '../selectors';
import Tags from './Tags';

const useSelector: TypedUseSelectorHook<RootState> = useSelectorGeneric;
const useDispatch: () => Dispatch<Action> = useDispatchGeneric;

const Layout: React.FC = () => {
    const items = useSelector(getItems);
    const tags = Object.values(useSelector(getSortedTags)).reverse();
    const dispatch = useDispatch();

    return (
        <>
            <Tags
                tags={tags}
                onClick={tag => dispatch(toggleTag(tag))}
            />
            <List
                items={items}
                onItemClick={name => dispatch(toggleItem(name))}
            />
        </>
    );
}

export default Layout;
