import { Box, Grid } from '@mui/material';
import { Social } from '../../../Social/Social';
import { FOOTER_LINKS } from '../../constants';
import styles from './FooterList.module.scss';

export const FooterLink = () => {
  return (
    <div className={styles.footerList}>
      <Box className={styles.boxList} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {FOOTER_LINKS.map((item) => {
            return (
              <Grid item xs={6} md={2.5}>
                <div key={item.id}>
                  <div>{item.title}</div>
                  <div>
                    {item.children.map((it) => {
                      return <div className={styles.page_list}>{it}</div>;
                    })}
                  </div>
                </div>
              </Grid>
            );
          })}
          <div className={styles.social}>
            <Social />
          </div>
        </Grid>
      </Box>
    </div>
  );
};
