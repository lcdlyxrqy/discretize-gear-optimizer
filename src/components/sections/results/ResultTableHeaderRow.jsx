import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { useSelector } from 'react-redux';
import { getInfusions } from '../../../state/slices/infusions';
import { getPriority } from '../../../state/slices/priorities';
import { Slots } from '../../../utils/gw2-data';

const ResultTableHeaderRow = ({ classes }) => {
  const wield = useSelector(getPriority('weaponType'));
  const infusions = useSelector(getInfusions);
  const { t } = useTranslation();

  return (
    <TableRow>
      <TableCell className={classes.tablehead}>
        <Trans>Damage</Trans>
      </TableCell>
      {Slots[wield].map((slot) => (
        <TableCell className={classes.tablehead} key={slot.name} align="center" padding="none">
          {
            // i18next-extract-mark-context-next-line {{slotShort}}
            t('slotShort', { context: slot.short })
          }
        </TableCell>
      ))}
      {infusions.primaryInfusion ? (
        <TableCell
          className={classes.tablehead}
          key="primaryInfusion"
          align="center"
          padding="none"
        >
          <Item id={infusions.primaryInfusion} disableText disableLink />
        </TableCell>
      ) : null}
      {infusions.secondaryInfusion ? (
        <TableCell
          className={classes.tablehead}
          key="secondaryInfusion"
          align="center"
          padding="none"
        >
          <Item id={infusions.secondaryInfusion} disableText disableLink />
        </TableCell>
      ) : null}
    </TableRow>
  );
};

export default React.memo(ResultTableHeaderRow);
