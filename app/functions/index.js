const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendUpdateNotification = 
    functions.database.ref('/history/{entry}')
    .onCreate((snap, context) => {
        const data = snap.val();

        const waterLevel = snap.child("waterLevel").val();
        const rain = snap.child("rain").val();

        var message = {
            notification: {
                title: "Sensor readings",
                body: `Received new data: Water level info: ${waterLevel}, Rain info: ${rain}` 
            }, 
            topic: "all"
        };
        return admin.messaging().send(message)
    })

    
