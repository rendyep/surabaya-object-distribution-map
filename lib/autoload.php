<?php

spl_autoload_register(function($classname){
    include __DIR__ . '/classes/' . $classname . '.php';
});
