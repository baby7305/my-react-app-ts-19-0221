import React from 'react';

function ListItem(props) {
    // 对啦！这里不需要指定key:
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // 又对啦！key应该在数组的上下文中被指定
        <ListItem key={number.toString()}
            value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default NumberList;

