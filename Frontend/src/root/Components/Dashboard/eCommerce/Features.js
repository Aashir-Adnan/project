import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardsDropDown from "./Cards/ComplexInteraction";


const Features = ({ FeaturesData, onCardClick }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="stretch" // Ensure cards align properly
      rowSpacing={2} // Add vertical spacing between rows
      columnSpacing={6} // Add horizontal spacing between columns
      wrap="wrap" // Ensure proper wrapping of cards on smaller screens
    >
      {FeaturesData.map((feature) => (
        <Grid
          item
          xs={12} // Full width on extra-small screens (mobile)
          sm={6}  // Half width on small screens (600px and above)
          md={4}  // One-third width on medium screens (900px and above)
          lg={4}  // One-third width on large screens (1200px and above)
          key={feature.id}
        >
          <Card
            onClick={() => onCardClick(feature.id)}
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              p: "20px",
              width: "100%", // Ensure the card takes full width of the grid item
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "15px",
              }}
            >
              <Box>
                <Box
                  component="h1" // Use correct component for headings
                  sx={{ fontSize: 25, fontWeight: 700, mb: "5px" }}
                >
                  {feature.title}
                </Box>
                <Box component="p" sx={{ fontSize: 14 }}>
                  {feature.subTitle}
                </Box>
              </Box>

              {/* Uncomment this block if the image is required */}
              {/* <Box
                sx={{
                  width: "62px",
                  height: "62px",
                  lineHeight: "85px",
                  background: "rgba(85, 112, 241, 0.12)",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <img src={feature.image} alt="Graph" />
              </Box> */}
            </Box>

            <Box>
              <Box
                sx={{
                  fontSize: "13px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span className={`mr-5px ${feature.color}`}>
                  {feature.icon}
                </span>
                {feature.growthText}
              </Box>
              <CardsDropDown
                title={feature.subTitle}
                subTitle1={feature.subTitle1}
                subTitle2={feature.subTitle2}
                subTitle3={feature.subTitle3}
              />
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;
