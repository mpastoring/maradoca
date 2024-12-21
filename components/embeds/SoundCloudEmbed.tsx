type SoundCloudEmbedProps = {
  trackId: string;
  title: string;
};

export function SoundCloudEmbed({ trackId, title }: SoundCloudEmbedProps) {
  return (
    <iframe
      key={trackId}
      width="100%"
      height="20"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      title={title}
      loading="lazy"
      className="px-2 md:px-3"
      src={`https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${trackId}&color=%23ff5500&inverse=true&auto_play=false&show_user=true&show_playcount=false&show_artwork=false&buying=false&sharing=false&download=false`}
    ></iframe>
  );
}
