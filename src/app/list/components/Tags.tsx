import * as React from 'react';
import { Box, Flex } from 'rebass';
import { Label, Checkbox } from '@rebass/forms';
import TagModel from '../models/tag';

interface Props {
    tags: TagModel[],
}

interface Actions {
    onClick(tag: string): any,
}

const Tag: React.FC<TagModel & Actions> = ({ tag, selected, onClick }) => (
    <Box width={[1/8]}>
        <Label>
            <Checkbox
                value={tag}
                checked={selected}
                onClick={() => onClick(tag)}
            />
            {tag}
        </Label>
    </Box>
);

const Tags: React.FC<Props & Actions> = ({ tags, onClick }) => (
    <Box
        sx={{
            position: 'fixed',
            height: 60,
            width: '100%',
            background: '#fff',
            zIndex: 100,
        }}
    >
        <Flex flexWrap='wrap'>
            {tags.map(tag =>
                <Tag
                    key={tag.tag}
                    {...tag}
                    onClick={onClick}
                />
            )}
        </Flex>
    </Box>
)

export default Tags;
