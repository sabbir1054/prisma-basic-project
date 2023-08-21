import app from "./app";

const port = process.env.PORT || 5003;

async function main() {
  app.listen(port, () => {
    console.log("Server running on port : ", port);
  });
}

main();
