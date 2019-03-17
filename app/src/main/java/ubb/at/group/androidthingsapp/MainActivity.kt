package ubb.at.group.androidthingsapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import com.google.firebase.FirebaseApp
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
            }

            override fun onChildMoved(p0: DataSnapshot, p1: String?) = Unit

            override fun onChildChanged(p0: DataSnapshot, p1: String?) = Unit

            override fun onChildRemoved(p0: DataSnapshot) = Unit
        })
    }
}
