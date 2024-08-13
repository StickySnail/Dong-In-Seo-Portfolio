const path = require("path");

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        domains: ["res.cloudinary.com", "media.dev.to"],
    },
};

// const path = require("path");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: "export", // Enable static export
//     sassOptions: {
//         includePaths: [path.join(__dirname, "styles")],
//     },
//     images: {
//         unoptimized: true, // Required for static export
//         domains: ["res.cloudinary.com", "media.dev.to"], // Keep your domain settings
//     },
//     // Uncomment and modify these if deploying to a subdirectory (e.g., GitHub Pages)
//     basePath: "/sticksnail.github.io",
//     assetPrefix: "/sticksnail.github.io/",
// };

// module.exports = nextConfig;
