import * as React from 'react';
import { Flex } from 'rebass';
import Item from './Item';
import ItemModel from '../models/item';

interface Props {
    items: Array<ItemModel>,
}

interface Actions {
    onItemClick(name: string): any,
}

const List: React.FC<Props & Actions> = ({ items, onItemClick }) => (
    <Flex flexWrap='wrap'>
        {items.map((i) =>
            <Item
                key={i.name}
                onClick={onItemClick}
                {...i}
            />
        )}
    </Flex>
)

export default List;
