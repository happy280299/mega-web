import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3001, // Đặt cổng là 3001
    host: true, // Để cho phép truy cập từ bên ngoài container
  },
});
