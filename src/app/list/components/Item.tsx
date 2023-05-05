import * as React from 'react';
import {
    Box,
    Card,
    Heading,
} from 'rebass';
import Icon from './Icon';
import ItemModel from '../models/item';

interface Actions {
    onClick(name: string): any,
}

const Item: React.FC<ItemModel & Actions> = ({ name, icon, selected, onClick, tagStyle }) => (
    <Box
        width={[ 1, 1/2, 1/4, 1/8 ]}
        onClick={() => onClick(name)}
    >
        <Card
            sx={{
                margin: 2,
                padding: 2,
                boxShadow: 1,
                opacity: selected ? 0.1 : 1,
                bg: `palette${tagStyle % 7}`
            }}
        >
        <Icon icon={icon} />
        <Heading as='h3'>
            {tagStyle} {name}
        </Heading>
        </Card>
    </Box>
)

export default Item;
