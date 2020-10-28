"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  handleClients,
  clientById,
  addClient,
  deletClient,
} = require("./handlers/clientHandlers");
const { handleWord, randomWord, guess } = require("./handlers/hangmanHandlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  //clients
  .get("/clients", handleClients)

  //client by id
  .get("/client/:id", clientById)

  //add client
  .post("/client", addClient)

  //delete client based on id
  .delete("/client/:id", deletClient)

  //--------Hangman-------------------//
  .get("/hangman/word/:id", handleWord)

  .get("/hangman/word", randomWord)

  .get("/hangman/guess/:id/:letter", guess)

  .listen(8000, () => console.log(`Listening on port 8000`));
