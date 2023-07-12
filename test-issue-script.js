const { compile } = require('./dist/src');

// const schema = {
//   "title": "2022 Example Schema",
//   "type": "object",
//   "properties": {
//     "id": {
//       "type": "string",
//       "example": "61e36b8fc12c4d8fd0842f76"
//     }
//   }
// };

// compile(schema).then(ts => console.log(ts));

const schema2 = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "title": "Product Export Schema",
  "properties": {
    "products": {
      "type": "array",
      "title": "Products",
      "items": {
        "oneOf": [
          {
            "type": "object",
            "title": "3D Model",
            "properties": {
              "type": {
                "type": "string",
                "title": "Type",
                "constant": "3d_surface_model"
              },
              "description": {
                "type": "string",
                "title": "Description",
                "default": ""
              },
              "status": {
                "type": "string",
                "title": "200",
                "example": "200",
                "description": "...."
              }
            }
          }
        ]
      },
      "minItems": 1
    }
  }
}

compile(schema2).then(ts => console.log(ts));