import { Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import { useDispatch } from 'react-redux';
import { changeSelectedCharacter } from '../../../state/controlsSlice';

const ResultTableRow = ({ character, selected, mostCommonAffix }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <TableRow
      selected={selected}
      style={selected ? { backgroundColor: 'rgba(0, 204, 204, 0.2)' } : null}
      onClick={(e) => dispatch(changeSelectedCharacter(character))}
      hover
    >
      <TableCell scope="row">
        {character.attributes[character.settings.rankby].toFixed(2)}
      </TableCell>
      {character.gear.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <TableCell align="center" key={element + index} padding="none">
          <Typography
            style={
              mostCommonAffix && mostCommonAffix !== element
                ? { fontWeight: 300, fontSize: '1rem', color: '#00cccc' }
                : { fontWeight: 300, fontSize: '1rem' }
            }
          >
            {
              // i18next-extract-mark-context-next-line {{affix}}
              t('affix', { context: element }).slice(0, language === 'zh' ? 2 : 4)
            }
          </Typography>
        </TableCell>
      ))}
      {character.infusions
        ? Object.values(character.infusions).map((element, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableCell align="center" key={`infu${index}`} padding="none">
              {element}
            </TableCell>
          ))
        : null}
    </TableRow>
  );
};

export default React.memo(ResultTableRow);
