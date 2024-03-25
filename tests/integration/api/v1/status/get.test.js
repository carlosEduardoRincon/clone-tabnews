test("Get /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status/");
  expect(response.status).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);

  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdateAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdateAt);

  expect(responseBody.postgres_version).toBeDefined();

  expect(responseBody.max_connections).toBeDefined();

  expect(responseBody.used_connections).toBeDefined();
});
