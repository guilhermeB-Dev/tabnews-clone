import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows[0]);
  response.status(200).json("O professor Filipe Deshamps é o melhor");
}

export default status;
