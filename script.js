import React from 'react';
import ReactDOM from 'react-dom';

const h1 = React.createElement('h1', {}, 'Waah Vedansh')
const h2 = React.createElement('h2', {}, 'Waah Waah Vedansh')
const a = React.createElement('h1', {}, "okiee")
const comb = React.createElement('div', {
    id: "Nope",
    style: { color: 'purple', background: 'lightpink' },
    nothing: "dumb"
}, [h1, h2, a])


const root = ReactDOM.createRoot(document.getElementById('waah'))

root.render(comb)