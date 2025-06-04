ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([-75560.348478, 6019947.955000, 1417044.948478, 7137078.445000]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Dpartementsmtropole_2 = new ol.format.GeoJSON();
var features_Dpartementsmtropole_2 = format_Dpartementsmtropole_2.readFeatures(json_Dpartementsmtropole_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Dpartementsmtropole_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartementsmtropole_2.addFeatures(features_Dpartementsmtropole_2);
var lyr_Dpartementsmtropole_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dpartementsmtropole_2, 
                style: style_Dpartementsmtropole_2,
                popuplayertitle: 'Départements métropole',
                interactive: true,
                title: '<img src="styles/legend/Dpartementsmtropole_2.png" /> Départements métropole'
            });
var format_Maillesprioritairesmuscardin_3 = new ol.format.GeoJSON();
var features_Maillesprioritairesmuscardin_3 = format_Maillesprioritairesmuscardin_3.readFeatures(json_Maillesprioritairesmuscardin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Maillesprioritairesmuscardin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maillesprioritairesmuscardin_3.addFeatures(features_Maillesprioritairesmuscardin_3);
var lyr_Maillesprioritairesmuscardin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maillesprioritairesmuscardin_3, 
                style: style_Maillesprioritairesmuscardin_3,
                popuplayertitle: 'Mailles prioritaires muscardin',
                interactive: true,
                title: '<img src="styles/legend/Maillesprioritairesmuscardin_3.png" /> Mailles prioritaires muscardin'
            });

lyr_ESRISatellite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_Dpartementsmtropole_2.setVisible(true);lyr_Maillesprioritairesmuscardin_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_OSMStandard_1,lyr_Dpartementsmtropole_2,lyr_Maillesprioritairesmuscardin_3];
lyr_Dpartementsmtropole_2.set('fieldAliases', {'id': 'id', 'nom_dep': 'nom_dep', 'insee_dep': 'insee_dep', 'insee_reg': 'insee_reg', });
lyr_Maillesprioritairesmuscardin_3.set('fieldAliases', {'id_area': 'id_area', 'area_name': 'code maille', });
lyr_Dpartementsmtropole_2.set('fieldImages', {'id': 'TextEdit', 'nom_dep': 'TextEdit', 'insee_dep': 'TextEdit', 'insee_reg': 'TextEdit', });
lyr_Maillesprioritairesmuscardin_3.set('fieldImages', {'id_area': 'TextEdit', 'area_name': 'TextEdit', });
lyr_Dpartementsmtropole_2.set('fieldLabels', {'id': 'hidden field', 'nom_dep': 'no label', 'insee_dep': 'no label', 'insee_reg': 'hidden field', });
lyr_Maillesprioritairesmuscardin_3.set('fieldLabels', {'id_area': 'hidden field', 'area_name': 'inline label - always visible', });
lyr_Maillesprioritairesmuscardin_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});