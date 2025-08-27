/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  output: 'export', // 정적 export 설정
  trailingSlash: true,  // URL 끝에 슬래시 추가
};

export default nextConfig;