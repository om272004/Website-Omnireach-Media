/**
 * Video Store for managing user-uploaded video files and video stream playback.
 * Allows visitors and the agency owner to attach their exact MP4 videos to portfolio cards.
 */

type VideoMap = Record<string, string>; // filmId -> objectURL or video URL

class VideoStoreEngine {
  private videoUrls: VideoMap = {};
  private listeners: Array<() => void> = [];

  constructor() {
    // Check if any blob URLs or custom URLs were cached in sessionStorage
    if (typeof window !== 'undefined') {
      try {
        const saved = sessionStorage.getItem('omni_custom_videos');
        if (saved) {
          this.videoUrls = JSON.parse(saved);
        }
      } catch {
        // Ignore
      }
    }
  }

  public setVideo(filmId: string, urlOrBlob: string) {
    this.videoUrls[filmId] = urlOrBlob;
    this.persist();
    this.notify();
  }

  public attachFile(filmId: string, file: File): string {
    const objectUrl = URL.createObjectURL(file);
    this.videoUrls[filmId] = objectUrl;
    this.notify();
    return objectUrl;
  }

  public getVideo(filmId: string): string | undefined {
    return this.videoUrls[filmId];
  }

  public hasCustomVideo(filmId: string): boolean {
    return Boolean(this.videoUrls[filmId]);
  }

  public subscribe(fn: () => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  private persist() {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('omni_custom_videos', JSON.stringify(this.videoUrls));
      } catch {
        // Ignore blob serialization errors
      }
    }
  }
}

export const videoStore = new VideoStoreEngine();
