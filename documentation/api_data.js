define({ "api": [
  {
    "type": "get",
    "url": "/document/:id",
    "title": "",
    "name": "GetDocument",
    "group": "Document",
    "description": "<p>Get single document.</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>document id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"data\": {\n      \"type\": [\n       \"Konstverk\"\n      ],\n      \"title\": \"Sittande pojke\",\n      \"title_en\": \"\",\n      \"size\": {\n        \"inner\": {\n          \"width\": 30.5,\n          \"height\": 38.8\n        }\n      },\n      \"collection\": {\n        \"museum\": \"Göteborgs konstmuseum\"\n      },\n      [...]\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app.js",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/documents?params",
    "title": "",
    "name": "GetDocuments",
    "group": "Documents",
    "description": "<p>Gets documents based on search params.</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "insert_id",
            "description": "<p>{String} Get documents with insert_id creater than given value</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "museum",
            "description": "<p>{String} Get documents from a specific museum</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "bundle",
            "description": "<p>{String} Get documents in a specific bundle</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "search",
            "description": "<p>{String} Get documents based on search strings. Searches in various fields listed below</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "type",
            "description": "<p>{String} Get documents of specific type</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "person",
            "description": "<p>{String} Get documents tagged with a specific person/persons</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tags",
            "description": "<p>{String} Get documents with a specific tag/tags</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "place",
            "description": "<p>{String} Get documents tagged with a specific place/places</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "genre",
            "description": "<p>{String} Get documents of specific genre</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "year",
            "description": "<p>{String} Get documents of from specific year</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "archivematerial",
            "description": "<p>{String} Defines if search should exclusively return artworks and photographs (only) or exclude artworks and photographs (exclude)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"total\": 1423,\n    \"documents\": [\n      {\n        \"type\": [\n         \"Konstverk\"\n        ],\n        \"title\": \"Sittande pojke\",\n        \"title_en\": \"\",\n        \"size\": {\n          \"inner\": {\n            \"width\": 30.5,\n            \"height\": 38.8\n          }\n        },\n        \"collection\": {\n          \"museum\": \"Göteborgs konstmuseum\"\n        }\n      },\n      [...]\n    ],\n    [...]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app.js",
    "groupTitle": "Documents"
  }
] });
