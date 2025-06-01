/** @type {import('next').NextConfig} */
const nextConfig = {
  // Включаем строгий режим для лучшей производительности
  reactStrictMode: true,

  // Оптимизация изображений
  images: {
    // Разрешенные домены для оптимизации изображений
    domains: ["via.placeholder.com", "placehold.co", "dummyimage.com"],
    // Форматы изображений для оптимизации
    formats: ["image/avif", "image/webp"],
    // Отключаем неиспользуемые форматы
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Оптимизация сборки
  poweredByHeader: false,
  compress: true,

  // Оптимизация кэширования
  onDemandEntries: {
    // Период хранения страниц в памяти
    maxInactiveAge: 25 * 1000,
    // Максимальное количество страниц в памяти
    pagesBufferLength: 2,
  },

  // Оптимизация загрузки
  experimental: {
    // Включаем оптимизацию CSS
    optimizeCss: true,
    // Включаем оптимизацию пакетов
    optimizePackageImports: ["@radix-ui/react-icons", "lucide-react"],
    // Включаем оптимизацию кэширования
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  // Оптимизация webpack
  webpack: (config, { dev, isServer }) => {
    // Оптимизация только для production
    if (!dev && !isServer) {
      // Включаем tree shaking
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: "all",
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }

    return config;
  },

  // Оптимизация заголовков
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Оптимизация редиректов
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // Оптимизация rewrites
  async rewrites() {
    return {
      beforeFiles: [
        // Пример: перенаправление старых URL на новые
        {
          source: "/old-path/:path*",
          destination: "/new-path/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
