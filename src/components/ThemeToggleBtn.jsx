import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme, setTheme}) => {
    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches;
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    }, [])

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div>
            <button>
                {theme === 'dark' ? (
                    <img onClick={() => setTheme('light')} src={assets.sun_icon} alt="Light Button" className='size-8 p-1.5 border border-gray-500 rounded-full cursor-pointer'/>
                ) : (
                    <img onClick={() => setTheme('dark')} src={assets.moon_icon} alt='Dark Button' className='size-8 p-1.5 border border-gray-500 rounded-full cursor-pointer'/>
                )}
            </button>
        </div>
    )
}

export default ThemeToggleBtn
