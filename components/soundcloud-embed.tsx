interface SoundCloudEmbedProps {
  url: string;
  title: string;
}

const SoundCloudEmbed = ({ url, title }: SoundCloudEmbedProps) => {
  return (
    <div className="w-full mb-8">
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
          url,
        )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
      ></iframe>
      <div className="text-xs text-gray-500 mt-2">
        <a
          href="https://soundcloud.com/maradoca"
          title="MARADOCA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          MARADOCA
        </a>{" "}
        ·{" "}
        <a
          href={url}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default SoundCloudEmbed;
