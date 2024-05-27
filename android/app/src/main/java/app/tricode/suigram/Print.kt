package app.tricode.suigram

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class Print(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    override fun getName(): String {
        return "Print"
    }

    @ReactMethod
    fun getHelloWorld(promise: Promise) {
        promise.resolve("Hello, Voski!")
    }
}
