import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1,
    },
  };

class TopToolbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                            Детски Градини
                    </Toolbar>
                </AppBar>
            </div>
        );

    }
}

export default withStyles(styles)(TopToolbar);