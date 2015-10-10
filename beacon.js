/**
  * Chosen UUID for all beacons: b7c5546f-0fc8-469f-8faa-63a1593de6b5
  // * sudo hcitool -i hci0 cmd 0x08 0x0008 1e 02 01 1a 1a ff 4c 00 02 15 e2 c5 6d b5 df
  * sudo hcitool -i hci0 cmd 0x08 0x0008 b7 c5 54 6f 0f c8 46 9f 8f aa 63 a1 59 3d e6 b5
*/

if (Meteor.isClient) {
  Meteor.startup(function () {
    Meteor.startup(function () {
      var reactiveBeaconRegion = new ReactiveBeaconRegion({
        identifier: "beacons in IOMedia C",
        uuid: "b7c5546f-0fc8-469f-8faa-63a1593de6b5"
      });

      Tracker.autorun(function () {
        if (reactiveBeaconRegion.getBeaconRegion().inRegion) {
          alert(JSON.stringify(reactiveBeaconRegion.getBeaconRegion()));
        }
      })
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

if (Meteor.isCordova) {
  Meteor.startup(function () {
    var reactiveBeaconRegion = new ReactiveBeaconRegion({
      identifier: "beacons in IOMedia C",
      uuid: "b7c5546f-0fc8-469f-8faa-63a1593de6b5"
    });

    Tracker.autorun(function () {
      if (reactiveBeaconRegion.getBeaconRegion().inRegion) {
        alert(JSON.stringify(reactiveBeaconRegion.getBeaconRegion()));
      }
    })
  });
}
