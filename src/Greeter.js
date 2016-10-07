var { greetText } = require( './data.json' );

module.exports = function(){
    var greet = document.createElement( 'div' );
    greet.textContent = `This is the message from json: ${ greetText }`;
    return greet;
}
