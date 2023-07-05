import React,{useEffect,useState} from 'react';
import Header from './Header';
import './Feed.css';
import Posts from './Posts'
import {database} from '../firebase';
import {useAuth} from '../Context/AuthContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import UploadFile from './UploadFile'
export default function Feed() {
    const [userData,setUserData]=useState(null);
    const {currentUser} = useAuth(); 
    useEffect(()=> {
        const unsub= database.users.doc(currentUser.uid).onSnapshot((doc) => {
          setUserData(doc.data());
    })
    return ()=>{unsub()};   
      }, [currentUser])
    return (
        <>
        {userData==null?<CircularProgress className="circle"/>: <>
        <Header userData={userData}/>
        <div className='portion' style={{height:'9.5vh'}}></div>      
        <div className='feed-container'>
            <div className='center'>
            <UploadFile userData={userData} />
                <Posts userData={userData}/>
            </div> 
        </div>
        </>}
        </>
    )
}
