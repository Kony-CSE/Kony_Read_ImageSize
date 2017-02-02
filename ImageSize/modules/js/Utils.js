function openGalleryPersonalization()
{
       var querycontext = {mimetype:"image/*"};
       var returnStatus = kony.phone.openMediaGallery(onselectioncallback, querycontext);
}

function onselectioncallback(rawbytes)
{
    
    if (rawbytes == null)
    {
       return;
    }

    var base64Val = kony.convertToBase64(rawbytes); 
    //alert("Base64 Length from rawbytes ::"+base64Val.length); 
    //alert("Base64 Image Actual lengths ::"+ ((base64Val.length*0.75 )/1024) );
    frmImageSize.imgFromGallery.base64=base64Val;
    frmImageSize.lblCImgSize.text=((base64Val.length*0.75 )/1024)+"KB";
    frmImageSize.flxGallery.setVisibility(true);
      
}



function onCameraClick() {
      var base64Val = kony.convertToBase64(frmImageSize.camCamera.rawBytes);
      frmImageSize.lblGImageSize.text =((base64Val.length*0.75 )/1024)+"KB";
      frmImageSize.imgFromCamera.base64 = base64Val;
      frmImageSize.flxCamera.setVisibility(true);
       
}
