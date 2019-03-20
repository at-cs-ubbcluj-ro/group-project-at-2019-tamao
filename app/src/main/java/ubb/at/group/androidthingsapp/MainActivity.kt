package ubb.at.group.androidthingsapp

import android.app.NotificationManager
import android.app.PendingIntent
import android.app.Service
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import androidx.core.app.NotificationCompat
import com.google.firebase.database.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val database = FirebaseDatabase.getInstance()
        val reference = database.reference.child("history")

        reference.addChildEventListener(object: ChildEventListener {
            override fun onCancelled(p0: DatabaseError) {
                Log.d("WaterSensorLogger", "Database error: ${p0.message}, details: ${p0.details}")
            }

            override fun onChildAdded(p0: DataSnapshot, p1: String?) {
                val data = p0.getValue(SensorData::class.java)
                Log.d("WaterSensorLogger", "Value received: $data")
                sendNotification(data!!)
            }

            override fun onChildMoved(p0: DataSnapshot, p1: String?) = Unit

            override fun onChildChanged(p0: DataSnapshot, p1: String?) = Unit

            override fun onChildRemoved(p0: DataSnapshot) = Unit
        })
    }

    private fun sendNotification(data: SensorData) {
        val notificationManager = getSystemService(Service.NOTIFICATION_SERVICE) as NotificationManager
        val actionIntent = Intent(this, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP
        }
        val pendingIntent = PendingIntent.getActivity(this, 0, actionIntent, 0)

        NotificationCompat.Builder(this, BaseApplication.CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_launcher_foreground)
            .setContentTitle("Data received")
            .setContentText("Rain: ${data.rain}, water level: ${data.waterLevel}")
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)
            .build()
            .also { notification ->
                notificationManager.notify(NOTIFICATION_ID, notification)
            }
    }

    companion object {
        private const val NOTIFICATION_ID = 100
    }
}
