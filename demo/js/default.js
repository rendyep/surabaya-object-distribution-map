var stageWidth = 800;
var stageHeight = 600;

var stage = new Kinetic.Stage({
    container: 'container',
    width: stageWidth,
    height: stageHeight
});

var layer = new Kinetic.Layer();

var imageObject = new Image();
imageObject.onload = function() {
    var cityMap = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObject,
        width: stageWidth,
        height: stageHeight
    });

    var gresikMap = new Kinetic.Path({
        x: 0,
        y: 0,
        data: 'M 0,0 154,0 154,444 78,444 78,522 0,522 0,0 z',
        fill: 'black',
        opacity: 0
    });

    var sidoarjoMap = new Kinetic.Path({
        x: 0,
        y: 0,
        data: 'M 0,522 78,522 78,444 154,444 800,444 800,600 0,600 0,522 z',
        fill: 'black',
        opacity: 0
    });

    var surabayaBaratMap = new Kinetic.Path({
        x: 0,
        y: 0,
        data: 'M 154,0 232,0 232,78 310,78 310,366 232,366 232,444 154,444 154,0 z',
        fill: 'black',
        opacity: 0
    });

    var surabayaSelatanMap = new Kinetic.Path({
        x: 0,
        y: 0,
        data: 'M 310,286 645,286 645,366 724,366 724,444 232,444 232,366 310,366 310,286 z',
        fill: 'black',
        opacity: 0
    });

    var surabayaTimurMap = new Kinetic.Path({
        x: 0,
        y: 0,
        data: 'M 724,0 800,0 800,444 724,444 724,366 645,366 645,78 724,78 724,0 z',
        fill: 'black',
        opacity: 0
    });

    var surabayaUtaraMap = new Kinetic.Path({
        x: 0,
        y: 0,
        data: 'M 232,0 724,0 724,78 645,78 645,158 310,158 310,78 232,78 232,0 z',
        fill: 'black',
        opacity: 0
    });

    var surabayaTengahMap = new Kinetic.Path({
        x: 0,
        y: 0,
        data: 'M 310,158 645,158 645,286 310,286 310,158 z',
        fill: 'black',
        opacity: 00
    });

    layer.add(cityMap);
    layer.add(gresikMap);
    layer.add(sidoarjoMap);
    layer.add(surabayaBaratMap);
    layer.add(surabayaSelatanMap);
    layer.add(surabayaTimurMap);
    layer.add(surabayaUtaraMap);
    layer.add(surabayaTengahMap);

    stage.add(layer);

    $.ajax({
        url: 'data.php'
    }).done(function(data){
        data = $.parseJSON(data);
        gresikMap.opacity(data.gresik/100);
        sidoarjoMap.opacity(data.sidoarjo/100);
        surabayaBaratMap.opacity(data.surabayaBarat/100);
        surabayaSelatanMap.opacity(data.surabayaSelatan/100);
        surabayaTimurMap.opacity(data.surabayaTimur/100);
        surabayaUtaraMap.opacity(data.surabayaUtara/100);
        surabayaTengahMap.opacity(data.surabayaTengah/100);
        layer.draw();
    });
};

imageObject.src = 'img/map.png';
