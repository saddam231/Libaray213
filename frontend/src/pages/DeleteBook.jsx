
import  React, {useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useParams, useNavigate} from 'react-router-dom';
import BackButton from '../components/BackButton';
import {useSnackbar} from 'notistack';

 const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();
  const handleDeleteBooks  = () => {
    setLoading(true);
    axios
     .delete(`http://localhost:5555/books/${id}`)
     .then(() => {
        navigate('/');
        setLoading(false);
        enqueueSnackbar("Books Delete successfully", {variant:'success'});
      })
     .catch((error) => {
        //console.log(error);
        enqueueSnackbar("Erroe", {variant:'error'});
        setLoading(false);
      })
  }
  return (
    <div>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className ='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
      <h3 className='text-2xl'>Are You sure you want to delete this book?</h3>
        <button className='p-4 bg-red-600 text-white' onClick={handleDeleteBooks}>Yes, Delete</button>
      </div>
    </div>
  )
}

export default DeleteBook;
