import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.thegioidochoi.kodomv",
  appName: "KodoMV Reader",
  webDir: "build",
  server: {
    androidScheme: "https",
  },
};

export default config;
