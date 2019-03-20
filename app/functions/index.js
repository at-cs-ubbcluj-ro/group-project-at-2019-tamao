const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendUpdateNotification = 
    functions.database.ref('/history')
    .onWrite((change, context) => {
        var message = {
            notification: {
                title: "Data update",
                body: "Something changed, alright??"
            }, 
            topic: "all"
        };
        admin.messaging().send(message)
    })

    
