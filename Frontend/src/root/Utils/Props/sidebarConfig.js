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
        "Users": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Tasks N": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Teams": <GroupIcon sx={{color: "#FF6347"}}/>,
        "User Roles Designations Department": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Attachments": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Attendance": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Attributes": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Attributes Groups": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Attribute Groups Attribute": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Attribute Sub Category Item": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Bill Payment": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Campus": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Chatting Groups": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Chatting Group Members": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Credentials": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Departments": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Device Otp": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Files": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Inventory": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Inventory Bill": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Inventory Sub Category": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Inventory Sub Category Items": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Inventory Types Category": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Inventory Vendors": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Invoices": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Item Allocation": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Item Location": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Item Maintenance": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Leaves": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Meetings": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Messages": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Notifications": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Permissions": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Permission Groups": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Permission Groups Permissions": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Platforms": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Platform Versions": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Roles": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Roles Designations Department": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Tasks": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Task Flows": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Task Flow Steps": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Task History": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Task Tags": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Templates": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Time Tracking": <GroupIcon sx={{color: "#FF6347"}}/>,
        "User Devices": <GroupIcon sx={{color: "#FF6347"}}/>,
        "User Device Notifications": <GroupIcon sx={{color: "#FF6347"}}/>,
        "User Role Designation Permissions": <GroupIcon sx={{color: "#FF6347"}}/>,
        "Versions": <GroupIcon sx={{color: "#FF6347"}}/>
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
            },
            {
              title: "Users Management",
              icon: iconMapping["Users"],
              path: "/Users-managements/Users",
              //permission: ["Users_management"],
              subNav: [
                
                    {
                      title: "Users",
                      path: "crud/Users-managements/Users",
                      //permission: ["users"]
                    }
                  ,
                    {
                      title: "Attendance",
                      path: "crud/Users-managements/Attendance",
                      //permission: ["attendance"]
                    }
                  ,
                    {
                      title: "Files",
                      path: "crud/Users-managements/Files",
                      //permission: ["files"]
                    }
                  ,
                    {
                      title: "Invoices",
                      path: "crud/Users-managements/Invoices",
                      //permission: ["invoices"]
                    }
                  ,
                    {
                      title: "Leaves",
                      path: "crud/Users-managements/Leaves",
                      //permission: ["leaves"]
                    }
                  ,
                    {
                      title: "Meetings",
                      path: "crud/Users-managements/Meetings",
                      //permission: ["meetings"]
                    }
                  ,
                    {
                      title: "Messages N",
                      path: "crud/Users-managements/Messages_n",
                      //permission: ["messagesN"]
                    }
                  ,
                    {
                      title: "Projects",
                      path: "crud/Users-managements/Projects",
                      //permission: ["projects"]
                    }
                  ,
                    {
                      title: "Tasks N",
                      path: "crud/Users-managements/Tasks_n",
                      //permission: ["tasksN"]
                    }
                  ,
                    {
                      title: "Task Comments",
                      path: "crud/Users-managements/Task_comments",
                      //permission: ["taskComments"]
                    }
                  ,
                    {
                      title: "Teams",
                      path: "crud/Users-managements/Teams",
                      //permission: ["teams"]
                    }
                  ,
                    {
                      title: "Time Tracking",
                      path: "crud/Users-managements/Time_tracking",
                      //permission: ["timeTracking"]
                    }
                  
              ]
            },
            {
              title: "Tasks N Management",
              icon: iconMapping["Tasks N"],
              path: "/TasksN-managements/Tasks_n",
              //permission: ["TasksN_management"],
              subNav: [
                
                    {
                      title: "Tasks N",
                      path: "crud/TasksN-managements/Tasks_n",
                      //permission: ["tasksN"]
                    }
                  ,
                    {
                      title: "Users",
                      path: "crud/TasksN-managements/Users",
                      //permission: ["users"]
                    }
                  ,
                    {
                      title: "Projects",
                      path: "crud/TasksN-managements/Projects",
                      //permission: ["projects"]
                    }
                  ,
                    {
                      title: "Files",
                      path: "crud/TasksN-managements/Files",
                      //permission: ["files"]
                    }
                  ,
                    {
                      title: "Task Comments",
                      path: "crud/TasksN-managements/Task_comments",
                      //permission: ["taskComments"]
                    }
                  ,
                    {
                      title: "Task Tags",
                      path: "crud/TasksN-managements/Task_tags",
                      //permission: ["taskTags"]
                    }
                  ,
                    {
                      title: "Time Tracking",
                      path: "crud/TasksN-managements/Time_tracking",
                      //permission: ["timeTracking"]
                    }
                  
              ]
            },
            {
              title: "Teams Management",
              icon: iconMapping["Teams"],
              path: "/Teams-managements/Teams",
              //permission: ["Teams_management"],
              subNav: [
                
                    {
                      title: "Teams",
                      path: "crud/Teams-managements/Teams",
                      //permission: ["teams"]
                    }
                  ,
                    {
                      title: "Users",
                      path: "crud/Teams-managements/Users",
                      //permission: ["users"]
                    }
                  ,
                    {
                      title: "Projects",
                      path: "crud/Teams-managements/Projects",
                      //permission: ["projects"]
                    }
                  
              ]
            },
            {
              title: "User Roles Designations Department Management",
              icon: iconMapping["User Roles Designations Department"],
              path: "/UserRolesDesignationsDepartment-managements/User_roles_designations_department",
              //permission: ["UserRolesDesignationsDepartment_management"],
              subNav: [
                
                    {
                      title: "User Roles Designations Department",
                      path: "crud/UserRolesDesignationsDepartment-managements/User_roles_designations_department",
                      //permission: ["userRolesDesignationsDepartment"]
                    }
                  ,
                    {
                      title: "Attachments",
                      path: "crud/UserRolesDesignationsDepartment-managements/Attachments",
                      //permission: ["attachments"]
                    }
                  
              ]
            },
            {
              title: "Attachments Management",
              icon: iconMapping["Attachments"],
              path: "/Attachments-managements/Attachments",
              //permission: ["Attachments_management"],
              subNav: [
                
                    {
                      title: "Attachments",
                      path: "crud/Attachments-managements/Attachments",
                      //permission: ["attachments"]
                    }
                  ,
                    {
                      title: "User Roles Designations Department",
                      path: "crud/Attachments-managements/User_roles_designations_department",
                      //permission: ["userRolesDesignationsDepartment"]
                    }
                  
              ]
            },
            {
              title: "Attendance Management",
              icon: iconMapping["Attendance"],
              path: "/Attendance-managements/Attendance",
              //permission: ["Attendance_management"],
              subNav: [
                
                    {
                      title: "Attendance",
                      path: "crud/Attendance-managements/Attendance",
                      //permission: ["attendance"]
                    }
                  ,
                    {
                      title: "Users",
                      path: "crud/Attendance-managements/Users",
                      //permission: ["users"]
                    }
                  
              ]
            },
            {
              title: "Attributes Management",
              icon: iconMapping["Attributes"],
              path: "/Attributes-managements/Attributes",
              //permission: ["Attributes_management"],
              subNav: [
                
                    {
                      title: "Attributes",
                      path: "crud/Attributes-managements/Attributes",
                      //permission: ["attributes"]
                    }
                  
              ]
            },
            {
              title: "Attributes Groups Management",
              icon: iconMapping["Attributes Groups"],
              path: "/AttributesGroups-managements/Attributes_groups",
              //permission: ["AttributesGroups_management"],
              subNav: [
                
                    {
                      title: "Attributes Groups",
                      path: "crud/AttributesGroups-managements/Attributes_groups",
                      //permission: ["attributesGroups"]
                    }
                  
              ]
            },
            {
              title: "Attribute Groups Attribute Management",
              icon: iconMapping["Attribute Groups Attribute"],
              path: "/AttributeGroupsAttribute-managements/Attribute_groups_attribute",
              //permission: ["AttributeGroupsAttribute_management"],
              subNav: [
                
                    {
                      title: "Attribute Groups Attribute",
                      path: "crud/AttributeGroupsAttribute-managements/Attribute_groups_attribute",
                      //permission: ["attributeGroupsAttribute"]
                    }
                  
              ]
            },
            {
              title: "Attribute Sub Category Item Management",
              icon: iconMapping["Attribute Sub Category Item"],
              path: "/AttributeSubCategoryItem-managements/Attribute_sub_category_item",
              //permission: ["AttributeSubCategoryItem_management"],
              subNav: [
                
                    {
                      title: "Attribute Sub Category Item",
                      path: "crud/AttributeSubCategoryItem-managements/Attribute_sub_category_item",
                      //permission: ["attributeSubCategoryItem"]
                    }
                  
              ]
            },
            {
              title: "Bill Payment Management",
              icon: iconMapping["Bill Payment"],
              path: "/BillPayment-managements/Bill_payment",
              //permission: ["BillPayment_management"],
              subNav: [
                
                    {
                      title: "Bill Payment",
                      path: "crud/BillPayment-managements/Bill_payment",
                      //permission: ["billPayment"]
                    }
                  
              ]
            },
            {
              title: "Campus Management",
              icon: iconMapping["Campus"],
              path: "/Campus-managements/Campus",
              //permission: ["Campus_management"],
              subNav: [
                
                    {
                      title: "Campus",
                      path: "crud/Campus-managements/Campus",
                      //permission: ["campus"]
                    }
                  
              ]
            },
            {
              title: "Chatting Groups Management",
              icon: iconMapping["Chatting Groups"],
              path: "/ChattingGroups-managements/Chatting_groups",
              //permission: ["ChattingGroups_management"],
              subNav: [
                
                    {
                      title: "Chatting Groups",
                      path: "crud/ChattingGroups-managements/Chatting_groups",
                      //permission: ["chattingGroups"]
                    }
                  
              ]
            },
            {
              title: "Chatting Group Members Management",
              icon: iconMapping["Chatting Group Members"],
              path: "/ChattingGroupMembers-managements/Chatting_group_members",
              //permission: ["ChattingGroupMembers_management"],
              subNav: [
                
                    {
                      title: "Chatting Group Members",
                      path: "crud/ChattingGroupMembers-managements/Chatting_group_members",
                      //permission: ["chattingGroupMembers"]
                    }
                  
              ]
            },
            {
              title: "Credentials Management",
              icon: iconMapping["Credentials"],
              path: "/Credentials-managements/Credentials",
              //permission: ["Credentials_management"],
              subNav: [
                
                    {
                      title: "Credentials",
                      path: "crud/Credentials-managements/Credentials",
                      //permission: ["credentials"]
                    }
                  
              ]
            },
            {
              title: "Departments Management",
              icon: iconMapping["Departments"],
              path: "/Departments-managements/Departments",
              //permission: ["Departments_management"],
              subNav: [
                
                    {
                      title: "Departments",
                      path: "crud/Departments-managements/Departments",
                      //permission: ["departments"]
                    }
                  
              ]
            },
            {
              title: "Device Otp Management",
              icon: iconMapping["Device Otp"],
              path: "/DeviceOtp-managements/Device_otp",
              //permission: ["DeviceOtp_management"],
              subNav: [
                
                    {
                      title: "Device Otp",
                      path: "crud/DeviceOtp-managements/Device_otp",
                      //permission: ["deviceOtp"]
                    }
                  
              ]
            },
            {
              title: "Files Management",
              icon: iconMapping["Files"],
              path: "/Files-managements/Files",
              //permission: ["Files_management"],
              subNav: [
                
                    {
                      title: "Files",
                      path: "crud/Files-managements/Files",
                      //permission: ["files"]
                    }
                  ,
                    {
                      title: "Tasks N",
                      path: "crud/Files-managements/Tasks_n",
                      //permission: ["tasksN"]
                    }
                  ,
                    {
                      title: "Projects",
                      path: "crud/Files-managements/Projects",
                      //permission: ["projects"]
                    }
                  ,
                    {
                      title: "Users",
                      path: "crud/Files-managements/Users",
                      //permission: ["users"]
                    }
                  
              ]
            },
            {
              title: "Inventory Management",
              icon: iconMapping["Inventory"],
              path: "/Inventory-managements/Inventory",
              //permission: ["Inventory_management"],
              subNav: [
                
                    {
                      title: "Inventory",
                      path: "crud/Inventory-managements/Inventory",
                      //permission: ["inventory"]
                    }
                  
              ]
            },
            {
              title: "Inventory Bill Management",
              icon: iconMapping["Inventory Bill"],
              path: "/InventoryBill-managements/Inventory_bill",
              //permission: ["InventoryBill_management"],
              subNav: [
                
                    {
                      title: "Inventory Bill",
                      path: "crud/InventoryBill-managements/Inventory_bill",
                      //permission: ["inventoryBill"]
                    }
                  
              ]
            },
            {
              title: "Inventory Sub Category Management",
              icon: iconMapping["Inventory Sub Category"],
              path: "/InventorySubCategory-managements/Inventory_sub_category",
              //permission: ["InventorySubCategory_management"],
              subNav: [
                
                    {
                      title: "Inventory Sub Category",
                      path: "crud/InventorySubCategory-managements/Inventory_sub_category",
                      //permission: ["inventorySubCategory"]
                    }
                  
              ]
            },
            {
              title: "Inventory Sub Category Items Management",
              icon: iconMapping["Inventory Sub Category Items"],
              path: "/InventorySubCategoryItems-managements/Inventory_sub_category_items",
              //permission: ["InventorySubCategoryItems_management"],
              subNav: [
                
                    {
                      title: "Inventory Sub Category Items",
                      path: "crud/InventorySubCategoryItems-managements/Inventory_sub_category_items",
                      //permission: ["inventorySubCategoryItems"]
                    }
                  
              ]
            },
            {
              title: "Inventory Types Category Management",
              icon: iconMapping["Inventory Types Category"],
              path: "/InventoryTypesCategory-managements/Inventory_types_category",
              //permission: ["InventoryTypesCategory_management"],
              subNav: [
                
                    {
                      title: "Inventory Types Category",
                      path: "crud/InventoryTypesCategory-managements/Inventory_types_category",
                      //permission: ["inventoryTypesCategory"]
                    }
                  
              ]
            },
            {
              title: "Inventory Vendors Management",
              icon: iconMapping["Inventory Vendors"],
              path: "/InventoryVendors-managements/Inventory_vendors",
              //permission: ["InventoryVendors_management"],
              subNav: [
                
                    {
                      title: "Inventory Vendors",
                      path: "crud/InventoryVendors-managements/Inventory_vendors",
                      //permission: ["inventoryVendors"]
                    }
                  
              ]
            },
            {
              title: "Invoices Management",
              icon: iconMapping["Invoices"],
              path: "/Invoices-managements/Invoices",
              //permission: ["Invoices_management"],
              subNav: [
                
                    {
                      title: "Invoices",
                      path: "crud/Invoices-managements/Invoices",
                      //permission: ["invoices"]
                    }
                  ,
                    {
                      title: "Users",
                      path: "crud/Invoices-managements/Users",
                      //permission: ["users"]
                    }
                  
              ]
            },
            {
              title: "Item Allocation Management",
              icon: iconMapping["Item Allocation"],
              path: "/ItemAllocation-managements/Item_allocation",
              //permission: ["ItemAllocation_management"],
              subNav: [
                
                    {
                      title: "Item Allocation",
                      path: "crud/ItemAllocation-managements/Item_allocation",
                      //permission: ["itemAllocation"]
                    }
                  
              ]
            },
            {
              title: "Item Location Management",
              icon: iconMapping["Item Location"],
              path: "/ItemLocation-managements/Item_location",
              //permission: ["ItemLocation_management"],
              subNav: [
                
                    {
                      title: "Item Location",
                      path: "crud/ItemLocation-managements/Item_location",
                      //permission: ["itemLocation"]
                    }
                  
              ]
            },
            {
              title: "Item Maintenance Management",
              icon: iconMapping["Item Maintenance"],
              path: "/ItemMaintenance-managements/Item_maintenance",
              //permission: ["ItemMaintenance_management"],
              subNav: [
                
                    {
                      title: "Item Maintenance",
                      path: "crud/ItemMaintenance-managements/Item_maintenance",
                      //permission: ["itemMaintenance"]
                    }
                  
              ]
            },
            {
              title: "Leaves Management",
              icon: iconMapping["Leaves"],
              path: "/Leaves-managements/Leaves",
              //permission: ["Leaves_management"],
              subNav: [
                
                    {
                      title: "Leaves",
                      path: "crud/Leaves-managements/Leaves",
                      //permission: ["leaves"]
                    }
                  ,
                    {
                      title: "Users",
                      path: "crud/Leaves-managements/Users",
                      //permission: ["users"]
                    }
                  
              ]
            },
            {
              title: "Meetings Management",
              icon: iconMapping["Meetings"],
              path: "/Meetings-managements/Meetings",
              //permission: ["Meetings_management"],
              subNav: [
                
                    {
                      title: "Meetings",
                      path: "crud/Meetings-managements/Meetings",
                      //permission: ["meetings"]
                    }
                  ,
                    {
                      title: "Users",
                      path: "crud/Meetings-managements/Users",
                      //permission: ["users"]
                    }
                  
              ]
            },
            {
              title: "Messages Management",
              icon: iconMapping["Messages"],
              path: "/Messages-managements/Messages",
              //permission: ["Messages_management"],
              subNav: [
                
                    {
                      title: "Messages",
                      path: "crud/Messages-managements/Messages",
                      //permission: ["messages"]
                    }
                  
              ]
            },
            {
              title: "Notifications Management",
              icon: iconMapping["Notifications"],
              path: "/Notifications-managements/Notifications",
              //permission: ["Notifications_management"],
              subNav: [
                
                    {
                      title: "Notifications",
                      path: "crud/Notifications-managements/Notifications",
                      //permission: ["notifications"]
                    }
                  
              ]
            },
            {
              title: "Permissions Management",
              icon: iconMapping["Permissions"],
              path: "/Permissions-managements/Permissions",
              //permission: ["Permissions_management"],
              subNav: [
                
                    {
                      title: "Permissions",
                      path: "crud/Permissions-managements/Permissions",
                      //permission: ["permissions"]
                    }
                  
              ]
            },
            {
              title: "Permission Groups Management",
              icon: iconMapping["Permission Groups"],
              path: "/PermissionGroups-managements/Permission_groups",
              //permission: ["PermissionGroups_management"],
              subNav: [
                
                    {
                      title: "Permission Groups",
                      path: "crud/PermissionGroups-managements/Permission_groups",
                      //permission: ["permissionGroups"]
                    }
                  
              ]
            },
            {
              title: "Permission Groups Permissions Management",
              icon: iconMapping["Permission Groups Permissions"],
              path: "/PermissionGroupsPermissions-managements/Permission_groups_permissions",
              //permission: ["PermissionGroupsPermissions_management"],
              subNav: [
                
                    {
                      title: "Permission Groups Permissions",
                      path: "crud/PermissionGroupsPermissions-managements/Permission_groups_permissions",
                      //permission: ["permissionGroupsPermissions"]
                    }
                  
              ]
            },
            {
              title: "Platforms Management",
              icon: iconMapping["Platforms"],
              path: "/Platforms-managements/Platforms",
              //permission: ["Platforms_management"],
              subNav: [
                
                    {
                      title: "Platforms",
                      path: "crud/Platforms-managements/Platforms",
                      //permission: ["platforms"]
                    }
                  
              ]
            },
            {
              title: "Platform Versions Management",
              icon: iconMapping["Platform Versions"],
              path: "/PlatformVersions-managements/Platform_versions",
              //permission: ["PlatformVersions_management"],
              subNav: [
                
                    {
                      title: "Platform Versions",
                      path: "crud/PlatformVersions-managements/Platform_versions",
                      //permission: ["platformVersions"]
                    }
                  
              ]
            },
            {
              title: "Roles Management",
              icon: iconMapping["Roles"],
              path: "/Roles-managements/Roles",
              //permission: ["Roles_management"],
              subNav: [
                
                    {
                      title: "Roles",
                      path: "crud/Roles-managements/Roles",
                      //permission: ["roles"]
                    }
                  
              ]
            },
            {
              title: "Roles Designations Department Management",
              icon: iconMapping["Roles Designations Department"],
              path: "/RolesDesignationsDepartment-managements/Roles_designations_department",
              //permission: ["RolesDesignationsDepartment_management"],
              subNav: [
                
                    {
                      title: "Roles Designations Department",
                      path: "crud/RolesDesignationsDepartment-managements/Roles_designations_department",
                      //permission: ["rolesDesignationsDepartment"]
                    }
                  
              ]
            },
            {
              title: "Tasks Management",
              icon: iconMapping["Tasks"],
              path: "/Tasks-managements/Tasks",
              //permission: ["Tasks_management"],
              subNav: [
                
                    {
                      title: "Tasks",
                      path: "crud/Tasks-managements/Tasks",
                      //permission: ["tasks"]
                    }
                  
              ]
            },
            {
              title: "Task Flows Management",
              icon: iconMapping["Task Flows"],
              path: "/TaskFlows-managements/Task_flows",
              //permission: ["TaskFlows_management"],
              subNav: [
                
                    {
                      title: "Task Flows",
                      path: "crud/TaskFlows-managements/Task_flows",
                      //permission: ["taskFlows"]
                    }
                  
              ]
            },
            {
              title: "Task Flow Steps Management",
              icon: iconMapping["Task Flow Steps"],
              path: "/TaskFlowSteps-managements/Task_flow_steps",
              //permission: ["TaskFlowSteps_management"],
              subNav: [
                
                    {
                      title: "Task Flow Steps",
                      path: "crud/TaskFlowSteps-managements/Task_flow_steps",
                      //permission: ["taskFlowSteps"]
                    }
                  
              ]
            },
            {
              title: "Task History Management",
              icon: iconMapping["Task History"],
              path: "/TaskHistory-managements/Task_history",
              //permission: ["TaskHistory_management"],
              subNav: [
                
                    {
                      title: "Task History",
                      path: "crud/TaskHistory-managements/Task_history",
                      //permission: ["taskHistory"]
                    }
                  
              ]
            },
            {
              title: "Task Tags Management",
              icon: iconMapping["Task Tags"],
              path: "/TaskTags-managements/Task_tags",
              //permission: ["TaskTags_management"],
              subNav: [
                
                    {
                      title: "Task Tags",
                      path: "crud/TaskTags-managements/Task_tags",
                      //permission: ["taskTags"]
                    }
                  ,
                    {
                      title: "Tasks N",
                      path: "crud/TaskTags-managements/Tasks_n",
                      //permission: ["tasksN"]
                    }
                  
              ]
            },
            {
              title: "Templates Management",
              icon: iconMapping["Templates"],
              path: "/Templates-managements/Templates",
              //permission: ["Templates_management"],
              subNav: [
                
                    {
                      title: "Templates",
                      path: "crud/Templates-managements/Templates",
                      //permission: ["templates"]
                    }
                  
              ]
            },
            {
              title: "Time Tracking Management",
              icon: iconMapping["Time Tracking"],
              path: "/TimeTracking-managements/Time_tracking",
              //permission: ["TimeTracking_management"],
              subNav: [
                
                    {
                      title: "Time Tracking",
                      path: "crud/TimeTracking-managements/Time_tracking",
                      //permission: ["timeTracking"]
                    }
                  ,
                    {
                      title: "Tasks N",
                      path: "crud/TimeTracking-managements/Tasks_n",
                      //permission: ["tasksN"]
                    }
                  ,
                    {
                      title: "Users",
                      path: "crud/TimeTracking-managements/Users",
                      //permission: ["users"]
                    }
                  
              ]
            },
            {
              title: "User Devices Management",
              icon: iconMapping["User Devices"],
              path: "/UserDevices-managements/User_devices",
              //permission: ["UserDevices_management"],
              subNav: [
                
                    {
                      title: "User Devices",
                      path: "crud/UserDevices-managements/User_devices",
                      //permission: ["userDevices"]
                    }
                  
              ]
            },
            {
              title: "User Device Notifications Management",
              icon: iconMapping["User Device Notifications"],
              path: "/UserDeviceNotifications-managements/User_device_notifications",
              //permission: ["UserDeviceNotifications_management"],
              subNav: [
                
                    {
                      title: "User Device Notifications",
                      path: "crud/UserDeviceNotifications-managements/User_device_notifications",
                      //permission: ["userDeviceNotifications"]
                    }
                  
              ]
            },
            {
              title: "User Role Designation Permissions Management",
              icon: iconMapping["User Role Designation Permissions"],
              path: "/UserRoleDesignationPermissions-managements/User_role_designation_permissions",
              //permission: ["UserRoleDesignationPermissions_management"],
              subNav: [
                
                    {
                      title: "User Role Designation Permissions",
                      path: "crud/UserRoleDesignationPermissions-managements/User_role_designation_permissions",
                      //permission: ["userRoleDesignationPermissions"]
                    }
                  
              ]
            },
            {
              title: "Versions Management",
              icon: iconMapping["Versions"],
              path: "/Versions-managements/Versions",
              //permission: ["Versions_management"],
              subNav: [
                
                    {
                      title: "Versions",
                      path: "crud/Versions-managements/Versions",
                      //permission: ["versions"]
                    }
                  
              ]
            }
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