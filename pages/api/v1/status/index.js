import database from "/infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();
  const postgresVersion = await database.query("show server_version;");
  const maxConnections = await database.query("show max_connections;");

  const databaseName = process.env.POSTGRES_DB;
  const usedConnections = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  response.status(200).json({
    updated_at: updateAt,
    dependencies: {
      database: {
        version: postgresVersion.rows[0].server_version,
        max_connections: parseInt(maxConnections.rows[0].max_connections),
        opened_connections: usedConnections.rows[0].count,
      },
    },
  });
}

export default status;
