function status(request, response) {
  response.status(200).json({ response: "Hello API" });
}

export default status;
