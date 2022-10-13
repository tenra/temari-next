import { AuthSession } from '@supabase/supabase-js'
import Link from 'next/link'
import Router from 'next/router'
import { supabase } from '../../libs/supabaseClient'

export interface Props {
    session: AuthSession | null
}

export function Menu({ session }: Props) {
    return (
        <ul className="flex space-x-4">
            {session ? (
                <>
                    <li>
                        <Link href="/profile">
                        <a className="btn-link">My profile</a>
                        </Link>
                    </li>
                    <li>
                        <button
                            className="btn-link"
                            onClick={() => {
                                supabase.auth.signOut()
                                Router.push('/admin')
                            }}
                        >
                            Sign out
                        </button>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link href="/admin/signin">
                            <a className="btn-link">Sign in</a>
                        </Link>
                    </li>
                </>
            )}
        </ul>
    )
}
