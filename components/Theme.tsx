import React, { useState, useEffect, VFC } from 'react'
import { useTheme } from 'next-themes'
import { SunLight, HalfMoon } from 'iconoir-react'

export const Theme: VFC = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => setMounted(true), [])

    return (
        <>
            <button
                aria-label="DarkModeToggle"
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative top-1"
            >
                {mounted && <>{theme === 'dark' ? <SunLight className="stroke-2" /> : <HalfMoon className="stroke-2" />}</>}
            </button>
        </>
    )
}
export default Theme
