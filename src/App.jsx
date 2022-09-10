import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { ElementList } from './ElementList';
import './App.css';

const initialData = [
  {
    id: '1',
    title: 'title 1',
    subtitle: 'subtitle 1',
  },
  {
    id: '2',
    title: 'title 2',
    subtitle: 'subtitle 2'
  },
  {
    id: '3',
    title: 'title 3',
    subtitle: 'subtitle 3'
  },
  {
    id: '4',
    title: 'title 4',
    subtitle: 'subtitle 4'
  },
  {
    id: '5',
    title: 'title 5',
    subtitle: 'subtitle 5'
  },
]

const App = () => {
  const [data, setData] = useState(initialData);

  const onDelete = useCallback((id) => {
    console.log('Remove: ', id)
    setData(data.filter(e => e.id !== id));
  }, [data])

  // useEffect(() => {
  //   console.log('EFFECT CALLED: ', text)
  //   return () => {
  //     console.log('BEFORE EFFECT IS CHANGED: ', text)
  //   }
  // }, [])
  
  // const onClick = useCallback(() => {
  //   setText(textProp + ' La LA la ' + something)
  // }, [textProp, something])

  return (
    <ElementList data={data} onDeleteElement={onDelete}/>
  );
}

export default App;
