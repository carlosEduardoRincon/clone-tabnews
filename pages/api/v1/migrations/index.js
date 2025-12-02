import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  const defaultMigrtationOptioons = {
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };

  if (request.method == "GET") {
    const pendingMigration = await migrationRunner(defaultMigrtationOptioons);

    return response.status(200).json(pendingMigration);
  }

  if (request.method == "POST") {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrtationOptioons,
      dryRun: false,
    });

    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations);
    }
    return response.status(200).json(migratedMigrations);
  }

  return response.status(405);
}
