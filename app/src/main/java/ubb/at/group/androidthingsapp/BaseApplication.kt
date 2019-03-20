package ubb.at.group.androidthingsapp

import android.app.Application
import com.google.firebase.messaging.FirebaseMessaging

class BaseApplication : Application() {

    override fun onCreate() {
        super.onCreate()
        FirebaseMessaging.getInstance().subscribeToTopic("all")
    }

}