const fs = require('fs');
const path = require('path');
const { executeQuery } = require('../Database/queryExecution');
const mysql = require('mysql');
require('dotenv').config({ path: '../.env' });

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE,
  timezone: process.env.DB_TIMEZONE,
  port: process.env.DB_PORT
};

const projectdb = () => {
  const connection = mysql.createConnection(dbConfig);
  return connection; 
};


const snakeToCamel = (str) => {
  return str.replace(/_([a-z])/g, (match, group1) => group1.toUpperCase());
};
const lowerSnakeToCamel = (str) => {
  return str
    .replace(/_([a-z])/g, (match, group1) => group1.toUpperCase())
    .replace(/^([A-Z])/, (match) => match.toLowerCase());
};

function snakeToSeparatedWords(snakeCaseStr) {
  return snakeCaseStr
      .split('_') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' '); 
}

const frontEndTemplate = {
  object : (table, columns, objectName, primaryKey) => {
      const filterClause = columns.map(col => `"${table}_${snakeToCamel(col.COLUMN_NAME)}"`).join(', ');
      return `
          import { parameters } from "./CRUD_parameters.js";
          import generateFormProps  from "../../../../Components/DataLayout/constants/generateFormProps.js";
          import  serverCommunicationHelper from "../../../../Components/DataLayout/constants/serverCommunicationHelper.js";
          export const listing_crud_props = {
              data: {
              features: {
                  parameters: parameters,
                  rowActions: {
                  actions: [
                      {
                      name: "Edit",
                      color: "blue",
                      permission: 'update_${table}',
                      onAction: () => console.log("Button pressed Edit"),
                      form: generateFormProps({
                          parameters: parameters,
                          apiUrl: "/${table}/update?version=1.0",
                          requestType: "PUT",
                          mode:"edit"
                      }),
                      },
                      {
                      name: "Delete",
                      color: "red",
                      permission: 'delete_${table}',
                      serverCommunication: serverCommunicationHelper({
                          parameters: parameters,
                          apiUrl:"/${table}/delete?version=1.0",
                          requestType: "DELETE",
                      }),
                      onAction: () => console.log("Button pressed Delete"),
                      },
                      {
                      name: "View",
                      color: "grey",
                      permission: 'view_${table}',
                      onAction: () => console.log("Button pressed View"),
                      form: generateFormProps({
                          parameters: parameters,
                          apiUrl: "/${table}/view?version=1.0",
                          requestType: "GET",
                          mode:"view"
                      }),
                      },
                  ],
                  },
                  bulkAction: {
                  add: {
                      permission:'add_${table}',
                      form: generateFormProps({
                      parameters: parameters,
                      apiUrl: "/${table}/add?version=1.0",
                      requestType: "POST",
                      mode:"create"
                      }),
                  },
                  },

                  export: {
                    permission: 'export_${table}',
                    serverCommunication: serverCommunicationHelper({
                        parameters: parameters,
                        apiUrl: "",
                        apiActionType: "",
                        requestType: "",
                        reduxActionType: "",
                  }),
                  onAction: (e) => console.log("Export Action", e),
                  options: {
                      formats: ["CSV", "PDF"],
                      includeHeaders: true,
                      icon: "",
                  },
                  },
                  filter: {
                  permission: 'filter_${table}',
                  serverCommunication: serverCommunicationHelper({
                      parameters: parameters,
                      apiUrl: "",
                      apiActionType: "",
                      requestType: "",
                      reduxActionType: "",
                  }),
                  onAction: (e) => console.log("Filter Action", e),
                  options: {
                      filterBy: [
                          ${filterClause}
                      ],
                      statusOptions: ["active", "inactive"],
                  },
                  excludeFilter: [],
                  },
                  sort: {
                  permission: 'sort_${table}',
                  serverCommunication: serverCommunicationHelper({
                      parameters: parameters,
                      apiUrl: "",
                      apiActionType: "",
                      requestType: "",
                      reduxActionType: "",
                  }),
                  onAction: (e) => console.log("Sort Action", e),
                  options: {
                      defaultSortField: "id",
                      defaultSortOrder: "asc",
                      multiColumnSort: true,
                  },
                  excludeSort: [],
                  },
                  list: {
                  permission:'list_${table}',
                  serverCommunication: serverCommunicationHelper({
                      parameters: parameters,
                      apiUrl:  "/${table}/list?version=1.0",
                      apiActionType: "",
                      requestType: "GET",
                      reduxActionType: "",
                  }),
                  },
                  search: {
                  permission: 'search_${table}',
                  excludeSearch: ["image"],
                  serverCommunication: serverCommunicationHelper({
                      parameters: parameters,
                      apiUrl: "",
                      apiActionType: "",
                      requestType: "",
                      reduxActionType: "",
                  }),
                  },
                  grid: {
                  entitiesPerRow: 2,
                  buttonEnable: true,
                  checkBoxEnable: true,
                  actionButtonEnable: true,
                  },
                  pagination: {
                  parameters: null,
                  permission: true,
                  serverCommunication: serverCommunicationHelper({
                      parameters: parameters,
                      apiUrl: "/${table}/view",
                      apiActionType: "hr_${table}_view",
                      requestType: "GET",
                      reduxActionType: "hr_${table}_view",
                  }),
                  options: {
                      pageSize: 10,
                      pageSizeOptions: [4, 5, 10, 20, { label: "All", value: -1 }],
                  },
                  onAction: (e) => {
                      console.log("Pagination Action", e);
                  },
                  },
              },
              },
              config: {
              viewMode: {
                  presentation: ["Table", "Grid"],
              },
              features: {
                  export: { enable: true, operationalMode: "server",permission:true },
                  filter: { enable: true, operationalMode: "server" ,permission:true},
                  sort: { enable: true, operationalMode: "server" ,permission:true},
                  search: { enable: true, operationalMode: "server" ,permission:true},
                  pagination: { enable: true, operationalMode: "server" },
                  bulkAction: { enable: true, operationalMode: "server" ,permission:true},
                  viewModes: { enable: true, operationalMode: "server" },
                  grid: { enable: true, operationalMode: "server" },
                  colaborator: { enable: false, operationalMode: "server" },
                  rowActions: { enable: true, operationalMode: "server" ,permission:true},
                  list: { enable: true, operationalMode: "server" ,permission:true},
                  parameters: { enable: true, operationalMode: "local" },
              },
              },
              appearance: {
              export: {
                  button: [
                  {
                      type: "confirm",
                      backgroundColor: "#007bff",
                      color: "#fff",
                  },
                  {
                      type: "cancel",
                      backgroundColor: "#ccc",
                      color: "#333",
                  },
                  ],
              },
              filter: [
                  {
                  type: "text",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  },
                  {
                  type: "dropdown",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  },
                  {
                  type: "date",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  },
              ],
              parent: {
                  appBarColor: "#2F317D",
                  appBarTextColor: "#ffffff",
              },
              grid: {
                  image: {
                  borderColor: "#7479ed",
                  },
                  actionButtons: {
                  color: "#7b7a8c",
                  },
                  button: {
                  buttonColor: "#818093",
                  buttonVarient: "contained",
                  buttonTextColor: "#ffffff",
                  },
                  header: {
                  headColor: "#e5e5e5",
                  headTextColor: "#260143",
                  },
                  cardFont: {
                  headingSize: 15,
                  headingWeight: 650,
                  textSize: 13,
                  textWeight: 500,
                  heading: "#260143",
                  color: "#5a5897",
                  },
              },
              },
          };
      `
  },
  parameters : (table, columns, objectName, primaryKey) =>{
      const aliasedColumns = columns.map(col => ` '${table}_${snakeToCamel(col.COLUMN_NAME)}' : '${col.COLUMN_NAME}'`).join(', ');

      return `
          export const parameters = {
              "steps": [
                  {
                  "title": "${snakeToCamel(table)} Info",
                  "parameters": {
                      "fields": [
                      {
                          "name": "${snakeToCamel(table)}",
                          "type": "section",
                          "hideInCreateForm": false,
                          "visible": false,
                          "required": false,
                          "disabled": false,
                          "validations": "",
                          "dependancyCheck": false,
                          "isPrefilled": false,
                          "source": "req.body",
                          "title": "${snakeToCamel(objectName)}",
                          "childFields": [
                                          {
                                            "name": "id",
                                            "label": "id",
                                            "title": "",
                                            "type": "textField",
                                            "required": false,
                                            "hideInCreateForm": true,
                                            "hideInViewForm" : true,
                                            "visible": false,
                                            "disabled": false,
                                            "dependancyCheck": false,
                                            "isPrefilled": false,
                                            "source": "req.query",
                                            "min": "",
                                            "max": "",
                                            "selectServer": false,
                                            "dynamicKey": "id"
                                          },
                                      ${columns
                                        .filter(
                                          col =>
                                            !["status", "created_at", "updated_at", columns.find((col) => col.COLUMN_KEY === "PRI")?.COLUMN_NAME].includes(col.COLUMN_NAME) &&
                                            !col.REFERENCED_TABLE_NAME
                                        )
                                        .map(
                                          col => `
                                          {
                                              "name": "${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                              "label": "${snakeToSeparatedWords(col.COLUMN_NAME)}",
                                              "title": "",
                                              "type": "textField",
                                              "required": false,
                                              "hideInCreateForm": false,
                                              "visible": true,
                                              "disabled": false,
                                              "dependancyCheck": false,
                                              "isPrefilled": false,
                                              "source": "req.body",
                                              "min": "",
                                              "max": "",
                                              "validations": [],
                                              "selectServer": false,
                                              "dynamicKey": "${snakeToCamel(table)}_${lowerSnakeToCamel(col.COLUMN_NAME)}"
                                          }`
                                        )
                                        .join(',')},
                                          {
                                            "type": "listOfFields",
                                            "name": "options",
                                            "label": "Add ${snakeToSeparatedWords(table)}",
                                            "hideInCreateForm": ${columns.some(
                                              col =>
                                                !["status", "created_at", "updated_at"].includes(col.COLUMN_NAME) &&
                                                col.REFERENCED_TABLE_NAME
                                            ) ? false : true},

                                            "hideInViewForm": ${columns.some(
                                              col =>
                                                !["status", "created_at", "updated_at"].includes(col.COLUMN_NAME) &&
                                                col.REFERENCED_TABLE_NAME
                                            ) ? false : true},
                                            "title": "Select ${snakeToSeparatedWords(table)}",
                                            "dependancyCheck": false,
                                            "childFields": [
                                          ${columns
                                            .filter(
                                              col =>
                                                !["status", "created_at", "updated_at", columns.find((col) => col.COLUMN_KEY === "PRI")?.COLUMN_NAME ].includes(col.COLUMN_NAME) &&
                                                col.REFERENCED_TABLE_NAME 
                                            )
                                            .map(
                                              col => `
                                              {
                                                  "name": "${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                                  "label": "${snakeToSeparatedWords(col.COLUMN_NAME)}",
                                                  "title": "",
                                                  "type": "select",
                                                  "required": false,
                                                  "hideInCreateForm": false,
                                                  "visible": true,
                                                  "disabled": false,
                                                  "dependancyCheck": false,
                                                  "isPrefilled": false,
                                                  "source": "req.body",
                                                  "min": "",
                                                  "max": "",
                                                  "validations": [],
                                                  "selectServer": true,
                                                  "dynamicKey": "${snakeToCamel(table)}_${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                                  "selectServerUrl": "/list/${col.REFERENCED_TABLE_NAME}/dropdown?version=1.0"
                                              }`
                                            )
                                            .join(',')}
                                          ]
                                        }
                                      ,
                                      ${columns
                                        .filter(
                                          col =>
                                            ["created_at", "updated_at"].includes(col.COLUMN_NAME) &&
                                            !col.REFERENCED_TABLE_NAME
                                        )
                                        .map(
                                          col => `
                                          {
                                              "name": "${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                              "label": "${snakeToSeparatedWords(col.COLUMN_NAME)}",
                                              "title": "",
                                              "type": "dateTime",
                                              "required": false,
                                              "hideInCreateForm": true,
                                              "hideInViewForm" : true,
                                              "visible": false,
                                              "disabled": false,
                                              "dependancyCheck": false,
                                              "isPrefilled": false,
                                              "source": "req.body",
                                              "min": "",
                                              "max": "",
                                              "validations": [],
                                              "selectServer": false,
                                              "dynamicKey": "${snakeToCamel(table)}_${lowerSnakeToCamel(col.COLUMN_NAME)}"
                                          }`
                                        )
                                        .join(',')},
                                        ${columns
                                        .filter(
                                          col =>
                                            ["status"].includes(col.COLUMN_NAME) &&
                                            !col.REFERENCED_TABLE_NAME 
                                        )
                                        .map(
                                          col => `
                                          {
                                              "name": "${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                              "label": "${snakeToSeparatedWords(col.COLUMN_NAME)}",
                                              "title": "",
                                              "type": "select",
                                              "required": false,
                                              "hideInCreateForm": false,
                                              "visible": true,
                                              "disabled": false,
                                              "dependancyCheck": false,
                                              "isPrefilled": false,
                                              "source": "req.body",
                                              "min": "",
                                              "max": "",
                                              "validations": [],
                                              "selectServer": false,
                                              "dynamicKey": "${snakeToCamel(table)}_${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                              options:[
                                                  {value:'inactive',label:'inactive'},
                                                  {value:'active',label:'active'}
                                              ]
                                          }`
                                        )
                                        .join(',')}
                          ]
                      }
                      ]
                  },
                  "buttons": [
                      {
                      "type": "submit",
                      "label": "Submit"
                      }
                  ]
                  }
              ],
              "colMapper": "{${aliasedColumns}}"
              };
          `
  }
}
const crudTemplates = {
  object: (table, columns, objectName, primaryKey, allColumns) => {
    const aliasedColumns = columns
      .map(col => `${col.COLUMN_NAME} as ${table}_${snakeToCamel(col.COLUMN_NAME)}`)
      .join(', ');

    const setClause = columns
      .filter(col => ![primaryKey, "status", "created_at", "updated_at"].includes(col.COLUMN_NAME))
      .map(col => `${col.COLUMN_NAME} = {{${table}_${snakeToCamel(col.COLUMN_NAME)}}}`)
      .join(', ');

    // Generate JOIN statements and select extra name columns
    let joins = [];
    let extraSelects = [];

    columns.forEach(col => {
        if (col.COLUMN_NAME.endsWith("_id")) {
            const referencedTable = col.REFERENCED_TABLE_NAME; // Derive table name
            
            if (referencedTable === table) {
                // Exception: Self-referencing foreign key detected
                console.warn(`Self-referencing foreign key detected in table ${table}: ${col.COLUMN_NAME} references ${primaryKey}`);
                return; // Skip JOIN to prevent infinite loops
            }

            if (allColumns[referencedTable]) {
                // Find a column matching *_name in the referenced table
                const nameColumn = allColumns[referencedTable].find(c => c.COLUMN_NAME.endsWith("_name"));

                if (nameColumn) {
                    joins.push(`LEFT JOIN ${referencedTable} ON ${table}.${col.COLUMN_NAME} = ${referencedTable}.${primaryKey}`);
                    extraSelects.push(`${referencedTable}.${nameColumn.COLUMN_NAME} as ${referencedTable}_${snakeToCamel(nameColumn.COLUMN_NAME)}`);
                }
            }
        }
    });

    // Combine SELECT fields
    const selectFields = [`${table}.${primaryKey} as id`, aliasedColumns, ...extraSelects].join(', ');

    return `
    const parameters = require('./CRUD_parameters');
    global.Crud${objectName}_object = {
      versions: {
        versionData: [
          {
            "*": {
              steps: [
                {
                  config: {
                    features: {
                      multistep: false,
                      parameters: true,
                      pagination: true,
                    },
                    communication: {
                      encryption: {
                        platformEncryption: true,
                      },
                    },
                    verification: {
                      otp: false,
                      accessToken: false,
                    },
                  },
                  data: {
                    parameters: parameters,
                    apiInfo: {
                      query: {
                        queryNature: { Add: "INSERT", Update: "UPDATE", View: "SELECT", Delete: "DELETE", List: "SELECT" },
                        queryPayload: {
                          Add: "INSERT INTO ${table} (${columns
                            .filter(col => ![primaryKey, "status", "created_at", "updated_at"].includes(col.COLUMN_NAME))
                            .map(col => col.COLUMN_NAME)
                            .join(', ')}) VALUES (${columns.map(col => `{{${table}_${col.COLUMN_NAME}}}`).join(', ')})",
                          Update: "UPDATE ${table} SET ${setClause} WHERE ${primaryKey} = {{id}}",
                          List: "SELECT ${selectFields}, COUNT(*) OVER () AS table_count FROM ${table} ${joins.join(" ")}",
                          View: "SELECT ${selectFields} FROM ${table} ${joins.join(" ")} WHERE ${primaryKey} = {{id}} OR ${primaryKey} IS NULL",
                          Delete: "UPDATE ${table} SET status = 'inactive' WHERE ${primaryKey} = {{id}}",           
                          database: "mainDb",
                        }
                      },
                      utilityFunctions: {
                        callbackFunction: null,
                        payloadFunction: [],
                        preProcessFunction: "crudApiGenerator"
                      },
                    },
                    requestMetaData: {
                      requestMethod: { Add: "POST", View: "GET", Update: "PUT", Delete: "DELETE", List: "GET" },
                      permission: { Add: "insert_${table}", View:"view_${table}", List:"list_${table}", Update: "update_${table}", Delete: "delete_${table}" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "${objectName} retrieved successfully!",
                    errorMessage: "Failed to retrieve ${objectName}.",
                  },
                },
              ],
            },
          },
        ],
      },
    };`
  }, 
  parameters : (table, columns, objectName, primaryKey) =>{
    const aliasedColumns = columns.map(col => ` '${table}_${snakeToCamel(col.COLUMN_NAME)}' : '${col.COLUMN_NAME}'`).join(', ');

    return `
        const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "${table}",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "${objectName}",
                        "childFields": [
                            ${columns
                                .filter(col => !["status", "created_at", "updated_at"].includes(col.COLUMN_NAME)) 
                                .map(col => `
                                {
                                "name": "${col.COLUMN_NAME}",
                                "label": "${snakeToSeparatedWords(col.COLUMN_NAME)}",
                                "title": "",
                                "type": "textField",
                                "required": false,
                                "hideInCreateForm": false,
                                "visible": true,
                                "disabled": false,
                                "dependancyCheck": false,
                                "isPrefilled": false,
                                "source": "req.body",
                                "min": "",
                                "max": "",
                                "selectServer": false,
                                "dynamicKey": "${table}_${snakeToCamel(col.COLUMN_NAME)}",
                                "alias" : "${table}.${col.COLUMN_NAME}",
                                }`).join(',')},
                                
                        ]
                    }
                    ]
                },
                "buttons": [
                    {
                    "type": "submit",
                    "label": "Submit"
                    }
                ]
                }
            ],
            "colMapper": "{${aliasedColumns}}"
            };
            module.exports = parameters;
        `
  }

}
const groupedFrontTemplates = {
  object : (table, columns, objectName) => {
    const filterClause = columns.map(col => `"${table}_${snakeToCamel(col.COLUMN_NAME)}"`).join(', ');
    return `
        import { parameters } from "./CRUD_parameters.js";
        import generateFormProps  from "../../../../Components/DataLayout/constants/generateFormProps.js";
        import  serverCommunicationHelper from "../../../../Components/DataLayout/constants/serverCommunicationHelper.js";
        export const listing_crud_props = {
            data: {
            features: {
                parameters: parameters,
                rowActions: {
                actions: [
                    {
                    name: "Edit",
                    color: "blue",
                    permission: 'update_${table}',
                    onAction: () => console.log("Button pressed Edit"),
                    form: generateFormProps({
                        parameters: parameters,
                        apiUrl: "/grouped/cruds/${table}?version=1.0",
                        requestType: "PUT",
                        mode:"edit"
                    }),
                    },
                    {
                    name: "Delete",
                    color: "red",
                    permission: 'delete_${table}',
                    serverCommunication: serverCommunicationHelper({
                        parameters: parameters,
                        apiUrl: "/grouped/cruds/${table}?version=1.0",
                        requestType: "DELETE",
                    }),
                    onAction: () => console.log("Button pressed Delete"),
                    },
                    {
                    name: "View",
                    color: "grey",
                    permission: 'view_${table}',
                    onAction: () => console.log("Button pressed View"),
                    form: generateFormProps({
                        parameters: parameters,
                        apiUrl: "/grouped/cruds/${table}?version=1.0",
                        requestType: "GET",
                        mode:"view"
                    }),
                    },
                ],
                },
                bulkAction: {
                add: {
                    permission:'add_${table}',
                    form: generateFormProps({
                    parameters: parameters,
                    apiUrl: "/grouped/cruds/${table}?version=1.0",
                    requestType: "POST",
                    mode:"create"
                    }),
                },
                },

                export: {
                  permission: 'export_${table}',
                  serverCommunication: serverCommunicationHelper({
                      parameters: parameters,
                      apiUrl: "",
                      apiActionType: "",
                      requestType: "",
                      reduxActionType: "",
                }),
                onAction: (e) => console.log("Export Action", e),
                options: {
                    formats: ["CSV", "PDF", "Excel"],
                    includeHeaders: true,
                    icon: "",
                },
                },
                filter: {
                permission: 'filter_${table}',
                serverCommunication: serverCommunicationHelper({
                    parameters: parameters,
                    apiUrl: "",
                    apiActionType: "",
                    requestType: "",
                    reduxActionType: "",
                }),
                onAction: (e) => console.log("Filter Action", e),
                options: {
                    filterBy: [
                        ${filterClause}
                    ],
                    statusOptions: ["active", "inactive"],
                },
                excludeFilter: [],
                },
                sort: {
                permission: 'sort_${table}',
                serverCommunication: serverCommunicationHelper({
                    parameters: parameters,
                    apiUrl: "",
                    apiActionType: "",
                    requestType: "",
                    reduxActionType: "",
                }),
                onAction: (e) => console.log("Sort Action", e),
                options: {
                    defaultSortField: "id",
                    defaultSortOrder: "asc",
                    multiColumnSort: true,
                },
                excludeSort: [],
                },
                list: {
                permission:'list_${table}',
                serverCommunication: serverCommunicationHelper({
                    parameters: parameters,
                    apiUrl: "/grouped/cruds/${table}?version=1.0",
                    apiActionType: "",
                    requestType: "GET",
                    reduxActionType: "",
                }),
                },
                search: {
                permission: 'search_${table}',
                excludeSearch: ["image"],
                serverCommunication: serverCommunicationHelper({
                    parameters: parameters,
                    apiUrl: "",
                    apiActionType: "",
                    requestType: "",
                    reduxActionType: "",
                }),
                },
                grid: {
                entitiesPerRow: 2,
                buttonEnable: true,
                checkBoxEnable: true,
                actionButtonEnable: true,
                },
                pagination: {
                  parameters: null,
                  permission: false,
                  serverCommunication: serverCommunicationHelper({
                      parameters: parameters,
                      apiUrl: "/${table}/view",
                      apiActionType: "hr_${table}_view",
                      requestType: "GET",
                      reduxActionType: "hr_${table}_view",
                  }),
                  options: {
                      pageSize: 10,
                      pageSizeOptions: [10, 20, 30 , 50, { label: "All", value: -1 }],
                  },
                  onAction: (e) => {
                      console.log("Pagination Action", e);
                  },
                },
            },
            },
            config: {
            viewMode: {
                presentation: ["Table", "Grid"],
            },
            features: {
                export: { enable: true, operationalMode: "server",permission:true },
                filter: { enable: true, operationalMode: "server" ,permission:true},
                sort: { enable: true, operationalMode: "server" ,permission:true},
                search: { enable: true, operationalMode: "server" ,permission:true},
                pagination: { enable: true, operationalMode: "server" },
                bulkAction: { enable: true, operationalMode: "server" ,permission:true},
                viewModes: { enable: true, operationalMode: "server" },
                grid: { enable: true, operationalMode: "server" },
                colaborator: { enable: false, operationalMode: "server" },
                rowActions: { enable: true, operationalMode: "server" ,permission:true},
                list: { enable: true, operationalMode: "server" ,permission:true},
                parameters: { enable: true, operationalMode: "local" },
            },
            },
            appearance: {
            export: {
                button: [
                {
                    type: "confirm",
                    backgroundColor: "#007bff",
                    color: "#fff",
                },
                {
                    type: "cancel",
                    backgroundColor: "#ccc",
                    color: "#333",
                },
                ],
            },
            filter: [
                {
                type: "text",
                backgroundColor: "#007bff",
                color: "#fff",
                },
                {
                type: "dropdown",
                backgroundColor: "#007bff",
                color: "#fff",
                },
                {
                type: "date",
                backgroundColor: "#007bff",
                color: "#fff",
                },
            ],
            parent: {
                appBarColor: "#f8faFE",
                appBarTextColor: "#7479ed",
            },
            grid: {
                image: {
                borderColor: "#7479ed",
                },
                actionButtons: {
                color: "#7b7a8c",
                },
                button: {
                buttonColor: "#818093",
                buttonVarient: "contained",
                buttonTextColor: "#ffffff",
                },
                header: {
                headColor: "#e5e5e5",
                headTextColor: "#260143",
                },
                cardFont: {
                headingSize: 15,
                headingWeight: 650,
                textSize: 13,
                textWeight: 500,
                heading: "#260143",
                color: "#5a5897",
                },
            },
            },
        };
    `
  },
  parameters: (groupTables, allColumns, objectName) => {
      
      console.log(groupTables);
      const aliasedColumns = groupTables
          .map(table => {
              const columns = allColumns[table];
              return columns
                  .map(col => ` '${table}_${snakeToCamel(col.COLUMN_NAME)}' : '${col.COLUMN_NAME}'`)
                  .join(', ');
          })
          .join(', ');
      return `
          export const parameters = {
              "steps": [
                ${groupTables
                  .map((table, index) => {
                    const columns = allColumns[table];

                    return `
                    {
                        "title": "${table} Info",
                        "parameters": {
                            "fields": [
                                {
                                    "name": "${snakeToCamel(table)}",
                                    "type": "section",
                                    "hideInCreateForm": false,
                                    "visible": false,
                                    "required": false,
                                    "disabled": false,
                                    "validations": "",
                                    "dependancyCheck": false,
                                    "isPrefilled": false,
                                    "source": "req.body",
                                    "title": "${snakeToCamel(objectName)}",
                                    "childFields": [
                                            {
                                              "name": "id",
                                              "label": "id",
                                              "title": "",
                                              "type": "textField",
                                              "required": false,
                                              "hideInCreateForm": true,
                                              "hideInViewForm" : true,
                                              "visible": false,
                                              "disabled": false,
                                              "dependancyCheck": false,
                                              "isPrefilled": false,
                                              "source": "req.query",
                                              "min": "",
                                              "max": "",
                                              "selectServer": false,
                                              "dynamicKey": "id",
                                              "alias" : "${table}.id"

                                            },
                                        ${columns
                                          .filter(
                                            col =>
                                              !["status", "created_at", "updated_at", "updatedBy", "updated_by", "Updated_by", columns.find((col) => col.COLUMN_KEY === "PRI")?.COLUMN_NAME].includes(col.COLUMN_NAME) &&
                                              !col.REFERENCED_TABLE_NAME
                                          )
                                          .map(
                                            col => `
                                            {
                                                "name": "${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                                "label": "${snakeToSeparatedWords(col.COLUMN_NAME)}",
                                                "title": "",
                                                "type": "textField",
                                                "required": false,
                                                "hideInCreateForm": false,
                                                "visible": true,
                                                "disabled": false,
                                                "dependancyCheck": false,
                                                "isPrefilled": false,
                                                "source": "req.body",
                                                "min": "",
                                                "max": "",
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "${snakeToCamel(table)}_${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                                "alias" : "${table}.${col.COLUMN_NAME}"
                                            }`
                                          )
                                          .join(',')},
                                            {
                                              "type": "listOfFields",
                                              "name": "options",
                                              "label": "Add ${snakeToSeparatedWords(table)}",
                                              "hideInCreateForm": ${columns.some(
                                                col =>
                                                  !["status", "created_at", "updated_at", "updatedBy", "updated_by", "Updated_by"].includes(col.COLUMN_NAME) &&
                                                  col.REFERENCED_TABLE_NAME
                                              ) ? false : true},

                                              "hideInViewForm": ${columns.some(
                                                col =>
                                                  !["status", "created_at", "updated_at", "updatedBy", "updated_by", "Updated_by"].includes(col.COLUMN_NAME) &&
                                                  col.REFERENCED_TABLE_NAME
                                              ) ? false : true},
                                              "title": "Select ${snakeToSeparatedWords(table)}",
                                              "dependancyCheck": false,
                                              "childFields": [
                                            ${columns
                                              .filter(
                                                col =>
                                                  !["status", "created_at", "updated_at", "updatedBy", "updated_by", "Updated_by", columns.find(col => col.COLUMN_KEY === "PRI")?.COLUMN_NAME].includes(col.COLUMN_NAME) &&
                                                  col.REFERENCED_TABLE_NAME
                                              )
                                              .map(col => {
                                                const nameColumn = allColumns[col.REFERENCED_TABLE_NAME]?.find(c => c.COLUMN_NAME.toLowerCase().includes("name"));

                                                return `
                                                {
                                                    "name": "${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                                    "label": "${snakeToSeparatedWords(col.COLUMN_NAME)}",
                                                    "title": "",
                                                    "type": "select",
                                                    "required": false,
                                                    "hideInCreateForm": false,
                                                    "hideInViewForm": true,
                                                    "visible": false,
                                                    "disabled": false,
                                                    "dependancyCheck": false,
                                                    "isPrefilled": false,
                                                    "source": "req.body",
                                                    "min": "",
                                                    "max": "",
                                                    "validations": [],
                                                    "selectServer": true,
                                                    "dynamicKey": "${snakeToCamel(table)}_${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                                    "selectServerUrl": "/list/${col.REFERENCED_TABLE_NAME}/dropdown?version=1.0",
                                                    "alias" : "${table}.${col.COLUMN_NAME}"
                                                }
                                                ${nameColumn ? `,
                                                {
                                                    "name": "${snakeToCamel(nameColumn.COLUMN_NAME)}",
                                                    "label": "${capitalizeFirstLetter(snakeToSeparatedWords(nameColumn.COLUMN_NAME))}",
                                                    "title": "",
                                                    "type": "textField",
                                                    "required": false,
                                                    "hideInCreateForm": true,
                                                    "hideInViewForm": false,
                                                    "visible": true,
                                                    "disabled": false,
                                                    "dependancyCheck": false,
                                                    "isPrefilled": false,
                                                    "source": "req.body",
                                                    "min": "",
                                                    "max": "",
                                                    "validations": [],
                                                    "dynamicKey" : "${snakeToCamel(table)}_${capitalizeFirstLetter(snakeToCamel(nameColumn.COLUMN_NAME))}",
                                                    "selectServer": false,
                                                    "alias" : "${table}.${col.COLUMN_NAME}"
                                                }` : ''}
                                                `;
                                              })
                                              .join(',')}
                                            ]
                                          }
                                        ,
                                        ${columns
                                          .filter(
                                            col =>
                                              ["created_at", "updated_at", "updatedBy", "updated_by", "Updated_by"].includes(col.COLUMN_NAME) &&
                                              !col.REFERENCED_TABLE_NAME
                                          )
                                          .map(
                                            col => `
                                            {
                                                "name": "${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                                "label": "${snakeToSeparatedWords(col.COLUMN_NAME)}",
                                                "title": "",
                                                "type": "dateTime",
                                                "required": false,
                                                "hideInCreateForm": true,
                                                "hideInViewForm" : true,
                                                "visible": false,
                                                "disabled": false,
                                                "dependancyCheck": false,
                                                "isPrefilled": false,
                                                "source": "req.body",
                                                "min": "",
                                                "max": "",
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "${snakeToCamel(table)}_${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                                "alias" : "${table}.${col.COLUMN_NAME}"
                                            }`
                                          )
                                          .join(',')},
                                          ${columns
                                          .filter(
                                            col =>
                                              ["status"].includes(col.COLUMN_NAME) &&
                                              !col.REFERENCED_TABLE_NAME 
                                          )
                                          .map(
                                            col => `
                                            {
                                                "name": "${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                                "label": "${snakeToSeparatedWords(col.COLUMN_NAME)}",
                                                "title": "",
                                                "type": "select",
                                                "required": false,
                                                "hideInCreateForm": false,
                                                "visible": true,
                                                "disabled": false,
                                                "dependancyCheck": false,
                                                "isPrefilled": false,
                                                "source": "req.body",
                                                "min": "",
                                                "max": "",
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "${snakeToCamel(table)}_${lowerSnakeToCamel(col.COLUMN_NAME)}",
                                                options:[
                                                    {value:'inactive',label:'inactive'},
                                                    {value:'active',label:'active'}
                                                ],
                                                "alias" : "${table}.${col.COLUMN_NAME}"
                                            }`
                                          )
                                          .join(',')}

                                    ]
                                }
                            ]
                        },
                        "permission": "${table}_view"
                    }`;
                  })
                  .join(',')}                  
              ],
              "colMapper": {${aliasedColumns}}
          };
      `;
  },
  sideBarProps : (allGroups) => {
    console.log(allGroups);
  
    return `
            import PersonIcon from '@mui/icons-material/Person';
      import SchoolIcon from "@mui/icons-material/School";
      import DashboardIcon from "@mui/icons-material/Dashboard";
      import GroupIcon from "@mui/icons-material/Group"; 
      import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
      import LockIcon from "@mui/icons-material/Lock";
      import GroupWorkIcon from "@mui/icons-material/GroupWork";
      import EmailIcon from "@mui/icons-material/Email";
      import ArticleIcon from "@mui/icons-material/Article";
      import AccountTreeIcon from '@mui/icons-material/AccountTree';
      import ListAltIcon from '@mui/icons-material/ListAlt';
  
      const iconMapping = {
        ${Object.keys(allGroups)
          .map(groupKey => `"${capitalizeFirstLetter(snakeToSeparatedWords(groupKey))}": <GroupIcon sx={{color: "#FF6347"}}/>`)
          .join(",\n        ")}
      };
  
      const data = {
        features: {
          sidebarItems: [
            {
              title: "Dashboard",
              icon: iconMapping["Dashboard"],
              permission: ["dashboard","operations_list_attachments"],
              path: "/dashboard",
            },
            {
              title: "Profile",
              icon: iconMapping["Profile"],
              path: "/profile/account",
              permission: ["profile","operations_account"],
              subNav: [
                {
                  title: "Account",
                  path: "/profile/account",
                  permission: ["account","operations_account"],
                },
                {
                  title: "Security",
                  path: "/profile/security",
                  permission: ["security","operations_security"],
                },
                {
                  title: "Privacy Policy",
                  path: "/profile/privacy-policy",
                  permission: ["privacy_policy","operations_privacy_policy"],
                },
              ],
            },${Object.entries(allGroups)
              .map(([groupKey, groupTables]) => 
            `
            {
              title: "${capitalizeFirstLetter(snakeToSeparatedWords(groupKey))} Management",
              icon: iconMapping["${capitalizeFirstLetter(snakeToSeparatedWords(groupKey))}"],
              path: "/${capitalizeFirstLetter(snakeToCamel(groupKey))}-managements/${capitalizeFirstLetter(groupKey)}",
              //permission: ["${capitalizeFirstLetter(snakeToCamel(groupKey))}_management"],
              subNav: [
                ${groupTables
                  .map(table => `
                    {
                      title: "${capitalizeFirstLetter(snakeToSeparatedWords(table))}",
                      path: "crud/${capitalizeFirstLetter(snakeToCamel(groupKey))}-managements/${capitalizeFirstLetter(table)}",
                      //permission: ["${(snakeToCamel(table))}"]
                    }
                  `)
                  .join(",")}
              ]
            }`).join(",")}
          ]
        },
        onSelect: (selectedTab) => { console.log(selectedTab); },
      };
  
      const config = {
        viewMode: {
          presentation: ["sidebar", "collapsible"],
          mode: ["view", "edit"],
          isOpen: true,
          mobileBreakpoint: "(max-width:768px)",
        },
        features: {
          tokenAuthentication: true,
          permission: true,
        },
      };
  
      const appearance = {
        features: {
          styling: {
            background: "#f5f5f5",
            width: "280px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            logoWidth: "120px",
            logoHeight: "80px",
          },
        },
      };
  
      export { data, config, appearance };
    `;
  },
  
  
}
const groupedTemplates = {
  object: async (group, allColumns, objectName) => {
    const setClauses = {};
    const aliasedColumns = {};
    const groupTables = group;

    
    console.log("GROUP TABLES: ", group)
    groupTables.forEach((table) => {
      const columns = allColumns[table];

      if (!columns) {
        console.warn(`Columns for table ${table} not found.`);
        return;
      }

      aliasedColumns[table] = columns
        .map((col) => `${table}.${col.COLUMN_NAME} as ${snakeToCamel(table)}_${snakeToCamel(col.COLUMN_NAME)}`)
        .join(", ");

      setClauses[table] = columns
        .filter(
          (col) =>
            ![
              columns.find((col) => col.COLUMN_KEY === "PRI")?.COLUMN_NAME,
              "status",
              "created_at",
              "updated_at",
            ].includes(col.COLUMN_NAME)
        )
        .map((col) => `${col.COLUMN_NAME} = {{${table}_${snakeToCamel(col.COLUMN_NAME)}}}`)
        .join(", ");
    });

    
    const generateJoinQueries = (groupTables, allColumns) => {
      let includedTables = new Set();
      let joinClauses = [];
      let fromTable = groupTables[0]; 
      includedTables.add(fromTable);
    
      
      let fromClause = `FROM ${fromTable}`;
    
      
      for (let i = 1; i < groupTables.length; i++) {
        const table = groupTables[i];
        const columns = allColumns[table];
    
        if (!columns) continue;
    
        
        const relationships = [];
        for (const includedTable of includedTables) {
          const includedColumns = allColumns[includedTable];
          if (!includedColumns) continue;
    
          
          for (const col of columns) {
            const match = includedColumns.find(
              (includedCol) =>
                (col.REFERENCED_TABLE_NAME === includedTable &&
                  col.REFERENCED_COLUMN_NAME === includedCol.COLUMN_NAME) ||
                (includedCol.REFERENCED_TABLE_NAME === table &&
                  includedCol.REFERENCED_COLUMN_NAME === col.COLUMN_NAME)
            );
    
            if (match) {
              relationships.push({
                currentTableColumn: col.COLUMN_NAME,
                includedTable,
                includedTableColumn: match.COLUMN_NAME,
              });
            }
          }
        }
    
        
        if (relationships.length === 1) {
          const { currentTableColumn, includedTable, includedTableColumn } =
            relationships[0];
          joinClauses.push(
            `JOIN ${table} ON ${table}.${currentTableColumn} = ${includedTable}.${includedTableColumn}`
          );
        } else if (relationships.length > 1) {
          
          const conditions = relationships
            .map(
              ({ currentTableColumn, includedTable, includedTableColumn }) =>
                `${table}.${currentTableColumn} = ${includedTable}.${includedTableColumn}`
            )
            .join(" OR ");
          joinClauses.push(`JOIN ${table} ON (${conditions})`);
        }
    
        
        includedTables.add(table);
      }
    
      
      const fullFromClause = `${fromClause} ${joinClauses.join(" ")}`;
      return fullFromClause;
    };
    

    return `
      const parameters = require('./CRUD_parameters');
      global.GroupedCruds${objectName}_object = {
        versions: {
          versionData: [
            {
              "*": {
                steps: [
                  ${groupTables
                    .map(
                      (table) => `
                  {
                    config: {
                      features: {
                        multistep: false,
                        parameters: true,
                        pagination: true,
                      },
                      communication: {
                        encryption: {
                          platformEncryption: true,
                        },
                      },
                      verification: {
                        otp: false,
                        accessToken: false,
                      },
                    },
                    data: {
                      parameters: parameters,
                      apiInfo: {
                        query: {
                          queryNature: { Add: "INSERT", Update: "UPDATE", View: "SELECT", Delete: "DELETE", List: "SELECT" },
                          queryPayload: {
                            Add: "INSERT INTO ${table} (${allColumns[table]
                              ?.filter(
                                (col) =>
                                  ![
                                    allColumns[table].find((col) => col.COLUMN_KEY === "PRI")?.COLUMN_NAME,
                                    "status",
                                    "created_at",
                                    "updated_at",
                                  ].includes(col.COLUMN_NAME)
                              )
                              ?.map((col) => col.COLUMN_NAME)
                              ?.join(", ")}) VALUES (${allColumns[table]
                              ?.map((col) => `{{${table}_${col.COLUMN_NAME}}}`)
                              ?.join(", ")})",
                            
                            Update: "UPDATE ${table} SET ${setClauses[table]} WHERE ${allColumns[table].find((col) => col.COLUMN_KEY === "PRI")?.COLUMN_NAME} = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, ${allColumns[table].find((col) => col.COLUMN_KEY === "PRI")?.COLUMN_NAME} as id, ${aliasedColumns[table]} FROM ${table}",
                              
                            View: "SELECT ${groupTables
                              .map(
                                (table) =>
                                  `${table}.${allColumns[table].find((col) => col.COLUMN_KEY === "PRI")?.COLUMN_NAME} as ${table}_id, ${aliasedColumns[table]}`
                              )
                              .join(", ")} ${generateJoinQueries(groupTables, allColumns)} WHERE ${groupTables[0]}.${
                                allColumns[groupTables[0]].find((col) => col.COLUMN_KEY === "PRI")?.COLUMN_NAME
                              } = {{id}} OR ${groupTables[0]}.${allColumns[table].find((col) => col.COLUMN_KEY === "PRI")?.COLUMN_NAME} IS NULL",
                              
                            Delete: "UPDATE ${table} SET status = 'inactive' WHERE ${allColumns[table].find((col) => col.COLUMN_KEY === "PRI")?.COLUMN_NAME} = {{id}}",           
                          },
                          database: "mainDb",
                        },
                        utilityFunctions: {
                          callbackFunction: null,
                          payloadFunction: [],
                          preProcessFunction: "crudApiGenerator",
                        },
                      },
                      requestMetaData: {
                        requestMethod: { Add: "POST", View: "GET", Update: "PUT", Delete: "DELETE", List: "GET" },
                        permission: [
                          { Add: "insert_${table}", View: "view_${table}", List: "list_${table}", Update: "update_${table}", Delete: "delete_${table}" },
                        ],
                        pagination: { pageSize: 10 },
                      },
                    },
                    response: {
                      successMessage: "task_history retrieved successfully!",
                      errorMessage: "Failed to retrieve task_history.",
                    },
                  }
                  `
                    )
                    .join(",")}
                ],
              },
            },
          ],
        },
      };
    `;
  },
  parameters: (groupTables, allColumns, objectName) => {
    
    const aliasedColumns = groupTables
        .map(table => {
            const columns = allColumns[table];
            return columns
                .map(col => ` '${table}_${snakeToCamel(col.COLUMN_NAME)}' : '${col.COLUMN_NAME}'`)
                .join(', ');
        })
        .join(', ');

    return `
        const parameters = {
            "steps": [
                ${groupTables
                    .map((table, index) => {
                        const columns = allColumns[table];
                        return `
                        {
                            "title": "${table} Info",
                            "parameters": {
                                "fields": [
                                    {
                                        "name": "${table}",
                                        "type": "section",
                                        "hideInCreateForm": false,
                                        "visible": false,
                                        "required": false,
                                        "disabled": false,
                                        "validations": "",
                                        "dependancyCheck": false,
                                        "isPrefilled": false,
                                        "source": "req.body",
                                        "title": "${objectName}",
                                        "childFields": [
                                                {
                                                        "name": "id",
                                                        "label": "id",
                                                        "title": "",
                                                        "type": "textField",
                                                        "required": false,
                                                        "hideInCreateForm": true,
                                                        "visible": true,
                                                        "disabled": false,
                                                        "dependancyCheck": false,
                                                        "isPrefilled": false,
                                                        "source": "req.query",
                                                        "min": "",
                                                        "max": "",
                                                        "selectServer": false,
                                                        "dynamicKey": "id"
                                                },
                                            ${columns
                                                .filter(col => !["status", "created_at", "updated_at", columns.find((col) => col.COLUMN_KEY === "PRI")?.COLUMN_NAME].includes(col.COLUMN_NAME))
                                                .map(col => `
                                                    {
                                                        "name": "${snakeToCamel(col.COLUMN_NAME)}",
                                                        "label": "${snakeToSeparatedWords(col.COLUMN_NAME)}",
                                                        "title": "",
                                                        "type": "textField",
                                                        "required": false,
                                                        "hideInCreateForm": false,
                                                        "visible": true,
                                                        "disabled": false,
                                                        "dependancyCheck": false,
                                                        "isPrefilled": false,
                                                        "source": "req.body",
                                                        "min": "",
                                                        "max": "",
                                                        "selectServer": false,
                                                        "dynamicKey": "${table}_${snakeToCamel(col.COLUMN_NAME)}"
                                                    }`).join(',')}
                                        ]
                                    }
                                ]
                            },
                            "buttons": [
                                {
                                    "type": "submit",
                                    "label": "Submit"
                                }
                            ],
                            "permission": "${table}_view"
                        }`;
                    })
                    .join(',')}
            ],
            "colMapper": "{${aliasedColumns}}"
        };
        module.exports = parameters;
    `;
}

};
const reqTemplates = {
  body: async (parameters) => {
    const requestBody = parameters.steps.map((step) => {
      const childFields = step.parameters.fields[0]?.childFields || [];
      const fieldsString = childFields
        .map((cf) => `"${cf.dynamicKey}": "_____"`) 
        .join(",\n           ");

      return `"req.body for ${step.title}"= {
        ${fieldsString}
      }`;
    }).join(",\n  ");

    const returnValue = `${requestBody}`;
    return returnValue;
  }
};
const dropdownTemplates = {
  object: async (table, allColumns) => {
    const columns = allColumns[table];

    
    if (!columns) {
      console.warn(`Columns for table ${table} not found.`);
      return;
    }

    
    const nameColumn = columns.find((col) => col.COLUMN_NAME.toLowerCase().includes("name"));

    if (!nameColumn) {
      console.warn(`No column with "name" found in table ${table}.`);
      return;
    }
    
    return `
    global.${table.charAt(0).toUpperCase() + table.slice(1)}Dropdown_object = {
      versions: {
        versionData: [
          {
            "*": {
              steps: [
                {
                  config: {
                    features: {
                      multistep: false,
                      parameters: true,
                      pagination: true,
                    },
                    communication: {
                      encryption: {
                        platformEncryption: true,
                      },
                    },
                    verification: {
                      otp: false,
                      accessToken: false,
                    },
                  },
                  data: {
                    parameters: [
                        {
                          "name": "id",
                          "label": "id",
                          "title": "",
                          "type": "textField",
                          "required": false,
                          "hideInCreateForm": true,
                          "hideInViewForm" : true,
                          "visible": false,
                          "disabled": false,
                          "dependancyCheck": false,
                          "isPrefilled": false,
                          "source": "req.query",
                          "min": "",
                          "max": "",
                          "selectServer": false,
                          "dynamicKey": "id"
                        },
                    ],
                    apiInfo: {
                      query: {
                        "queryNature": "SELECT",
                        "queryPayload": "SELECT ${nameColumn?.COLUMN_NAME} as label, ${allColumns[table].find((col) => col.COLUMN_KEY === "PRI")?.COLUMN_NAME} as value FROM ${table}", 
                        //ALTERNATICE QUERY FOR MULTI SELECT
                        // SELECT 
                        //     b.[table 1 group name] AS label,
                        //     CONCAT('[', 
                        //         GROUP_CONCAT(
                        //             JSON_OBJECT(
                        //                 'value', a.[table 2 group id],
                        //                 'label', a.[table 2 group name]
                        //             )
                        //         ), 
                        //     ']') AS value
                        // FROM 
                        //     [table 1] AS b
                        // LEFT JOIN 
                        //     [bridge table] AS c ON b.[table 1 group id] = c.[table 1 group id]
                        // LEFT JOIN 
                        //     [table 2] AS a ON c.[table 2 group id] = a.[table 2 group id]
                        // GROUP BY 
                        //     b.[table 1 group id], b.[table 1 group name], b.[table 1 status]   

                      },
                      database: "mainDb",

                      utilityFunctions: {
                        callbackFunction: null,
                        payloadFunction: [],
                        preProcessFunction: "crudApiGenerator",
                      },
                    },
                    requestMetaData: {
                      requestMethod: "GET",
                      permission: [
                        "list_${table}"
                      ],
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "task_history retrieved successfully!",
                    errorMessage: "Failed to retrieve task_history.",
                  },
                }
              ],
            },
          },
        ],
      },
    };
  `},
}
  
const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  (async () => {
    try {
      let connection = projectdb();
      const tables = await executeQuery(
        "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = ?",
        [dbConfig.database],
        connection
      );
  
      const backendFolder = path.join(__dirname,'..', 'Objects', 'Grouped_Objects');
      const backendCrudFolder =  path.join(__dirname,'..', 'Objects', 'Crud_Objects');
      const dropdownFolder = path.join(__dirname,'..','Objects', 'Drop_downs');
      const frontendFolder = path.join(__dirname, '..', '..', 'Frontend','src', 'root', 'Pages', 'Cruds','Tables');
      const sidePropsFolder = path.join(__dirname, '..', '..','Frontend','src', 'root', 'Utils', 'Props');
      
//  const backendFolder = path.join(__dirname, "script_results", "Objects", "Grouped_Objects");
//  const backendCrudFolder = path.join(
//    __dirname,
//    "script_results",
//    "Objects",
//    "Crud_Objects"
//  );
//  const dropdownFolder = path.join(
//    __dirname,
//    "script_results",
//    "Objects",
//    "Test Drop_downs"
//  );
//  const frontendFolder = path.join(
//    __dirname,
//    "script_results",
//    "Frontend",
//    "src",
//    "root",
//    "Pages",
//    "Cruds",
//    "Tables"
//  );
//  const sidePropsFolder = path.join(
//    __dirname,
//    "script_results",
//    "Frontend",
//    "src",
//    "root",
//    "Utils",
//    "Props"
//  );
      
      if (!fs.existsSync(sidePropsFolder)) {
        fs.mkdirSync(sidePropsFolder, { recursive: true });
      }
      
      if (!fs.existsSync(backendCrudFolder)) {
        fs.mkdirSync(backendCrudFolder, { recursive: true });
      }
      
      if (!fs.existsSync(frontendFolder)) {
          fs.mkdirSync(frontendFolder, { recursive: true });
      }
  
      if (!fs.existsSync(backendFolder)) {
        fs.mkdirSync(backendFolder, { recursive: true });
      }

      if (!fs.existsSync(dropdownFolder)) {
        fs.mkdirSync(dropdownFolder, { recursive: true });
      }




      let allColumns = {};
      const tableAnalysis = {};



      for (const { TABLE_NAME } of tables) {
        connection = await projectdb();
        const columns = await executeQuery(
          `SELECT 
            c.COLUMN_NAME, 
            c.COLUMN_KEY, 
            k.REFERENCED_TABLE_NAME, 
            k.REFERENCED_COLUMN_NAME, 
            k.CONSTRAINT_NAME 
          FROM INFORMATION_SCHEMA.COLUMNS c
          LEFT JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE k
            ON c.TABLE_SCHEMA = k.TABLE_SCHEMA 
            AND c.TABLE_NAME = k.TABLE_NAME 
            AND c.COLUMN_NAME = k.COLUMN_NAME
          WHERE c.TABLE_SCHEMA = ? 
            AND c.TABLE_NAME = ?`,
          [dbConfig.database, TABLE_NAME],
          connection
        );
        allColumns[TABLE_NAME] = columns;
        const uniqueAttributes = columns.filter(
          col =>
          col.COLUMN_KEY !== "PRI" && 
          !col.CONSTRAINT_NAME &&
          !col.REFERENCED_TABLE_NAME && 
          !["start_date", "end_date", "status", "created_at", "updated_at", "updated_by", "updatedAt", "createdAt", "Status", "excluded_id", "included_id"].includes(col.COLUMN_NAME) 
        );
        
        let weightedReferenceValue = 0; 
        let weightedConstraintValue = 0; 
        let uniqueValue = 0;
        
        for (const col of columns) {
          if (col.REFERENCED_TABLE_NAME) {
            
            weightedConstraintValue++;
          }
        }
        connection = await projectdb();
        const referencesToThisTable = await executeQuery(
          `SELECT COUNT(*) AS refCount
           FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
           WHERE REFERENCED_TABLE_SCHEMA = ? 
             AND REFERENCED_TABLE_NAME = ?`,
          [dbConfig.database, TABLE_NAME],
          connection
        );
    
        if (referencesToThisTable.length > 0) {
          weightedReferenceValue += referencesToThisTable[0].refCount;
        }
    
        
        tableAnalysis[TABLE_NAME] = {
          UniqueTable: (uniqueAttributes.length) >= weightedConstraintValue,
          UniqueValue: uniqueAttributes.length,
          WRV: weightedReferenceValue,
          WCV: weightedConstraintValue,
        };
  
        const primaryKey = columns.find(col => col.COLUMN_KEY === 'PRI')?.COLUMN_NAME;
  
        if (!primaryKey) {
          console.warn(`No primary key found for table ${TABLE_NAME}. Skipping.`);
          continue;
        }
   
      }
  
      const sortedTableAnalysis = Object.entries(tableAnalysis)
      .sort(([, a], [, b]) => b.WRV - a.WRV) 
      .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
      }, {});
  
  
      console.log("Sorted Table Analysis:", sortedTableAnalysis);
  
      const groups = {}; 
      const processedTables = new Set(); 
  
      
      async function getReferences(tableName) {
          connection = projectdb();
          const references = await executeQuery(
              `SELECT REFERENCED_TABLE_NAME 
              FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
              WHERE TABLE_SCHEMA = ? 
              AND TABLE_NAME = ?
              AND REFERENCED_TABLE_NAME IS NOT NULL`,
              [dbConfig.database, tableName],
              connection
          );
          return references.map(ref => ref.REFERENCED_TABLE_NAME);
      }
  
      
      async function getReferencedBy(tableName) {
          connection = projectdb()
          const referencedBy = await executeQuery(
              `SELECT TABLE_NAME 
              FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
              WHERE TABLE_SCHEMA = ? 
              AND REFERENCED_TABLE_NAME = ?
              AND (COLUMN_NAME != 'UpdatedBy' OR COLUMN_NAME != 'updatedBy')
              `,
              [dbConfig.database, tableName],
              connection
          );
          return referencedBy.map(ref => ref.TABLE_NAME);
      }
  
      for (const [tableName, analysis] of Object.entries(sortedTableAnalysis)) {
        if (processedTables.has(tableName)) continue; 
        if (!sortedTableAnalysis[tableName].UniqueTable) continue; 
    
        const group = new Set();
        group.add(tableName);
    
        
        const groupProcessedTables = new Set();
    
        
        const referencedTables = await getReferences(tableName);
        referencedTables.forEach((refTable) => {
            group.add(refTable);
        });
    
        
        const referencedByTables = await getReferencedBy(tableName);
        referencedByTables.forEach((refTable) => {
            group.add(refTable);
        });
    
        
        const processedIntermediateTables = new Set([...referencedTables, ...referencedByTables]);
        
        while (processedIntermediateTables.size > 0) {
            const currentTable = Array.from(processedIntermediateTables).pop();
            processedIntermediateTables.delete(currentTable);
    
            if (!groupProcessedTables.has(currentTable)) {
                const currentAnalysis = sortedTableAnalysis[currentTable];
                if (currentAnalysis && !currentAnalysis.UniqueTable) {
                    const relatedReferencedBy = await getReferencedBy(currentTable);
    
                    [...relatedReferencedBy].forEach((relatedTable) => {
                        if (!groupProcessedTables.has(relatedTable) && !sortedTableAnalysis[relatedTable].UniqueTable && (sortedTableAnalysis[relatedTable].WCV + sortedTableAnalysis[relatedTable].WRV <= 2)) {
                            group.add(relatedTable);
                            processedIntermediateTables.add(relatedTable);
                        }
                    });
                }
    
                
                groupProcessedTables.add(currentTable);
            }
        }
    
        groups[tableName] = Array.from(group);
      }


      let sidePropsFileContent = "";
      const propsFileName = path.join(sidePropsFolder, `sidebarConfig.js`);
      sidePropsFileContent += groupedFrontTemplates.sideBarProps(groups);
      fs.writeFileSync(propsFileName, sidePropsFileContent.trim(), 'utf8');
      console.log(`Generated Side bar props for Groups`);

      for (const { TABLE_NAME } of tables) {
        const columns = allColumns[TABLE_NAME];
        const primaryKey = columns.find(col => col.COLUMN_KEY === 'PRI')?.COLUMN_NAME;

        if (!primaryKey) {
          console.warn(`No primary key found for table ${TABLE_NAME}. Skipping.`);
          continue;
        }
        const capitalizedTableName = capitalizeFirstLetter(TABLE_NAME);
  
    
        const backendTableFolder = path.join(backendCrudFolder, capitalizedTableName);
        if (!fs.existsSync(backendTableFolder)) {
          fs.mkdirSync(backendTableFolder);
        }
        
        const frontendTableFolder = path.join(frontendFolder, capitalizedTableName);
        if (!fs.existsSync(frontendTableFolder)) {
          fs.mkdirSync(frontendTableFolder);
        }
        


        const crudFileName = path.join(backendTableFolder, `${capitalizedTableName}.js`);
        const frontendFileName = path.join(frontendTableFolder, `CRUD_serverCommunication.js`);
        const parametersFileName = path.join(frontendTableFolder, `CRUD_parameters.js`);
        const backendParametersFileName = path.join(backendTableFolder, `CRUD_parameters.js`);



        let crudFileContent = `
          /* CRUD Objects for table: ${TABLE_NAME} */
        `;
        crudFileContent += crudTemplates.object(TABLE_NAME, columns, capitalizedTableName, primaryKey, allColumns);
        fs.writeFileSync(crudFileName, crudFileContent.trim(), 'utf8');
        console.log(`Generated CRUD object for table: ${capitalizedTableName}`);
  
  
        let frontendFileContent = `
          /* Frontend Objects for table: ${TABLE_NAME} */
        `;
        frontendFileContent += frontEndTemplate.object(TABLE_NAME, columns, capitalizedTableName, primaryKey);
  
        let parametersFileContent = `
          /* Frontend Parameters for table: ${TABLE_NAME} */
        `;
        parametersFileContent += frontEndTemplate.parameters(TABLE_NAME, columns, capitalizedTableName, primaryKey);
  
        let backendParametersFileContent = crudTemplates.parameters(TABLE_NAME, columns, capitalizedTableName, primaryKey);
  
        fs.writeFileSync(frontendFileName, frontendFileContent.trim(), 'utf8');
        console.log(`Generated frontend object for table: ${capitalizedTableName}`);
  
        fs.writeFileSync(parametersFileName, parametersFileContent.trim(), 'utf8');
        console.log(`Generated frontend parameters for table: ${capitalizedTableName}`);
  
        fs.writeFileSync(backendParametersFileName, backendParametersFileContent.trim(), 'utf8');
        console.log('Generated Parameters For CRUD API for table:', capitalizedTableName);
        
      }
      for (const [groupKey, groupTables] of Object.entries(groups)) {

          let parametersFileContent = "";
          const objectName = capitalizeFirstLetter(groupKey);
          const backendTableFolder = path.join(backendFolder,  objectName);
          if (!fs.existsSync(backendTableFolder)) {
              fs.mkdirSync(backendTableFolder);
          }
          const crudFileName = path.join(backendTableFolder, `Grouped_${objectName}.js`);
          let crudFileContent = `
          `;
          crudFileContent += await groupedTemplates.object(groupTables, allColumns, objectName);
          fs.writeFileSync(crudFileName, crudFileContent.trim(), 'utf8');
          console.log(`Generated CRUD object for table: ${objectName}`);
  


          const frontendTableFolder = path.join(frontendFolder, objectName);
          if (!fs.existsSync(frontendTableFolder)) {
              fs.mkdirSync(frontendTableFolder);
          }   

          let frontendContent = "";
          const frontendObject = path.join(frontendTableFolder, `CRUD_serverCommunication.js`);
          frontendContent += groupedFrontTemplates.object(groupKey, allColumns[groupKey], objectName);
          fs.writeFileSync(frontendObject, frontendContent.trim(), 'utf8');
          console.log(`Generated frontend parameters for table: ${objectName}`);

          const parametersFileName = path.join(frontendTableFolder, `CRUD_parameters.js`);
          parametersFileContent += groupedFrontTemplates.parameters(groupTables, allColumns, objectName);
          fs.writeFileSync(parametersFileName, parametersFileContent.trim(), 'utf8');
          console.log(`Generated frontend parameters for table: ${objectName}`);
          
           const backendParametersFileName = path.join(backendTableFolder, `CRUD_parameters.js`);
          let backendParametersFileContent = groupedTemplates.parameters(groupTables, allColumns, objectName);
          fs.writeFileSync(backendParametersFileName, backendParametersFileContent.trim(), 'utf8');
  
  
          const requestSamplesFileName = path.join(backendTableFolder, `Sample_requests.js`);
          const parameters = require(backendParametersFileName)
          let apiSample = await reqTemplates.body(parameters);
          fs.writeFileSync(requestSamplesFileName, apiSample.trim(), 'utf-8');



          if (sortedTableAnalysis[groupKey].UniqueTable){
            let dropdownFileContent = "";
            const dropdownFileName = path.join(dropdownFolder, `${objectName}_dropdown.js`)
            dropdownFileContent += await dropdownTemplates.object(groupKey, allColumns)
            fs.writeFileSync(dropdownFileName, dropdownFileContent.trim(), 'utf-8');
            console.log(`Generated dropdown API for table: ${objectName}`);
          }
          console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
      }
  
        
      console.log('All files generated successfully!');

      
  
      } catch (error) {
          console.error('Error generating files:', error);
    }
  })();