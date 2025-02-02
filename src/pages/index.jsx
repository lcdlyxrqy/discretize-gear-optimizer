import { Link, Typography, withStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import MuiAlert from '@material-ui/lab/Alert';
import { graphql } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import * as React from 'react';
import LanguageSelection from '../components/baseComponents/LanguageSelection';
import GearOptimizer from '../components/GearOptimizer';
import withLayout from '../hocs/withLayout';

const styles = (theme) => ({
  headline: {
    paddingBottom: theme.spacing(2),
  },
});

// markup
const IndexPage = ({ classes }) => {
  return (
    <>
      <LanguageSelection />
      <MuiAlert elevation={6} variant="filled" severity="warning">
        <Trans>
          The gear optimizer is currently in beta! Templates are not final and phantasm and
          lifesteal damage is inaccurate. Please report potential issues to us in
        </Trans>{' '}
        <Link href="https://discord.gg/Qdt7nFY" color="textPrimary">
          Discord
        </Link>{' '}
        <Trans>or</Trans>{' '}
        <Link
          href="https://github.com/discretize/discretize-gear-optimizer/tree/staging"
          color="textPrimary"
        >
          <GitHubIcon fontSize="small" /> Github
        </Link>
        .
      </MuiAlert>
      <Typography variant="h2" className={classes.headline}>
        <Trans>Gear Optimizer</Trans>
      </Typography>
      <GearOptimizer />
    </>
  );
};
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default withLayout({ disableContainer: false })(withStyles(styles)(IndexPage));
