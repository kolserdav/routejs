let ajax = require('ajaxsim');

module.exports = route;
const path = require('path');
function route()
{
    this.rout = (hash)=>
    {
        let request = "hash="+hash;
        ajax('/routerjs/public/caller.php', request, (response)=>{
            let data = JSON.parse(response);
            let fileWithPP = data.value.match(/\w*::/),
                file = fileWithPP[0].replace('::', ''),
                funcWithPP = data.value.match(/::\w*/),
                func = funcWithPP[0].replace('::', '');

        //TODO path
            let nasya = require('../s/'+file+'.js');
            nasya[func]();
        });
    };
    window.addEventListener('hashchange', () => {
        this.rout(window.location.hash);
    });
    this.rout(window.location.hash);
}