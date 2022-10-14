import { AuthSession } from '@supabase/supabase-js'
import Link from 'next/link'
import Router from 'next/router'
import { supabase } from '../../libs/supabaseClient'
import Theme from '../Theme'

export interface Props {
    session: AuthSession | null
}

export function Menu({ session }: Props) {
    return (
        <ul className="flex space-x-4">
            {session ? (
                <>
                    <li>
                        <Link href="/admin/profile">
                            <a className="btn-link">MyProfile({session.user!.email})</a>
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
                            SignOut
                        </button>
                    </li>
                </>
            ) : (
                <>
                    {/*<li>
                        <Link href="/admin/signin">
                            <a className="btn-link">SignIn</a>
                        </Link>
                    </li>*/}
                </>
            )}
            <li><Theme /></li>
        </ul>
    )
}
