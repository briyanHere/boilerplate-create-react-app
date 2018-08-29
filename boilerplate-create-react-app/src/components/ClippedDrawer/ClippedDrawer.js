import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';


const drawerWidth = 200;

const styles = theme => ({
  root: {
    height: '100%',
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    paddingTop: 64,
    width: drawerWidth,
    zIndex: 500,
  },
});


function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="ListItemText 1" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="ListItemText 1" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="ListItemText 1" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default withStyles(styles)(ClippedDrawer);
