import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import store from '../utils/store';
import { cacheResults } from '../utils/searchSlice';

/**
 * Concepts
 * Debouncing
 * 
 */

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    // const dispatch = useDispatch();
    // cacheResults
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    useEffect(() => {

        console.log('***********************');
        console.log(searchQuery)
        console.log(searchCache)
        console.log('***********************');
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            }
            else {
                getSearchSuggestions()
            }
        }, 200);

        // when useEffect will call again, first it will call the return statement,
        // then call the code inside useEffect,
        // its called debouncing
        return () => {
            clearTimeout(timer)
        }
        // make an API call after each key express

        // if the diff between 2 api calls < 200ms
        // decline the api call
    }, [searchQuery]);
    /**
     * key-i
     * -render the component
     * -useEffect()
     * - start timer to make API call after 200ms
     * 
     * 
     * key - ip
     * - destroy the component (useEffect return method)
     * - re-render the component
     * -useEffect()
     * - start timer => make api calls after 200ms
     */
    const getSearchSuggestions = async () => {
        console.log('API CALL: ', searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        console.log(json[1])
        dispatch(cacheResults( { [searchQuery]: json[1]  }))
    }

    return (
        <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img
                    className="h-12 my-4 cursor-pointer"
                    alt="menu"
                    onClick={() => toggleMenuHandler()}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
                />
                <a href='/'>
                    <img
                        className='h-20 mx-1'
                        alt="logo"
                        src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" />
                </a>
            </div>

            <div className='col-span-10'>
                <div>
                    <input
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        className='w-1/2 pl-100 px-2 text my-7 border border-gray-400 rounded-l-full' type="text" />
                    <button className='border border-gray-400 rounded-r-full px-3 bg-gray-100'>🔍</button>
                </div>
                {showSuggestions && <div className='fixed px-2 py-0 bg-white w-[38rem] rounded-lg shadow-lg border border-gray-50'>
                    <ul>
                        {suggestions.map(s => <li key={s} className="py-2 hover:bg-gray-100">{s}</li>)}
                    </ul>
                </div>}
            </div>

            <div className='col-span-1'>
                <img
                    className='h-8 my-6'
                    alt="user"
                    src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" />
            </div>
        </div>
    )
}

export default Head