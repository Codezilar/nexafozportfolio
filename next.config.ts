import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  // typescript: {
  //   ignoreBuildErrors: true,
  // }
};

export default withNextVideo(nextConfig);