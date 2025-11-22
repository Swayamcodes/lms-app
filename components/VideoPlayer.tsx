"use client";

interface VideoPlayerProps {
  url: string; // your YouTube link from Sanity
}

export const VideoPlayer = ({ url }: VideoPlayerProps) => {
  // Convert normal YouTube or youtu.be link → embed link
  const embedUrl = url
    .replace("watch?v=", "embed/")
    .replace("youtu.be/", "www.youtube.com/embed/");

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
      <iframe
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      />
    </div>
  );
};
