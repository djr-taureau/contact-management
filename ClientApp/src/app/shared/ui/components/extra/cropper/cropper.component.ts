import { Component, ViewChild } from '@angular/core';
import { CropperSettings, ImageCropperComponent } from 'ng2-img-cropper';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss']
})
export class CropperComponent {

  data: any;
  cropperSettings: CropperSettings;

  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;

  constructor() {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.croppedWidth =100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 600;
    this.cropperSettings.canvasHeight = 400;
    this.cropperSettings.noFileInput = true;
    this.data = {};
  }

  fileChangeListener($event) {
    var image: any = new Image();
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);

    };

    myReader.readAsDataURL(file);
  }




}
