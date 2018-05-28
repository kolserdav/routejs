let ajax = require('ajaxsim');

module.exports = route;

function route()
{
    this.rout = (hash)=>
    {
        console.log(hash);
    };
    window.addEventListener('hashchange', () => {
        this.rout(window.location.hash);
    });
}