/* Frontend Objects for table: roles_designations_department_permissions */
        
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
                      permission: 'update_roles_designations_department_permissions',
                      onAction: () => console.log("Button pressed Edit"),
                      form: generateFormProps({
                          parameters: parameters,
                          apiUrl: "/roles_designations_department_permissions/update?version=1.0",
                          requestType: "PUT",
                          mode:"edit"
                      }),
                      },
                      {
                      name: "Delete",
                      color: "red",
                      permission: 'delete_roles_designations_department_permissions',
                      serverCommunication: serverCommunicationHelper({
                          parameters: parameters,
                          apiUrl:"/roles_designations_department_permissions/delete?version=1.0",
                          requestType: "DELETE",
                      }),
                      onAction: () => console.log("Button pressed Delete"),
                      },
                      {
                      name: "View",
                      color: "grey",
                      permission: 'view_roles_designations_department_permissions',
                      onAction: () => console.log("Button pressed View"),
                      form: generateFormProps({
                          parameters: parameters,
                          apiUrl: "/roles_designations_department_permissions/view?version=1.0",
                          requestType: "GET",
                          mode:"view"
                      }),
                      },
                  ],
                  },
                  bulkAction: {
                  add: {
                      permission:'add_roles_designations_department_permissions',
                      form: generateFormProps({
                      parameters: parameters,
                      apiUrl: "/roles_designations_department_permissions/add?version=1.0",
                      requestType: "POST",
                      mode:"create"
                      }),
                  },
                  },

                  export: {
                    permission: 'export_roles_designations_department_permissions',
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
                  permission: 'filter_roles_designations_department_permissions',
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
                          "roles_designations_department_permissions_roleDesignationDepartmentPermissionsId", "roles_designations_department_permissions_roleDesignationDepartmentId", "roles_designations_department_permissions_permissionGroupId", "roles_designations_department_permissions_UpdatedBy", "roles_designations_department_permissions_createdAt", "roles_designations_department_permissions_updatedAt", "roles_designations_department_permissions_createdBy"
                      ],
                      statusOptions: ["active", "inactive"],
                  },
                  excludeFilter: [],
                  },
                  sort: {
                  permission: 'sort_roles_designations_department_permissions',
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
                  permission:'list_roles_designations_department_permissions',
                  serverCommunication: serverCommunicationHelper({
                      parameters: parameters,
                      apiUrl:  "/roles_designations_department_permissions/list?version=1.0",
                      apiActionType: "",
                      requestType: "GET",
                      reduxActionType: "",
                  }),
                  },
                  search: {
                  permission: 'search_roles_designations_department_permissions',
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
                      apiUrl: "/roles_designations_department_permissions/view",
                      apiActionType: "hr_roles_designations_department_permissions_view",
                      requestType: "GET",
                      reduxActionType: "hr_roles_designations_department_permissions_view",
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