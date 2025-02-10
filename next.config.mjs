/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "dedevs.club",
      },
    ],
    domains: [
      "dedevs.club", 
      "avatars.githubusercontent.com",
      "img-v2-prod.whop.com",
      "whop-cdn.com",
      "whop.com",
      "x.com",
      "discord.gg",
      "discord.com",
      "res.cloudinary.com",
      "cdn.discordapp.com",
      "*.dedevs.club",
      "canva.com",
      "*.canva.com",
    ],
  },
};

export default nextConfig;
