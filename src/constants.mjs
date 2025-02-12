import { randomBytes } from "crypto";

export const medusaModules = {
  "@medusajs/medusa/cache-inmemory": `{
    resolve: "@medusajs/medusa/cache-inmemory",
    options: {
      // optional options
    },
  }`,
  "@medusajs/medusa/cache-redis": `{
    resolve: "@medusajs/medusa/cache-redis",
    options: {
      redisUrl: process.env.REDIS_URL,
    },
  }`,
  "@medusajs/medusa/event-bus-local": `{
    resolve: "@medusajs/medusa/event-bus-local",
  }`,
  "@medusajs/medusa/event-bus-redis": `{
    resolve: "@medusajs/medusa/event-bus-redis",
    options: {
      redisUrl: process.env.REDIS_URL,
    },
  }`,
  // File Storage Providers
  "@medusajs/medusa/file-storage-local": `{
    resolve: "@medusajs/medusa/file",
    options: {
      providers: [
        {
          resolve: "@medusajs/medusa/file-local",
          id: "local",
          options: {
            // provider options...
          },
        },
      ],
    },
  }`,
  "@medusajs/medusa/file-storage-s3": `{
    resolve: "@medusajs/medusa/file",
    options: {
      providers: [
        {
          resolve: "@medusajs/medusa/file-s3",
          id: "s3",
          options: {
            file_url: process.env.S3_FILE_URL,
            access_key_id: process.env.S3_ACCESS_KEY_ID,
            secret_access_key: process.env.S3_SECRET_ACCESS_KEY,
            region: process.env.S3_REGION,
            bucket: process.env.S3_BUCKET,
            endpoint: process.env.S3_ENDPOINT,
            additional_client_config: {
              forcePathStyle: true,
            },
          },
        },
      ],
    },
  }`,
  // Payment Providers
  "@medusajs/medusa/payment-stripe": `{
    resolve: "@medusajs/medusa/payment",
    options: {
      providers: [
        {
          resolve: "@medusajs/medusa/payment-stripe",
          id: "stripe",
          options: {
            apiKey: process.env.STRIPE_API_KEY,
          },
        },
      ],
    },
  }`,
};

export let medusaConfig = {
  // Medusa Configuration
  adminEmail: "admin@example.com",
  adminPassword: "supersecret",
  adminCors:
    "http://localhost:5173,http://localhost:9000,https://docs.medusajs.com",
  authCors:
    "http://localhost:5173,http://localhost:9000,https://docs.medusajs.com",
  baseRepository: "https://github.com/medusajs/medusa-starter-default.git",
  cacheModule: "@medusajs/medusa/cache-inmemory",
  configuredModules: [
    medusaModules["@medusajs/medusa/cache-redis"],
    medusaModules["@medusajs/medusa/event-bus-redis"],
    medusaModules["@medusajs/medusa/file-storage-s3"],
    medusaModules["@medusajs/medusa/payment-stripe"],
  ],
  cookieSecret: "supersecret",
  createPgContainer: true,
  createPgContainer: true,
  createRedisContainer: true,
  createRedisContainer: true,
  createStorefront: true,
  dbUser: "postgres",
  dbPassword: randomBytes(16).toString("hex"),
  dbName: "medusadb",
  dbHost: "postgres",
  dbPort: "5432",
  eventBusModule: "@medusajs/medusa/event-bus-local",
  fileStorageModule: "@medusajs/medusa/file-storage-local",
  jwtSecret: "supersecret",
  medusaAdminOnboardingType: "default",
  meilisearchHost: "meilisearch",
  meilisearchMasterKey: randomBytes(32).toString("hex"),
  meilisearchApiKey: randomBytes(32).toString("hex"),
  minioBucket: "medusa-server",
  minioRootPassword: randomBytes(16).toString("hex"),
  minioAccessKey: randomBytes(32).toString("hex"),
  minioSecretKey: randomBytes(32).toString("hex"),
  minioRootUser: "admin",
  paymentModule: "@medusajs/medusa/payment-stripe",
  postStartCommand: "npx medusa user -e admin@example.com -p supersecret",
  projectName: "my-store",
  redisUrl: "redis://redis:6379",
  s3AccessKeyId: "",
  s3Bucket: "medusa-server",
  s3Endpoint: "http://minio:9100/medusa-server",
  s3FileUrl: "http://minio:9100/",
  s3Region: "us-east-1",
  s3SecretAccessKey: "",
  seedDemoData: true,
  storeCors: "http://localhost:8000,https://docs.medusajs.com",
  stripeApiKey: "sk_test_51Iel5o0i6i5x5p6x7y8z9",
  useDefaultSettings: false,
};
