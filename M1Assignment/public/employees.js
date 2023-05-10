let tom = 'Tom Jones';
let sally = 'Sally Smith';
let holly = 'Holly Harris';
let amol = 'Amol Shookup';
let robin = 'Robin Banks';
let erin = 'Erin D. Tyres';
let rea = 'Rea L. Clever';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, tom), /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, erin), /*#__PURE__*/React.createElement("li", null, rea));
ReactDOM.render(element, document.getElementById('content'));