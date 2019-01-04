#!/usr/bin/env node

var minimist = require("minimist");
var { authenticate } = require("./auth");

var run = async function() {
  var args = minimist(process.argv);
  if (args.help) {
    console.log(`
Options:
  --help
    Show this help dialog
  --scope SCOPE
    Add an OAuth scope to the authentication request. You can provide this
    option multiple times to add additional scopes.
`.trim());
    return;
  }
  var extraScopes = args.scope instanceof Array ? args.scope : [ args.scope ];
  await authenticate(extraScopes);
  console.log("Finished, you are now logged in.");
  process.exit();
};

run();