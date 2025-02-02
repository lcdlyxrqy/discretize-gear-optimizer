import { InputAdornment, TextField } from '@material-ui/core';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { parseAmount } from '../../../state/optimizer/optimizerCore';

const TraitAmount = ({ amountData, handleAmountChange, value = '', disabled }) => {
  // const parsedValue = Number(value);
  // const isError = Number.isNaN(parsedValue) || parsedValue < 0;
  const { t } = useTranslation();

  const { error } = parseAmount(value);

  return (
    <TextField
      error={error}
      value={value}
      placeholder={String(amountData.default)}
      InputProps={{
        endAdornment: (
          <InputAdornment disablePointerEvents position="end">
            {
              // i18next-extract-mark-context-next-line {{amountLabel}}
              t('amountLabel', { context: amountData.label })
            }
          </InputAdornment>
        ),
        inputProps: { style: { maxWidth: '32px' } },
      }}
      onChange={handleAmountChange}
      disabled={disabled}
    />
  );
};

export default TraitAmount;
