const { compile } = require(".");

const schema = {
  "title": "2022 Example Schema",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "61e36b8fc12c4d8fd0842f76"
    }
  }
};

compile(schema).then((ts: any) => console.log(ts));
