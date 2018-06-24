(function(window, undefined) {
  var dictionary = {
    "52282674-030c-48f4-85ad-9e1dd0d44341": "Pruebas Medicas Resonancia",
    "1dfc861e-3e1d-4e5a-a65e-d651aa19e666": "Mapa de Camas",
    "b5f50f12-83f9-4ef7-b366-82243f759ff8": "Pase de Visita",
    "435c463b-2a69-4734-9266-483644356ec4": "Informes Medicos",
    "d81df34f-d9ec-42b6-aa0d-ccb55fd110cd": "Paciente",
    "4ab90867-0db7-4176-993e-a4099d7a566b": "Pruebas Medicas",
    "5efb3811-9486-469a-be4f-b49541a8f689": "VideoSimulation",
    "5d27597a-6fc4-4dc7-8c50-aa1ba5fb3eb4": "Tratamiento",
    "b1a768b6-78c1-4b75-8244-17401caf2b62": "Pruebas Medicas Rayos",
    "5e176db4-ecb7-499a-a7b7-dbca058d51e0": "Constantes",
    "7e5682ab-39f0-42ca-92d3-a1ffc5aabed2": "Imagen",
    "0d89c037-42d6-4873-870c-3f38b08e522c": "IntroducirNHC",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "InicioSesion",
    "d399b532-0639-4f85-b8e6-0bc1d66ae874": "Datos Personales",
    "59b192a8-ff9b-4dab-a287-91ad6667f028": "Informe",
    "470b11cb-5a5e-4b09-9a4d-e2544c804cea": "InformeMedico",
    "07ddd5f6-eb47-4eae-b897-5787a651e4e6": "ConstantesNuevas",
    "9a2f42cf-c509-41eb-ad4e-7586f2973a3b": "Pruebas Medicas Ecogra",
    "f6ea0f1b-8369-4848-a274-9f0d33fa81ec": "Menu Principal",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "a7fb9ca7-89df-47cc-adb2-9a9a7554d77b": "Cama Libre",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);