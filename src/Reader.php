<?php
/**
 * Created by kolserdav
 * User: Sergey Kol'miller
 * Date: 28.05.2018
 * Time: 1:56
 */

namespace Avir\Hash;

use Symfony\Component\Yaml\Yaml;
use Avir\Hash\Main\Factory;

class Reader extends Factory
{
    public $array;
    public function getRoutes()
    {
        $postData = $_POST['hash'];
        $dataFile = Yaml::parseFile($this->getRoot().'/config/route/routes.yaml');
        $this->getHashs($dataFile);
        if (array_key_exists($postData, $this->array)) {
            echo json_encode([
                'value' => $this->array[$postData]
                ]);
        }
        else {
            echo json_encode([
                    'value' => 'No hash'
                ]);
        }
    }
    public function getHashs($data, $i = 0, $array = [])
    {
        $keys = array_keys($data);
        $elem = $data[$keys[$i]];
        if ($elem) {
            if ($elem['hash']) {
                $newArray = array_merge($array, $elem['hash']);
                $this->getHashs($data, $i + 1, $newArray);
            }
            else {
                $this->getHashs($data, $i + 1, $array);
            }
        }
        else {
            return $this->array = $array;
        }
    }
}