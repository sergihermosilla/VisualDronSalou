var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ubi_trabajos_1 = new ol.format.GeoJSON();
var features_ubi_trabajos_1 = format_ubi_trabajos_1.readFeatures(json_ubi_trabajos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ubi_trabajos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ubi_trabajos_1.addFeatures(features_ubi_trabajos_1);
var lyr_ubi_trabajos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ubi_trabajos_1, 
                style: style_ubi_trabajos_1,
                interactive: true,
                title: '<img src="styles/legend/ubi_trabajos_1.png" /> ubi_trabajos'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ubi_trabajos_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ubi_trabajos_1];
lyr_ubi_trabajos_1.set('fieldAliases', {'id': 'id', });
lyr_ubi_trabajos_1.set('fieldImages', {'id': 'TextEdit', });
lyr_ubi_trabajos_1.set('fieldLabels', {'id': 'no label', });
lyr_ubi_trabajos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});