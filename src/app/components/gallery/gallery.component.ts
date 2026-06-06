import { Component } from '@angular/core';
import { galleryData } from '../../data/gallery.data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  readonly gallery = galleryData;
}
