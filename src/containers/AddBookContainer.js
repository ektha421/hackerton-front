import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookActions } from '../_actions';
import AddBook from '../components/AddBook';
const AddBookContainer = () => {
        const [inputs, setInputs] = useState({ name: '', content: '', author: '', publisher: '' });
        const [submitted, setSubmitted] = useState(false);
        const { name, content, author, publisher } = inputs;
        const { thumbnail } = useSelector(state => state.book);

    
    // const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();


    
    // reset login status
    useEffect(() => {
        // dispatch(userActions.logout());
    }, [dispatch]);

    const onChange = (e) => {
        const { name, value } = e.target;
        console.log(name,value);
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const onChangeFile = (e)=>{
        const { files } = e.target;
        if(files.length > 0){
            dispatch(bookActions.uploadThumnail(files[0]));
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        let urlencoded = new URLSearchParams();
        urlencoded.append("name", name);
        urlencoded.append("content", content);
        urlencoded.append("thumbnail", thumbnail);
        urlencoded.append("author", author);
        urlencoded.append("publisher",publisher);
        
        console.log('submit',urlencoded);
        if (name && content && thumbnail && author && publisher) {
            dispatch(bookActions.addBook(urlencoded));
        }
    }

    return (
        <AddBook
            name={name} 
            content={content}
            thumbnail={thumbnail}
            author={author} 
            publisher={publisher}
            onChange={onChange}
            onChangeFile={onChangeFile}
            onSubmit={onSubmit}
        />
    );
};

export default AddBookContainer;
