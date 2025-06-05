ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([107901.098901, 6156500.000000, 1242098.901099, 7143500.000000]);
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
var format_Dpartements_2 = new ol.format.GeoJSON();
var features_Dpartements_2 = format_Dpartements_2.readFeatures(json_Dpartements_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Dpartements_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartements_2.addFeatures(features_Dpartements_2);
var lyr_Dpartements_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dpartements_2, 
                style: style_Dpartements_2,
                popuplayertitle: 'Départements',
                interactive: true,
                title: '<img src="styles/legend/Dpartements_2.png" /> Départements'
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

lyr_ESRISatellite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_Dpartements_2.setVisible(true);lyr_Maillesprioritairesmuscardin_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_OSMStandard_1,lyr_Dpartements_2,lyr_Maillesprioritairesmuscardin_3];
lyr_Dpartements_2.set('fieldAliases', {'id': 'id', 'nom_dep': 'nom', 'insee_dep': 'code', 'insee_reg': 'insee_reg', 'lib': 'lib', });
lyr_Maillesprioritairesmuscardin_3.set('fieldAliases', {'id_area': 'id_area', 'area_name': 'code maille', });
lyr_Dpartements_2.set('fieldImages', {'id': 'TextEdit', 'nom_dep': 'TextEdit', 'insee_dep': 'TextEdit', 'insee_reg': 'TextEdit', 'lib': 'TextEdit', });
lyr_Maillesprioritairesmuscardin_3.set('fieldImages', {'id_area': 'TextEdit', 'area_name': 'TextEdit', });
lyr_Dpartements_2.set('fieldLabels', {'id': 'hidden field', 'nom_dep': 'hidden field', 'insee_dep': 'hidden field', 'insee_reg': 'hidden field', 'lib': 'no label', });
lyr_Maillesprioritairesmuscardin_3.set('fieldLabels', {'id_area': 'hidden field', 'area_name': 'inline label - visible with data', });
lyr_Maillesprioritairesmuscardin_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});