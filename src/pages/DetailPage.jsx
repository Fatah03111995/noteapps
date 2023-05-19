import { NoteCard } from '../components/NoteCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getNote } from '../utils/local-data';
export const DetailPage = () => {
  const [note, setNote] = useState();
  const { id } = useParams();

  useEffect(() => {
    getNote(id);
  });
  return <NoteCard />;
};
