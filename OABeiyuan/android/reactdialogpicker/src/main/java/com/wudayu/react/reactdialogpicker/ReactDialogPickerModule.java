package com.wudayu.react.reactdialogpicker;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.widget.ArrayAdapter;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;

/**
 * Created by David on 1/11/16.
 */
public class ReactDialogPickerModule extends ReactContextBaseJavaModule {
    private Activity mActivity = null;

    public ReactDialogPickerModule(ReactApplicationContext reactContext, Activity activity) {
        super(reactContext);

        this.mActivity = activity;
    }

    @Override
    public String getName() {
        return "DialogPicker";
    }

    @ReactMethod
    public void showDialogPicker(ReadableArray itemArray, final ReadableMap options, final Callback callback) {
        String[] itemsStr = new String[itemArray.size()];
        for (int i = 0; i < itemArray.size(); ++i) {
            itemsStr[i] = itemArray.getString(i);
        }

        ArrayAdapter<String> adapter = new ArrayAdapter<String>(mActivity, android.R.layout.select_dialog_item, itemsStr);
        AlertDialog.Builder builder = new AlertDialog.Builder(mActivity);

        if (options != null && options.hasKey("title") && options.getString("title") != null && !options.getString("title").isEmpty()) {
            builder.setTitle(options.getString("title"));
        }

        final WritableMap response = Arguments.createMap();
        builder.setAdapter(adapter, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int index) {
                response.putInt("index", index);
                callback.invoke(response);
            }
        });

        final AlertDialog dialog = builder.create();
        dialog.setOnCancelListener(new DialogInterface.OnCancelListener() {
            @Override
            public void onCancel(DialogInterface dialog) {
                dialog.dismiss();
                response.putInt("index", -1);
                callback.invoke(response);
            }
        });
        dialog.show();
    }

}
