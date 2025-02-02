import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Grid, TextField, withStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForcedSlot, getForcedSlots } from '../../../state/slices/forcedSlots';
import { getPriority } from '../../../state/slices/priorities';
import { GEAR_SLOTS, Affix } from '../../../utils/gw2-data';
import { firstUppercase } from '../../../utils/usefulFunctions';

const AFFIXES = Object.keys(Affix);

const styles = (theme) => ({
  textField: { marginTop: 0, marginBottom: 0 },
  nowrap: {
    display: 'inline',
    whiteSpace: 'nowrap',
  },
  helperText: {
    fontSize: 12,
  },
  text: {
    color: '#ddd !important',
  },
});

const ForcedSlots = ({ classes }) => {
  const dispatch = useDispatch();
  const forcedSlots = useSelector(getForcedSlots);
  const dualWielded = useSelector(getPriority('weaponType'));
  const { t } = useTranslation();

  let SLOTS = GEAR_SLOTS;
  if (dualWielded !== 'Dual wield') {
    SLOTS = GEAR_SLOTS.slice(0, 13);
  }

  const handleChange = (index) => (event, newInput) => {
    dispatch(changeForcedSlot({ index, value: newInput }));
  };

  const input2 = (name, index, offset) => {
    return (
      <Grid item xs={6} md={2} sm={4} key={name}>
        <Autocomplete
          options={AFFIXES}
          value={forcedSlots[index + offset]}
          id={name}
          clearOnEscape
          onChange={handleChange(index + offset)}
          renderOption={(option) => (
            <Item
              stat={option}
              type="Ring"
              disableLink
              text={
                // i18next-extract-mark-context-next-line {{affix}}
                t('affix', { context: option })
              }
              className={classes.text}
            />
          )}
          getOptionLabel={(option) =>
            // i18next-extract-mark-context-next-line {{affix}}
            t('affix', { context: option })
          }
          renderInput={(params) => (
            <TextField
              {...params}
              className={classes.textField}
              label={firstUppercase(name)}
              margin="dense"
            />
          )}
        />
      </Grid>
    );
  };
  return (
    // i18next-extract-mark-context-start {{slotName}}
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
      {SLOTS.slice(0, 6).map((slot, index) =>
        input2(t('slotName', { context: slot.name }), index, 0),
      )}
      {SLOTS.slice(6, 10).map((slot, index) =>
        input2(t('slotName', { context: slot.name }), index, 6),
      )}
      {SLOTS.slice(10).map((slot, index) =>
        input2(t('slotName', { context: slot.name }), index, 10),
      )}
    </Grid>
    // i18next-extract-mark-context-stop
  );
};
export default withStyles(styles)(ForcedSlots);
