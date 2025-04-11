/** @type {import('next').NextConfig} */

import config from "./next-i18next.config.js";
const { i18n } = config;

const nextConfig = {
  i18n,
  reactStrictMode: true,
};

export default nextConfig;
