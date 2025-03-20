import React, { Suspense, useState, useEffect } from "react";
import GroupsTable from "../../Components/DataLayout/ParentComp";
import LoadingOverlay from "../../Components/Loading/LoadingOverLay";

const TablesIndex = ({ selectedComponent }) => {
  const [listingCrudProps, setListingCrudProps] = useState(null);
  const extractCrudProps = (props) => {
    const { data, config, appearance } = props;
  
    const formattedData = {
      data: {},
      config: {
        crud: {
          module: "",
          listName: "",
          rowActions: {
            actions: data.features.rowActions.actions.map((action) => ({
              icon: action.name,
              title: action.name,
              permission: action.permission,
              apiUrl: action.form?.apiUrl || action.serverCommunication?.apiUrl || "",
              downloadPdf: false, // Assuming downloadPdf is not defined in the input data
              requestType: action.form?.requestType || action.serverCommunication?.requestType || "",
            })),
          },
          parameters: data.features.parameters,
        },
      },
      appearance: appearance || {},
    };
  
    // Convert the formatted data to JSON and trigger download
    const downloadJSON = (filename, jsonContent) => {
      const blob = new Blob([JSON.stringify(jsonContent, null, 2)], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    };
  
    downloadJSON("formattedData.json", formattedData);
  };
  
  

  useEffect(() => {
    const loadProps = async () => {
      try {
        console.log('selectedComponent',selectedComponent)
        if (selectedComponent) {
          const module = await import(`./Tables/${selectedComponent}/CRUD_serverCommunication`);
          // extractCrudProps(module.listing_crud_props);
          setListingCrudProps(module.listing_crud_props || module);
          console.log("module",module)
        }
      } catch (error) {
        console.log(`Failed to load module for ${selectedComponent}:`, error);
      }
    };
    loadProps();
  }, [selectedComponent]);

  if (!listingCrudProps) {
    return <LoadingOverlay isLoading />;
  }

  return (
    <Suspense fallback={<LoadingOverlay isLoading />}>
      <GroupsTable
        data={listingCrudProps.data}
        config={listingCrudProps.config}
        appearance={listingCrudProps.appearance}
      />
    </Suspense>
  );
};

export default TablesIndex;