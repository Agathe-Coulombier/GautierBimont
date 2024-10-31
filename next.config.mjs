import { i18n } from './next-i18next.config.js';
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    i18n,
    ...nextConfig,
    reactStrictMode: true,
};
