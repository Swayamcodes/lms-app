"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

// @ts-expect-error: react-player has no type declarations in this project
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
}) as unknown as ComponentType<Record<string, unknown>>;

interface VideoPlayerProps {
  url: string;
}

export const VideoPlayer = ({ url }: VideoPlayerProps) => {
  return (
    <div className="relative aspect-video">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};
