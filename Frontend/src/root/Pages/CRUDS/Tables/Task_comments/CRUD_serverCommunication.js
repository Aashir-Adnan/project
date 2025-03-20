/* Frontend Objects for table: task_comments */
        
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
                      permission: 'update_task_comments',
                      onAction: () => console.log("Button pressed Edit"),
                      form: generateFormProps({
                          parameters: parameters,
                          apiUrl: "/task_comments/update?version=1.0",
                          requestType: "PUT",
                          mode:"edit"
                      }),
                      },
                      {
                      name: "Delete",
                      color: "red",
                      permission: 'delete_task_comments',
                      serverCommunication: serverCommunicationHelper({
                          parameters: parameters,
                          apiUrl:"/task_comments/delete?version=1.0",
                          requestType: "DELETE",
                      }),
                      onAction: () => console.log("Button pressed Delete"),
                      },
                      {
                      name: "View",
                      color: "grey",
                      permission: 'view_task_comments',
                      onAction: () => console.log("Button pressed View"),
                      form: generateFormProps({
                          parameters: parameters,
                          apiUrl: "/task_comments/view?version=1.0",
                          requestType: "GET",
                          mode:"view"
                      }),
                      },
                  ],
                  },
                  bulkAction: {
                  add: {
                      permission:'add_task_comments',
                      form: generateFormProps({
                      parameters: parameters,
                      apiUrl: "/task_comments/add?version=1.0",
                      requestType: "POST",
                      mode:"create"
                      }),
                  },
                  },

                  export: {
                    permission: 'export_task_comments',
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
                  permission: 'filter_task_comments',
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
                          "task_comments_commentId", "task_comments_taskId", "task_comments_userId", "task_comments_comment", "task_comments_status", "task_comments_updatedBy", "task_comments_updatedAt", "task_comments_createdAt"
                      ],
                      statusOptions: ["active", "inactive"],
                  },
                  excludeFilter: [],
                  },
                  sort: {
                  permission: 'sort_task_comments',
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
                  permission:'list_task_comments',
                  serverCommunication: serverCommunicationHelper({
                      parameters: parameters,
                      apiUrl:  "/task_comments/list?version=1.0",
                      apiActionType: "",
                      requestType: "GET",
                      reduxActionType: "",
                  }),
                  },
                  search: {
                  permission: 'search_task_comments',
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
                      apiUrl: "/task_comments/view",
                      apiActionType: "hr_task_comments_view",
                      requestType: "GET",
                      reduxActionType: "hr_task_comments_view",
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