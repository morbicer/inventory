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

const Tag: React.FC<TagModel & Actions & { tagStyle: number }> = ({ tag, selected, tagStyle, onClick }) => (
    <Box width={[1, 1/2, 1/4, 1/8]}>
        <Box sx={{
            padding: 1,
            margin: 2,
            borderColor: `palette${tagStyle % 7}`,
            borderStyle: 'solid',
            borderRadius: [1],
        }}>
            <Label>
                <Checkbox
                    value={tag}
                    checked={selected}
                    onClick={() => onClick(tag)}
                    // sx={{ color: `palette${tagStyle % 7}`}}
                    color="secondary"
                />
                {tag}
            </Label>
        </Box>
    </Box>
);

const Tags: React.FC<Props & Actions> = ({ tags, onClick }) => (
    <Box
        sx={{
            position: 'fixed',
            width: '100%',
            background: '#fff',
            zIndex: 100,
        }}
    >
        <Flex flexWrap='wrap'>
            {tags.map((tag, i) =>
                <Tag
                    key={tag.tag}
                    {...tag}
                    tagStyle={tags.length - i - 1}
                    onClick={onClick}
                />
            )}
        </Flex>
    </Box>
)

export default Tags;
