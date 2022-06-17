import React from 'react';
import clsx from 'clsx';
import { LeftMenu } from '../components/LeftMenu';
import { SideComments } from '../components/SideComments';

interface MainLayoutProps {
    hideComments?: boolean;
    hideMenu?: boolean;
    contentFullWidth?: boolean;
    children?: {};
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  hideComments,
  hideMenu,
  contentFullWidth
}) => {
  return (
    <div className='wrapper'>
        {!hideMenu &&
            <div className="leftSide">
                <LeftMenu/>
            </div>
        }
      <div className={clsx('content', { 'content--full': contentFullWidth })}>{children}</div>
      {!hideComments && (
        <div className="rightSide">
          <SideComments />
        </div>
      )}
    </div>
  );
};
