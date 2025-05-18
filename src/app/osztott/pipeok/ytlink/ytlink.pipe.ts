import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'ytlink'
})
export class YtlinkPipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ){}

  transform(value: string): SafeResourceUrl {
    if (!value) return this.sanitizer.bypassSecurityTrustResourceUrl('');

    // youtu.be/VIDEO_ID kezelése
    if (value.includes("youtu.be")) {
      const videoId = value.split('/').pop()?.split('?')[0] || '';
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }

    // youtube.com/watch?v=VIDEO_ID kezelése
    if (value.includes("youtube.com/watch")) {
      const url = new URL(value);
      const videoId = url.searchParams.get('v');
      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      }
    }

    // Ha már embed URL, vagy más forrás, eredeti értékkel tér vissza
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
