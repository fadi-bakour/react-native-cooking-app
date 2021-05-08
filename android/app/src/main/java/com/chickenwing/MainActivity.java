package com.chickenwing;
import android.os.Bundle; // here
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "chickenWing";
  }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

}









// package com.mysplashscreen;
// import android.os.Bundle; // here
// import com.facebook.react.ReactActivity;
// import org.devio.rn.splashscreen.SplashScreen; // here
// public class MainActivity extends ReactActivity {
//   /**
//    * Returns the name of the main component registered from JavaScript. This is used to schedule
//    * rendering of the component.
//    */
//   @Override
//   protected String getMainComponentName() {
//     return "MySplashScreen";
//   }

//   @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         SplashScreen.show(this);  // here
//         super.onCreate(savedInstanceState);
//     }
// }