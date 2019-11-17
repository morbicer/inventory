import * as React from 'react';
import styled from '@emotion/styled';

const SvgWrapper = styled.div`
    svg {
        width: 100% !important;
    }
`;

const Icon: React.FC<{icon: string}> = ({ icon }) => {
    let decodedIcon = 'no icon';
    try {
        decodedIcon = window.atob(icon);
    }
    catch (e) { }

    return (
        <SvgWrapper
            dangerouslySetInnerHTML={{ __html: decodedIcon }}
        />
    );
}

export default Icon;
