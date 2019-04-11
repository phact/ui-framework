import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import style from '../../css/style.css';

export default class HomePage extends PureComponent {

  render() {
    return (
       <div className="container">
          <br />
          <Typography variant="h5" color="inherit" >
             Many will race, one shall win.
          </Typography>
          <br />
          <Paper className="paper" elevation={1}>
          </Paper>
        </div>
    );
  }
}
