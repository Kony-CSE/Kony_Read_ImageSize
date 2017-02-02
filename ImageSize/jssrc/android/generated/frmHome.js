//Form JS File
function frmHome_camCamera_onCapture_seq0(eventobject) {
    onCameraClick.call(this);
};

function frmHome_btn_onClick_seq0(eventobject) {
    openGalleryPersonalization.call(this);
};

function addWidgetsfrmHome() {
    var lblCamera = new kony.ui.Label({
        "id": "lblCamera",
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
        "textCopyable": false
    });
    var camCamera = new kony.ui.Camera({
        "id": "camCamera",
        "top": "50dp",
        "left": "113dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Use Camera",
        "skin": "camSkin",
        "focusSkin": "camFocus",
        "onCapture": frmHome_camCamera_onCapture_seq0,
        "scaleFactor": 80,
        "compressionLevel": 0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
    var imgCamera = new kony.ui.Image2({
        "id": "imgCamera",
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
    }, {});
    var lblCamera2 = new kony.ui.Label({
        "id": "lblCamera2",
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
        "textCopyable": false
    });
    var lblCamSize = new kony.ui.Label({
        "id": "lblCamSize",
        "top": "35.0%",
        "left": "60.0%",
        "width": "100dp",
        "height": "26dp",
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
        "textCopyable": false
    });
    var flxCamera = new kony.ui.FlexContainer({
        "id": "flxCamera",
        "top": "125dp",
        "left": "5%",
        "width": "90%",
        "height": "35.0%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[22,125]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxCamera.setDefaultUnit(kony.flex.DP)
    flxCamera.add(imgCamera, lblCamera2, lblCamSize);
    var lblGallery = new kony.ui.Label({
        "id": "lblGallery",
        "top": "65.0%",
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
        "textCopyable": false
    });
    var btn = new kony.ui.Button({
        "id": "btn",
        "top": "75%",
        "left": "264dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Open Gallery",
        "skin": "btnGallery",
        "focusSkin": "btnFocus",
        "onClick": frmHome_btn_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var imgGallery = new kony.ui.Image2({
        "id": "imgGallery",
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
    }, {});
    var lblGallery2 = new kony.ui.Label({
        "id": "lblGallery2",
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
        "textCopyable": false
    });
    var lblGallerySize = new kony.ui.Label({
        "id": "lblGallerySize",
        "top": "35.0%",
        "left": "60.0%",
        "width": "100dp",
        "height": "26dp",
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
        "textCopyable": false
    });
    var flxGallery = new kony.ui.FlexContainer({
        "id": "flxGallery",
        "top": "90%",
        "left": "5%",
        "width": "90%",
        "height": "35.0%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[22,405]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxGallery.setDefaultUnit(kony.flex.DP)
    flxGallery.add(imgGallery, lblGallery2, lblGallerySize);
    frmHome.add(lblCamera, camCamera, flxCamera, lblGallery, btn, flxGallery);
    frmHome.setDefaultUnit(kony.flex.DP);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBGSkin",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};