import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import styles from "./Terminals.module.css";

const Terminals = ({data}) => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 20px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            User Distribution
          </Typography>
        </Box>

        <div className={styles.terminalsBox}>
          <div className={styles.monthlyEarning}>
            <h3>{data[0]?.count}</h3>
            <p>{data[0]?.label}</p>
          </div>
          
          <div className={styles.usersEarning}>
            <h3>{data[1]?.count}</h3>
            <p>{data[1]?.label}</p>
          </div>

          <div className={styles.inactiveEarning}>
            <h3>{data[2]?.count}</h3>
            <p>{data[2]?.label}</p>
          </div>

          <ul>
            <li>{data[0]?.label}</li>
            <li>{data[1]?.label}</li>
            <li>{data[2]?.label}</li>
          </ul>
        </div>
      </Card>
    </>
  );
};

export default Terminals;
