import {
  Box,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Boon, CommonEffect, Condition, Skill, Trait } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buffModifiers } from '../../../assets/modifierdata';
import {
  changeBuff,
  changeBuffAmount,
  getBuffAmounts,
  getBuffs,
} from '../../../state/slices/buffs';
import { firstUppercase } from '../../../utils/usefulFunctions';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';
import TraitAmount from '../traits/TraitAmount';

const styles = (theme) => ({
  boon: {
    fontSize: 18,
  },
  note: {
    fontSize: '1rem',
  },
  tinyNote: {
    fontWeight: 200,
  },
});

const Buffs = ({ classes }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const buffs = useSelector(getBuffs);
  const amounts = useSelector(getBuffAmounts);

  const handleChange = (buff) => (event) => {
    // change the value
    dispatch(changeBuff({ key: buff.id, value: event.target.checked }));
  };

  const handleAmountChange = (buff) => (event) => {
    dispatch(changeBuffAmount({ key: buff.id, value: event.target.value }));
  };

  // Dynamic component creation for buffs from a string
  const components = {
    Boon,
    Trait,
    Skill,
    CommonEffect,
    Condition,
  };

  return (
    <Grid container spacing={4}>
      {buffModifiers.map((section) => (
        <Grid key={section.section} item xs={12} sm={6} md={4}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              {
                // i18next-extract-mark-context-next-line {{buffSection}}
                t('buffSection', { context: section.section })
              }
            </FormLabel>
            <FormGroup>
              {section.items.map((buff) => {
                let Component;
                let name;

                switch (buff.type) {
                  case 'Text':
                    return (
                      <CheckboxComponent
                        key={buff.id}
                        value={buff.id}
                        checked={buffs[buff.id]}
                        label={
                          <>
                            <Typography className={classes.note}>
                              {
                                // i18next-extract-mark-context-next-line {{buffText}}
                                t('buffText', { context: buff.text })
                              }
                            </Typography>
                            <Typography variant="caption" className={classes.tinyNote}>
                              {buff.subText}
                            </Typography>
                          </>
                        }
                        onChange={handleChange(buff)}
                      />
                    );
                  case 'Boon':
                  case 'Condition':
                  case 'CommonEffect':
                    name = buff.id.toLowerCase();
                    name = firstUppercase(name);
                  // eslint-disable-next-line no-fallthrough
                  default:
                    Component = components[buff.type];
                }

                return (
                  <Box justifyContent="space-between" display="flex" key={buff.id}>
                    <Box display="flex">
                      <CheckboxComponent
                        value={buff.id}
                        checked={buffs[buff.id]}
                        label={
                          <Component
                            id={buff.gw2id}
                            name={name}
                            disableLink
                            className={classes.boon}
                          />
                        }
                        onChange={handleChange(buff)}
                      />
                    </Box>
                    {['Might', 'Vulnerability'].includes(name) && (
                      <Box display="flex">
                        <TraitAmount
                          amountData={{ label: 'x', default: 25, quantityEntered: 1 }}
                          handleAmountChange={handleAmountChange(buff)}
                          value={amounts[buff.id]}
                          disabled={!buffs[buff.id]}
                        />
                      </Box>
                    )}
                  </Box>
                );
              })}
            </FormGroup>
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(Buffs);
