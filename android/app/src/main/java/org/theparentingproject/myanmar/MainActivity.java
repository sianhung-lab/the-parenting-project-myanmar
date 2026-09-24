package org.theparentingproject.myanmar;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ProgressBar;

public class MainActivity extends Activity {

    private static final String APP_URL = "https://parenting-project-myanmar.penglambot.workers.dev?app=true";
    private WebView webView;
    private ProgressBar progressBar;
    private FrameLayout customViewContainer;
    private WebChromeClient.CustomViewCallback customViewCallback;
    private View mCustomView;

    private ValueCallback<Uri[]> mFilePathCallback;
    private final static int FILECHOOSER_RESULTCODE = 1;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Set status bar color to luxury navy
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            getWindow().addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            getWindow().setStatusBarColor(android.graphics.Color.parseColor("#061830"));
        }

        // Make window hardware accelerated
        getWindow().setFlags(
            WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED,
            WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED
        );

        FrameLayout rootLayout = new FrameLayout(this);
        rootLayout.setLayoutParams(new ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        webView = new WebView(this);
        webView.setLayoutParams(new ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        progressBar = new ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal);
        progressBar.setLayoutParams(new FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, 8));
        progressBar.setMax(100);

        customViewContainer = new FrameLayout(this);
        customViewContainer.setLayoutParams(new ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        customViewContainer.setVisibility(View.GONE);

        rootLayout.addView(webView);
        rootLayout.addView(progressBar);
        rootLayout.addView(customViewContainer);
        setContentView(rootLayout);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(true);
        settings.setSupportZoom(false);
        settings.setUserAgentString(settings.getUserAgentString() + " ParentingApp/1.0 MobileNativeApp");

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                String url = request.getUrl().toString();
                // Handle Viber, WhatsApp, mailto or external phone intents
                if (url.startsWith("viber:") || url.startsWith("whatsapp:") || url.startsWith("tel:") || url.startsWith("mailto:")) {
                    try {
                        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                        startActivity(intent);
                        return true;
                    } catch (Exception ignored) {
                        return true;
                    }
                }
                // Handle APK downloads, Play Store, or external files
                if (url.endsWith(".apk") || url.contains("/releases/download/") || url.startsWith("market:") || url.contains("play.google.com")) {
                    try {
                        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                        startActivity(intent);
                        return true;
                    } catch (Exception ignored) {
                        return true;
                    }
                }
                return false;
            }

            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                progressBar.setVisibility(View.VISIBLE);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                progressBar.setVisibility(View.GONE);
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, android.webkit.WebResourceError error) {
                if (request.isForMainFrame()) {
                    String offlineHtml = "<html><body style='background:#061830;color:#fff;font-family:sans-serif;text-align:center;padding:60px 20px;'>"
                        + "<div style='font-size:52px;margin-bottom:16px;'>\uD83D\uDCE1</div>"
                        + "<h2 style='color:#ffcc00;margin-bottom:10px;'>\u1021\u1004\u103A\u1000\u1031\u1031 \u101C\u102D\u102F\u1004\u103A\u1038\u1001\u103B\u102D\u1010\u103A\u1006\u1000\u103A\u1019\u103E\u102F \u1015\u103C\u1010\u103A\u1010\u1031\u102C\u1000\u1014\u1031\u1015\u102B\u101E\u100A\u100A\u104B</h2>"
                        + "<p style='color:rgba(255,255,255,0.7);font-size:14px;margin-bottom:28px;'>No internet connection detected. Please verify your Wi-Fi or mobile data.</p>"
                        + "<button onclick='location.reload()' style='background:#ffcc00;color:#061830;border:none;padding:14px 32px;border-radius:24px;font-weight:bold;font-size:16px;cursor:pointer;'>\u1015\u103C\u1014\u103A\u101C\u100A\u103A\u1000\u103C\u102D\u102F\u1038\u1005\u102C\u1019\u100A\u1037 (Retry)</button>"
                        + "</body></html>";
                    view.loadDataWithBaseURL(null, offlineHtml, "text/html", "UTF-8", null);
                }
            }
        });

        // Native Download Manager integration for in-app downloads
        webView.setDownloadListener(new android.webkit.DownloadListener() {
            @Override
            public void onDownloadStart(String url, String userAgent, String contentDisposition, String mimetype, long contentLength) {
                try {
                    Intent intent = new Intent(Intent.ACTION_VIEW);
                    intent.setData(Uri.parse(url));
                    startActivity(intent);
                } catch (Exception ignored) {}
            }
        });

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                progressBar.setProgress(newProgress);
            }

            // Fullscreen video support (YouTube & HTML5 MP4)
            @Override
            public void onShowCustomView(View view, CustomViewCallback callback) {
                if (mCustomView != null) {
                    callback.onCustomViewHidden();
                    return;
                }
                mCustomView = view;
                customViewCallback = callback;
                customViewContainer.addView(view);
                customViewContainer.setVisibility(View.VISIBLE);
                webView.setVisibility(View.GONE);
                getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
            }

            @Override
            public void onHideCustomView() {
                if (mCustomView == null) return;
                customViewContainer.removeView(mCustomView);
                customViewContainer.setVisibility(View.GONE);
                mCustomView = null;
                webView.setVisibility(View.VISIBLE);
                if (customViewCallback != null) {
                    customViewCallback.onCustomViewHidden();
                }
                getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
            }

            // File upload chooser for Admin Content Manager
            @Override
            public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> filePathCallback, FileChooserParams fileChooserParams) {
                if (mFilePathCallback != null) {
                    mFilePathCallback.onReceiveValue(null);
                }
                mFilePathCallback = filePathCallback;

                Intent intent = fileChooserParams.createIntent();
                try {
                    startActivityForResult(intent, FILECHOOSER_RESULTCODE);
                } catch (Exception e) {
                    mFilePathCallback = null;
                    return false;
                }
                return true;
            }
        });

        if (savedInstanceState != null) {
            webView.restoreState(savedInstanceState);
        } else {
            webView.loadUrl(APP_URL);
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == FILECHOOSER_RESULTCODE) {
            if (mFilePathCallback == null) return;
            mFilePathCallback.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(resultCode, data));
            mFilePathCallback = null;
        } else {
            super.onActivityResult(requestCode, resultCode, data);
        }
    }

    @Override
    public void onBackPressed() {
        if (mCustomView != null) {
            WebChromeClient client = (WebChromeClient) webView.getWebChromeClient();
            if (client != null) client.onHideCustomView();
            return;
        }
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
