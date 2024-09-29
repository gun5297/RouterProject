import { useState } from 'react';
import { BOARDPAGINGCONTAINER } from './styled';

const BoardPaging = ({ pageNumber, onCurrent, pageChange }) => {
    const arr = [];
    for (let i = 1; i <= pageNumber; i++) {
        arr.push(i);
    }
    return (
        <BOARDPAGINGCONTAINER>
            <a
                href='#'
                onClick={(e) => {
                    e.preventDefault();
                    pageChange('first');
                }}
            >{`<<`}</a>
            <a
                href='#'
                onClick={(e) => {
                    e.preventDefault();
                    pageChange('prev');
                }}
            >{`<`}</a>
            {arr.map((item) => (
                <a
                    href='#'
                    key={item}
                    onClick={(e) => {
                        e.preventDefault();
                        onCurrent(item);
                    }}
                >
                    {item}
                </a>
            ))}
            <a
                href='#'
                onClick={(e) => {
                    e.preventDefault();
                    pageChange('next');
                }}
            >{`>`}</a>
            <a
                href='#'
                onClick={(e) => {
                    e.preventDefault();
                    pageChange('last');
                }}
            >{`>>`}</a>
        </BOARDPAGINGCONTAINER>
    );
};

export default BoardPaging;
