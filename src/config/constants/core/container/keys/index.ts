const { freeze } = Object;

const containerKeys = freeze({
  // appEnvironment: "app-environment",
  appResponse: "app-response",
  appRequest: "app-request",
  controllers: "controllers",
  daos: "daos",
  databases: "databases",
  databaseMongo: "db.mongodb",
  databaseRedis: "db.redis",
  // exchanges: "exchanges",
  models: "models",
  repositories: "repositories",
  // scheduledJobs: "scheduledJobs",
  services: "services",
});

export default containerKeys;
