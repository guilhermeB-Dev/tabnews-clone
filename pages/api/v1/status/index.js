import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const postgresVersion = await database.query("SHOW server_version;");
  const postgresVersionResult = postgresVersion.rows[0].server_version;

  const maxConnections = await database.query("SHOW max_connections;");
  const maxConnectionsResult = maxConnections.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const databaseOpenedConnectionsValue =
    databaseOpenedConnections.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: postgresVersionResult,
        max_connections: parseInt(maxConnectionsResult),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
}

export default status;
