package ubb.at.group.androidthingsapp

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.firebase.ui.database.FirebaseRecyclerAdapter
import com.firebase.ui.database.FirebaseRecyclerOptions
import com.google.firebase.database.FirebaseDatabase
import kotlinx.android.synthetic.main.activity_history.*


class HistoryActivity : AppCompatActivity() {

    private lateinit var mAdapter: FirebaseRecyclerAdapter<SensorData, ViewHolder>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_history)
        title = "History"

        val ref = FirebaseDatabase.getInstance().reference.child("history")
        val options = FirebaseRecyclerOptions.Builder<SensorData>().setQuery(ref, SensorData::class.java).build()
        val adapter = object : FirebaseRecyclerAdapter<SensorData, ViewHolder>(options) {
            override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
                return LayoutInflater.from(parent.context).inflate(R.layout.list_item, parent, false)
                    .run {
                        ViewHolder(this)
                    }
            }

            override fun onBindViewHolder(holder: ViewHolder, p1: Int, data: SensorData) {
                holder.textView.text = data.rain
            }
        }

        mAdapter = adapter
        hist.adapter = adapter
        hist.layoutManager = LinearLayoutManager(this)
    }

    override fun onStart() {
        super.onStart()
        mAdapter.startListening()
    }

    override fun onStop() {
        super.onStop()
        mAdapter.stopListening()
    }

    private class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        var textView: TextView = view.findViewById(R.id.label)
    }
}
