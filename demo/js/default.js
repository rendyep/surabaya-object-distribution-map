var stageWidth = 800;
var stageHeight = 600;

var stage = new Kinetic.Stage({
    container: 'container',
    width: stageWidth,
    height: stageHeight
});

var layer = new Kinetic.Layer();

var imageObject = new Image();
imageObject.src = 'img/map.png';
imageObject.onload = function() {
    var maxRadius = 64;

    // global map
    var globalMap = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObject,
        width: stageWidth,
        height: stageHeight
    });

    // area map
    var areaMap = {
        'gresik': new Kinetic.Path({
            x: 0,
            y: 0,
            data: 'M 0,0 154,0 154,444 78,444 78,522 0,522 0,0 z',
            fill: 'black',
            opacity: 1,
            stroke: 'white',
            strokeWidth: '2'
        }),
        'sidoarjo': new Kinetic.Path({
            x: 0,
            y: 0,
            data: 'M 0,522 78,522 78,444 154,444 800,444 800,600 0,600 0,522 z',
            fill: 'black',
            opacity: 1,
            stroke: 'white',
            strokeWidth: '2'
        }),
        'surabayaBarat': new Kinetic.Path({
            x: 0,
            y: 0,
            data: 'M 154,0 232,0 232,78 310,78 310,366 232,366 232,444 154,444 154,0 z',
            fill: 'black',
            opacity: 1,
            stroke: 'white',
            strokeWidth: '2'
        }),
        'surabayaSelatan': new Kinetic.Path({
            x: 0,
            y: 0,
            data: 'M 310,286 645,286 645,366 724,366 724,444 232,444 232,366 310,366 310,286 z',
            fill: 'black',
            opacity: 1,
            stroke: 'white',
            strokeWidth: '2'
        }),
        'surabayaTimur': new Kinetic.Path({
            x: 0,
            y: 0,
            data: 'M 724,0 800,0 800,444 724,444 724,366 645,366 645,78 724,78 724,0 z',
            fill: 'black',
            opacity: 1,
            stroke: 'white',
            strokeWidth: '2'
        }),
        'surabayaUtara': new Kinetic.Path({
            x: 0,
            y: 0,
            data: 'M 232,0 724,0 724,78 645,78 645,158 310,158 310,78 232,78 232,0 z',
            fill: 'black',
            opacity: 1,
            stroke: 'white',
            strokeWidth: '2'
        }),
        'surabayaTengah': new Kinetic.Path({
            x: 0,
            y: 0,
            data: 'M 310,158 645,158 645,286 310,286 310,158 z',
            fill: 'black',
            opacity: 1,
            stroke: 'white',
            strokeWidth: '2'
        })
    };

    //area label
    var areaLabel = {
        'gresik': {
            'text': 'Kabupaten Gresik',
            'element': new Kinetic.Label({
                x: 75,
                y: 50
            })
        },
        'sidoarjo': {
            'text': 'Kabupaten Sidoarjo',
            'element': new Kinetic.Label({
                x: 700,
                y: 500
            })
        },
        'surabayaBarat': {
            'text': 'Surabaya Barat',
            'element': new Kinetic.Label({
                x: 235,
                y: 130
            })
        },
        'surabayaSelatan': {
            'text': 'Surabaya Selatan',
            'element': new Kinetic.Label({
                x: 390,
                y: 340
            })
        },
        'surabayaTimur': {
            'text': 'Surabaya Timur',
            'element': new Kinetic.Label({
                x: 720,
                y: 130
            })
        },
        'surabayaUtara': {
            'text': 'Surabaya Utara',
            'element': new Kinetic.Label({
                x: 340,
                y: 50
            })
        },
        'surabayaTengah': {
            'text': 'Surabaya Tengah',
            'element': new Kinetic.Label({
                x: 570,
                y: 210
            })
        }
    };

    $.each(areaLabel, function(key, label){
        label.element.add(new Kinetic.Tag({
            fill: 'blue',
            pointerDirection: 'down',
            pointerWidth: 10,
            pointerHeight: 10,
            lineJoin: 'round',
            shadowColor: 'navy',
            shadowBlur: 10,
            shadowOffset: {
                x: 10,
                y: 20
            },
            shadowOpacity: 0.5
        })).add(new Kinetic.Text({
            text: this.text,
            fontFamily: 'Calibri',
            fontSize: 18,
            padding: 5,
            fill: 'white'
        }));

        label.element.on('mouseover', function(){
            areaMap[key].opacity(0.1);
            layer.draw();
        });

        label.element.on('mouseout', function(){
            areaMap[key].opacity(1);
            layer.draw();
        });
    });

    //area indicator
    var areaIndicator = {
        'gresik': new Kinetic.Circle({
            x: 78,
            y: 261,
            radius: maxRadius,
            fill: 'red'
        }),
        'sidoarjo': new Kinetic.Circle({
            x: 400,
            y: 522,
            radius: maxRadius,
            fill: 'red'
        }),
        'surabayaBarat': new Kinetic.Circle({
            x: 232,
            y: 222,
            radius: maxRadius,
            fill: 'red'
        }),
        'surabayaSelatan': new Kinetic.Circle({
            x: 478,
            y: 365,
            radius: maxRadius,
            fill: 'red'
        }),
        'surabayaTimur': new Kinetic.Circle({
            x: 722,
            y: 222,
            radius: maxRadius,
            fill: 'red'
        }),
        'surabayaUtara': new Kinetic.Circle({
            x: 478,
            y: 78,
            radius: maxRadius,
            fill: 'red'
        }),
        'surabayaTengah': new Kinetic.Circle({
            x: 478,
            y: 222,
            radius: maxRadius,
            fill: 'red'
        })
    };

    $.each(areaIndicator, function(key, indicator){
        indicator.on('mouseover', function(){
            areaMap[key].opacity(0.1);
            layer.draw();
        });

        indicator.on('mouseout', function(){
            areaMap[key].opacity(1);
            layer.draw();
        });
    });

    layer.add(globalMap);

    $.each(areaMap, function(key, map){
        map.on('mouseover', function(){
            this.opacity(0.1);
            layer.draw();
        });

        map.on('mouseout', function(){
            this.opacity(1);
            layer.draw();
        });

        layer.add(map);
    });

    $.each(areaIndicator, function(key, indicator){
        layer.add(indicator);
    });

    $.each(areaLabel, function(key, label){
        layer.add(label.element);
    });

    stage.add(layer);

    $.ajax({
        url: 'data.php'
    }).done(function(data){
        data = $.parseJSON(data);

        $.each(data.area, function(key, element){
            var radius = element.density * maxRadius;
            areaIndicator[key].radius(radius);
        });

        $.each(areaLabel, function(key, label){
            layer.add(label.element);
        });

        layer.draw();
    });
};
