import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());

    }, []);
    return (
        <div className='flex flex-col'>
            <div>
                <iframe width="1150" height="530" src={"https://www.youtube.com/embed/" + videoId} title="@ashishsolanki_1 &amp; @pannugurleen HILARIOUSLY ROAST Wild Wild Punjab Cast🔥|Varun,Sunny,Manjot,Ishita" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <CommentsContainer />
        </div>
    )
}

export default WatchPage