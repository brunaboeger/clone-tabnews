import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const dbVersionQuery = await database.query("SHOW server_version;");
  const dbVersion = dbVersionQuery.rows[0].server_version;

  const dbMaxConnectionsQuery = await database.query("SHOW max_connections;");
  const dbMaxConnections = parseInt(
    dbMaxConnectionsQuery.rows[0].max_connections,
  );

  const databaseName = process.env.POSTGRES_DB;
  const dbOpenedConnectionsQuery = await database.query({
    text: "SELECT count(*) FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const dbOpenedConnections = dbOpenedConnectionsQuery.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependecies: {
      database: {
        version: dbVersion,
        max_connections: dbMaxConnections,
        opened_connections: parseInt(dbOpenedConnections),
      },
    },
  });
}

export default status;
