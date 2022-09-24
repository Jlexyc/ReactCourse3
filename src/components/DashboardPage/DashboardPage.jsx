import { Outlet, useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';
import { TodoElementList } from "../TodoElementsList/TodoElementList";

import { Button } from '@mui/material';

import './DashboardPage.css'

const styles = {
  button: {
    margin: '0px 10px 0px 10px',
  }
}
export const DashboardPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const onDescriptionFilterClick = useCallback(() => {
    setSearchParams({ sort: 'description'})
  }, [setSearchParams]);

  const onPriorityFilterClick = useCallback(() => {
    setSearchParams({ sort: 'priority'})
  }, [setSearchParams]);

  return (
    <div className='dashboard'>
      <div>
          <Button sx={styles.button} onClick={onDescriptionFilterClick} size="small" variant='contained'>Filter by description</Button>
          <Button sx={styles.button} onClick={onPriorityFilterClick} size="small" variant='contained'>Filter by priority</Button>
      </div>
      <div className='dashboardContent'>
        <TodoElementList />
        <Outlet />
      </div>
    </div>
  )
}