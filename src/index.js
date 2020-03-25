import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'

export default class ButtonUI extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text } = this.props

    return (
      <div>
        <Button variant='contained' color='primary'>
          {text}
        </Button>
      </div>
    )
  }
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function ContainedButtons() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Button variant="contained" color="primary">
//         {text}
//       </Button>
//     </div>
//   );
// }
