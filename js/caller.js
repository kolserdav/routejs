let ajax = require('ajaxsim');

module.exports = route;
function route(dir = 'jstest')
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
            let nasya = require('../'+dir+'/'+file+'.js');
            nasya[func]();
        });
    };
    window.addEventListener('hashchange', () => {
        this.rout(window.location.hash);
    });
    this.rout(window.location.hash);
}