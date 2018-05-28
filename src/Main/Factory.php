<?php
/**
 * Created by kolserdav
 * User: Sergey Kol'miller
 * Date: 28.05.2018
 * Time: 2:00
 */

namespace Avir\Hash\Main;


class Factory
{
    public function getRoot()
    {
        preg_match("%.*src%",dirname(__DIR__),$m);
        return preg_filter('%.{1}src%','',$m[0]);
    }
}