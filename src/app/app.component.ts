import { Component } from '@angular/core';
import 'lg-zoom.js';
import 'lg-share.js';
import 'lg-video.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lg-angular';
  ngOnInit() {
    document.getElementById('dynamic').addEventListener('click', () => {
      lightGallery(document.getElementById('dynamic'), {
        dynamic: true,
        download: true,
        dynamicEl: [{
          src: "https://dummyimage.com/16:9x1080/"
        }, {
          src: "https://dummyimage.com/16:9x800/"
        }, {
          src: "https://dummyimage.com/16:9x1080/"
        }, {
          src: "https://www.youtube.com/watch?v=Pq9yPrLWMyU"
        }]
      });
    })
    lightGallery(document.getElementById('lightgallery'), {
      actualSize: false
    });
  }
}
