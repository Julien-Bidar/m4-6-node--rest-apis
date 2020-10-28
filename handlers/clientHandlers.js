const { v4: uuidv4 } = require("uuid");
const { clients } = require("../data/clients");

// write your handlers here...
const handleClients = (req, res) => {
  const data = clients;
  res.status(200).json({ status: 200, data });
};

const clientById = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const client = clients.filter((client) => {
    return id === client.id;
  });
  if (client.length === 0) {
    res.status(400).json({ status: 400, message: "client not found" });
  } else {
    res.status(200).json({ status: 200, client: client });
  }
};

const addClient = (req, res) => {
  const data = req.body;
  //checking if emails exists
  const emailExists = clients.some((client) => {
    return client.email === data.email;
  });
  if (emailExists) {
    res.status(403).json({
      status: 403,
      message: "this email address is already registered",
    });
  } else {
    const id = uuidv4();
    data.id = id;
    clients.push(data);
    res.status(201).json({ status: 201, message: "client registered" });
  }
};

const deletClient = (req, res) => {
  const id = req.params.id;
  //finding index to delete
  let index = undefined;
  clients.forEach((client) => {
    if (id === client.id) {
      index = clients.indexOf(client);
    }
  });
  if (index >= 0) {
    clients.splice(index, 1);
    res.status(200).json({ status: 200, message: "deleted" });
  } else {
    res.status(400).json({ status: 400, message: "client not found" });
  }
};

module.exports = { handleClients, clientById, addClient, deletClient };
