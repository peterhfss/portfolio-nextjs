
/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[name][ext]',
      },
    })

    return config
},
};

export default nextConfig;
