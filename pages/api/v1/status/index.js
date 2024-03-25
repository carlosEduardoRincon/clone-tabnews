import database from "/infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();
  const postgresVersion = await database.query("SELECT version();");
  const maxConnections = await database.query("show max_connections;");
  const usedConnections = await database.query(
    "SELECT COUNT(*) FROM pg_stat_activity WHERE state = 'active';",
  );

  response.status(200).json({
    updated_at: updateAt,
    postgres_version: postgresVersion.rows[0].version,
    max_connections: maxConnections.rows[0].max_connections,
    used_connections: usedConnections.rowCount,
  });
}

export default status;
