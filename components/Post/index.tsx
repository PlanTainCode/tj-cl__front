import React from 'react';
import { IconButton, Paper, Typography } from '@material-ui/core';
import Image from 'next/image';
import { ModeCommentOutlined as CommentsIcon, 
  RepeatOutlined as RepostIcon, 
  BookmarkBorderOutlined as FavoriteIcon,
  ShareOutlined as ShareIcon
} from '@material-ui/icons';
import styles from './Post.module.scss';

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <a href="#">
          Кот прилёг отдохнуть в английском парке миниатюр — и стал героем шуток и фотожаб о
          «гигантском пушистом захватчике»
        </a>
      </Typography>
      <Typography className="mt-10 mb-15">
        Пока одни не могли соотнести размеры животного и окружения, другие начали создавать
        апокалиптические сюжеты с котом в главной роли.
      </Typography>
      <Image
        src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
        height={500}
        width={600}
      />
        <ul className={styles.actions}>
          <li>
            <IconButton>
              <CommentsIcon />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <RepostIcon />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </li>
        </ul>
    </Paper>
  );
};
