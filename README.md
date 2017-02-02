# Kony_Read_ImageSize
How to read the capture and selected image size in Kony
In this example we have used the below formula to calculate the image size. We are calculating image size using the base64 string of image.<br><br/>
var base64Val = kony.convertToBase64(rawbytes); <br/>
alert("Base64 Length from rawbytes ::"+base64Val.length); <br/>
alert("Base64 Image Actual lengths ::"+ ((base64Val.length*0.75 )/1024) );<br/>

Here we need to take care of few thing. For iOS we have givne the imageFormat proeprty. If you are using imageFormat as PNG then you will get differet result for the same image when you open it from gallery.
<br/><br/>
Step1: The Captured Image from the Camera is converted to PNG RAWBYTES because the "imageFormat" property of the Camera Contructor is set to constants.CAMERA_IMAGE_FORMAT_PNG and then writing to the Camera Roll.
i.e., In the callback onCameraClick() which receives PNG RAWBYTES.
<br/><br/>
Step2: The same Image (Caputure Image) picking from the Camera Roll is converted to JPEG RAWBYTES by default based on the internal logic(there is no way to choose png or jpeg).
i.e., onselectioncallback(rawbytes) callback receives JPEG RAWBYTES
<br/><br/>
To ge the extact size of the image from Camera and Gallery we need to set the "imageFormat" property of the Camera Contructor to CAMERA_IMAGE_FORMAT_JPEG and "compressionLevel" property of the Camera in the contructor to  100.
<br/><br/>
We have taken care all the steps in our sample.
<br/><br/>
<font size="10"><b>Supported Channels</b></font><br/>
1) iPhone
2) Android

<font size="10"><b>Supported Versions</b></font><br/>
6.5 and above
