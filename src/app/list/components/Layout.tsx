import * as React from 'react';
import { Dispatch, Action } from 'redux';
import {
    useSelector as useSelectorGeneric,
    TypedUseSelectorHook,
    useDispatch as useDispatchGeneric,
} from 'react-redux';
import { RootState } from 'app/reducers';
import List from './List';
import { toggleItem } from '../actions';

const useSelector: TypedUseSelectorHook<RootState> = useSelectorGeneric;
const useDispatch: () => Dispatch<Action> = useDispatchGeneric;

const Layout: React.FC = () => {
    const items = useSelector(state => state.list.data);
    const dispatch = useDispatch();

    return (
        <List
            items={items}
            onItemClick={name => dispatch(toggleItem(name))}
        />
    );
}

export default Layout;
