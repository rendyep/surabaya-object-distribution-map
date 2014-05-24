<?php

$total = 1000000;

$gresik = 100000;
$sidoarjo = 150000;
$surabayaBarat = 200000;
$surabayaTimur = 100000;
$surabayaSelatan = 150000;
$surabayaUtara = 50000;
$surabayaTengah = 250000;

$data = array(
    'global' => array(
        'population' => $total,
    ),
    'area' => array(
        'gresik' => array(
            'population' => $gresik,
            'density' => $gresik/$total,
        ),
        'sidoarjo' => array(
            'population' => $sidoarjo,
            'density' => $sidoarjo/$total,
        ),
        'surabayaBarat' => array(
            'population' => $surabayaBarat,
            'density' => $surabayaBarat/$total,
        ),
        'surabayaSelatan' => array(
            'population' => $surabayaSelatan,
            'density' => $surabayaSelatan/$total,
        ),
        'surabayaTimur' => array(
            'population' => $surabayaTimur,
            'density' => $surabayaTimur/$total,
        ),
        'surabayaUtara' => array(
            'population' => $surabayaUtara,
            'density' => $surabayaUtara/$total,
        ),
        'surabayaTengah' => array(
            'population' => $surabayaTengah,
            'density' => $surabayaTengah/$total,
        ),
    ),
);

echo json_encode($data);
