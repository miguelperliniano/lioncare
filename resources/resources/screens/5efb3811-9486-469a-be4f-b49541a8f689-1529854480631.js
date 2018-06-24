jQuery("#simulation")
  .on("pageload", ".s-5efb3811-9486-469a-be4f-b49541a8f689 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 2050
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPlayAudio",
                  "parameter": {
                    "target": [ "c2cacf77-f580-4b20-97da-a3247a175764.mp3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d81df34f-d9ec-42b6-aa0d-ccb55fd110cd"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });