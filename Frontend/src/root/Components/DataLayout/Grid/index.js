import Grid from "@mui/material/Grid";
import { Grow } from "@mui/material";
import React, { useEffect, useState } from "react";
import GridCard from "./GridCard";
// import CustomGrid from "./../CustomGrid";


const Grids = ({ CustomCard, dataProp, configProp, appearanceProp, additionalProp,onRowAction,onUpdateRefreshData }) => {
  const [data, setData] = useState(additionalProp?.data);

  useEffect(() => {
    setData(additionalProp?.data);
  }, [additionalProp?.data]);

  return (
    <>
      <Grid
        container
        rowSpacing={1}
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "left",
          lg: "left",
          xl: "left",
        }}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        {data.map((member, i) => (
          <Grow in={true} key={i}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12 / dataProp?.features?.grid?.entitiesPerRow}
              lg={12 / dataProp?.features?.grid?.entitiesPerRow}
              xl={12 / dataProp?.features?.grid?.entitiesPerRow}
              sx={{
                paddingY: 0.5,
              }}
            >
              {configProp?.features?.colaborator.enable ? (
                <>
                <CustomCard
                  data={member}
                  config={configProp}
                  appearance={appearanceProp}
                  onRowAction={onRowAction}
                  onUpdateRefreshData={onUpdateRefreshData} />
                  </>
              ) : (
                <>
                <GridCard
                  member={member}
                  dataProp={dataProp}
                  configProp={configProp}
                  additionalProp={additionalProp}
                  appearanceProp={appearanceProp}
                  onRowAction={onRowAction}
                  onUpdateRefreshData={onUpdateRefreshData}
                />
                </>
              )}

            </Grid>
          </Grow>
        ))}
      </Grid>
    </>
  );
};

export default Grids;