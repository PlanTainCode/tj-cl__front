import React from 'react';
import Link from 'next/link';
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
} from '@material-ui/icons';

import styles from './Header.module.scss';
import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
          <svg className="mr-20" width="30" height="35" viewBox="0 0 267 302" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
          <path d="M70 181H125V245.5L70 301V181Z" fill="black"/>
          <path d="M153.362 170.045L212.289 168.825L258.932 300.842L202.404 302.013L153.362 170.045Z" fill="black"/>
          <rect y="301" width="72" height="70" transform="rotate(-90 0 301)" fill="#E8A427"/>
          <path d="M70 301L56 229L70 229L70 301Z" fill="#C58C21"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M167.5 1.00001L70 1.00001L70 181L265 181L265 91L265 1.00001L167.5 1.00001ZM203 61L130 61L130 121L203 121L203 61Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect width="264.609" height="300.953" fill="white" transform="translate(1.58582) rotate(0.227153)"/>
          </clipPath>
          </defs>
          </svg>
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Button variant="contained" className={styles.penButton}>
          Новая запись
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <ArrowBottom />
          </a>
        </Link>
      </div>
    </Paper>
  );
};
