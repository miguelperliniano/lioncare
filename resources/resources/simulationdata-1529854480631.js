function initData() {
  jimData.variables["control-codigo"] = "";
  jimData.variables["AmpliadaPer"] = "0";
  jimData.variables["control-nif"] = "";
  jimData.variables["AmpliadaPac"] = "0";
  jimData.variables["Comentario"] = "El paciente esta OK";
  jimData.datamasters["Alergias"] = [
    {
      "id": 1,
      "datamaster": "Alergias",
      "userdata": {
        "Tipo de Alergía": "Polen"
      }
    },
    {
      "id": 2,
      "datamaster": "Alergias",
      "userdata": {
        "Tipo de Alergía": "Penicilina"
      }
    },
    {
      "id": 3,
      "datamaster": "Alergias",
      "userdata": {
        "Tipo de Alergía": "Nolotil"
      }
    }
  ];

  jimData.datamasters["PaseVisita"] = [
    {
      "id": 1,
      "datamaster": "PaseVisita",
      "userdata": {
        "Fecha": "09/12/2011",
        "Realizado por": "Pilar Fortes",
        "Comentario": "Uno"
      }
    },
    {
      "id": 2,
      "datamaster": "PaseVisita",
      "userdata": {
        "Fecha": "10/12/2011",
        "Realizado por": "Pilar Fortes",
        "Comentario": "Dos"
      }
    },
    {
      "id": 3,
      "datamaster": "PaseVisita",
      "userdata": {
        "Fecha": "11/12/2011",
        "Realizado por": "Pilar Fortes",
        "Comentario": "Tres"
      }
    },
    {
      "id": 4,
      "datamaster": "PaseVisita",
      "userdata": {
        "Fecha": "12/12/2011",
        "Realizado por": "Pilar Fortes",
        "Comentario": "Cuatro"
      }
    }
  ];

  jimData.datamasters["InformesMedicos"] = [
    {
      "id": 1,
      "datamaster": "InformesMedicos",
      "userdata": {
        "Especialidad": "Cardiología",
        "Fecha": "12/12/2015",
        "Medico": "Dr. Perlines"
      }
    },
    {
      "id": 2,
      "datamaster": "InformesMedicos",
      "userdata": {
        "Especialidad": "Medicina Interna",
        "Fecha": "01/06/2013",
        "Medico": "Dr. Perines"
      }
    },
    {
      "id": 3,
      "datamaster": "InformesMedicos",
      "userdata": {
        "Especialidad": "Traumatología",
        "Fecha": "02/07/2014",
        "Medico": "Dr. Perlines"
      }
    }
  ];

  jimData.datamasters["Tratamientos"] = [
    {
      "id": 1,
      "datamaster": "Tratamientos",
      "userdata": {
        "Comentario": "Paracetamol 8 horas",
        "Hasta": "09/12/2018"
      }
    },
    {
      "id": 2,
      "datamaster": "Tratamientos",
      "userdata": {
        "Comentario": "Omeprazol diario",
        "Hasta": "12/12/2018"
      }
    }
  ];

  jimData.isInitialized = true;
}