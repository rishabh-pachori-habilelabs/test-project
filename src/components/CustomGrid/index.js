import React from "react";
// import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, ListItem, ListItemText } from "@material-ui/core";
// import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Box: {
    padding: "40px",
    border: "4px solid red",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#26334e"
  },
	borderListItem: {
		'& .MuiListItemText-root': {
			textAlign: 'center',
		},
    padding: "40px",
    border: "4px solid red",
    backgroundColor: '#fbbd4c',
    borderRadius: '20px'
	},
  listItem: {
    '& .MuiListItemText-root': {
			textAlign: 'center',
		},
    borderRadius: '20px'
  }
}));

/** Custom button component */
const CustomGrid = ({ listItems }) => {
  const { list1, list2, list3 } = listItems
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className={classes.Box}>
            <Typography variant={"h2"}>React App Architecture</Typography>
            <span>For large commercial projects</span>
          </Box>
        </Grid>
        <Grid item xs={4} style= {{ border: "4px solid red" }}>
          <Typography variant={"h5"}>DEV STACK</Typography>
          <Box className={ classes.borderListItem }>
					{list1.map((item) => {
						return (
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
						)
					})}
          </Box>
        </Grid>
        <Grid item xs={4}>
        <Typography variant={"h5"}>APPLICATION CORE</Typography>
          <Box className={ classes.listItem } style= {{ backgroundColor: '#8c7edb' }}>
					{list2.map((item) => {
						return (
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
						)
					})}
          </Box>
        </Grid>
        <Grid item xs={4}>
        <Typography variant={"h5"}>INTERFACE</Typography>
          <Box className={ classes.listItem } style= {{ backgroundColor: '#53dd83' }}>
					{list3.map((item) => {
						return (
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
						)
					})}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomGrid;
