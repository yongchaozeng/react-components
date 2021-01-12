import React from './React.js'

let App = React.createElement(
    'div',
    {
        id: 'test1', className: 'box'
    },
    React.createElement(
        'h1',
        {
            id: 'title',
        },
        'Title',
    ),
    React.createElement(
        'a',
        {
            href: 'xxx',
        },
        'Jump',
    ),
    React.createElement(
        'section',
        null,
        React.createElement('p', null, 'Article'),
    ),
);

React.render(App, document.querySelector('#app'))
