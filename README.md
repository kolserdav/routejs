PHP and JavaScript route for hash module.

"require": {
        "symfony/yaml": "^4.0"
    }  
    
"dependencies": {
    "ajaxsim": "^1.0.0"
  }
  
  
_Installation_  

php: `$~ composer require kolserdav/routejs`  

js: `$~ npm i route-fhash`

_Route settings_  

file name:  
 /config/route/routes.yaml  

```yaml
#Example routes.yaml
nameroutegroup1 :	#Require field custom name
      hash: #Require field and name
        nameroute1 : filename1::module1 #Custom fields with special format
        nameroure2 : filename2::module2
nameroutegroup2 :
      hash :
        nameroute3 : filename3::module3
        nameroute4 : filename4::module4
        nameroute4 : filename4::module5
```

_Using php_

script uri: /routejs-data  

```php
require_once '../vendor/autoload.php';
use Avir\Hash\Reader;
$s = new Reader();
$s->getRoutes();
```

_Using javascript_
```php
let route = require('route-fhash');
route('dir/with/route/files');
```