let tom = 'Tom Jones';
let sally = 'Sally Smith';
let holly = 'Holly Harris';
let amol = 'Amol Shookup';
let robin = 'Robin Banks';
let erin = 'Erin D. Tyres';
let rea = 'Rea L. Clever';

const element = (
    <ul style={{'color': 'blue', 'fontSize': '24px'}}>
        <li>{tom}</li>
        <li>{sally}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{robin}</li>
        <li>{erin}</li>
        <li>{rea}</li>
    </ul>
);
ReactDOM.render(element, document.getElementById('content'));
