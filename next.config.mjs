import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default function config(phase) {
  return {
    ...nextConfig,
    // Keep dev artifacts separate so `next build` doesn't corrupt a running `next dev` session.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next"
  };
}
