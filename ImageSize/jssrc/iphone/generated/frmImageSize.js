//Form JS File
function frmImageSize_camCamera_onCapture_seq0(eventobject) {
    onCameraClick.call(this);
};

function frmImageSize_button999296733187008_onClick_seq0(eventobject) {
    openGalleryPersonalization.call(this);
};

function addWidgetsfrmImageSize() {
    var lblCTitle = new kony.ui.Label({
        "id": "lblCTitle",
        "top": "10dp",
        "left": "5%",
        "width": "90%",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Capture Image Using Camera Widget",
        "skin": "lblWhite"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var camCamera = new kony.ui.Camera({
        "id": "camCamera",
        "top": "10dp",
        "left": "113dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Use Camera",
        "skin": "camSkin",
        "focusSkin": "camFocus",
        "onCapture": frmImageSize_camCamera_onCapture_seq0,
        "scaleFactor": 80,
        "compressionLevel": 100
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "imageFormat": constants.CAMERA_IMAGE_FORMAT_JPEG,
        "nativeUserInterface": true,
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_DEFAULT,
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "overlayConfig": {}
    });
    var imgFromCamera = new kony.ui.Image2({
        "id": "imgFromCamera",
        "top": "0dp",
        "left": "0dp",
        "width": "40%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblText1 = new kony.ui.Label({
        "id": "lblText1",
        "top": "10.0%",
        "left": "45%",
        "width": "50%",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Image Size in KB",
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblCImgSize = new kony.ui.Label({
        "id": "lblCImgSize",
        "top": "35.0%",
        "left": "60.0%",
        "centerX": "70%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flxCamera = new kony.ui.FlexContainer({
        "id": "flxCamera",
        "top": "10dp",
        "left": "5%",
        "width": "90%",
        "height": "35.0%",
        "zIndex": 1,
        "isVisible": false,
        "clipBounds": true,
        "Location": "[22,106]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxCamera.setDefaultUnit(kony.flex.DP)
    flxCamera.add(imgFromCamera, lblText1, lblCImgSize);
    var lblGTitle = new kony.ui.Label({
        "id": "lblGTitle",
        "top": "10dp",
        "left": "5%",
        "width": "90%",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Select Image From Gallery",
        "skin": "lblWhite"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var button999296733187008 = new kony.ui.Button({
        "id": "button999296733187008",
        "top": "10dp",
        "left": "264dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Open Gallery",
        "skin": "btnGallery",
        "focusSkin": "btnFocus",
        "onClick": frmImageSize_button999296733187008_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var imgFromGallery = new kony.ui.Image2({
        "id": "imgFromGallery",
        "top": "0dp",
        "left": "0dp",
        "width": "40%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblText2 = new kony.ui.Label({
        "id": "lblText2",
        "top": "10.0%",
        "left": "45%",
        "width": "50%",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Image Size in KB",
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblGImageSize = new kony.ui.Label({
        "id": "lblGImageSize",
        "top": "35.0%",
        "left": "60.0%",
        "centerX": "70.0%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flxGallery = new kony.ui.FlexContainer({
        "id": "flxGallery",
        "top": "10dp",
        "left": "5%",
        "width": "90%",
        "height": "35.0%",
        "zIndex": 1,
        "isVisible": false,
        "clipBounds": true,
        "Location": "[22,369]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxGallery.setDefaultUnit(kony.flex.DP)
    flxGallery.add(imgFromGallery, lblText2, lblGImageSize);
    frmImageSize.add(lblCTitle, camCamera, flxCamera, lblGTitle, button999296733187008, flxGallery);
    frmImageSize.setDefaultUnit(kony.flex.DP);
};

function frmImageSizeGlobals() {
    var MenuId = [];
    frmImageSize = new kony.ui.Form2({
        "id": "frmImageSize",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBGSkin",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "addWidgets": addWidgetsfrmImageSize
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        }
    });
};