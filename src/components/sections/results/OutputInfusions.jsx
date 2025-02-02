import { Table, TableBody, TableCell, TableRow, Typography, withStyles } from '@material-ui/core';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { INFUSIONS } from '../../../utils/gw2-data';

const styles = (theme) => ({
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
});

const OutputInfusions = ({ classes, data }) => {
  const infusions = Object.keys(data).map((type) => ({
    ...INFUSIONS.find((entry) => entry.attribute === type),
    count: data[type],
  }));
  return (
    <>
      <Typography variant="h6">
        <Trans>Infusions</Trans>
      </Typography>
      <Table padding="none">
        <TableBody>
          {infusions.map((infu) => (
            <TableRow hover key={infu.attribute}>
              <TableCell>
                <Item id={infu.id} className={classes.gw2Item} />
              </TableCell>
              <TableCell>{infu.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default withStyles(styles)(OutputInfusions);
