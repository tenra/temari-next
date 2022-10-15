import { AuthSession } from '@supabase/supabase-js'
import Head from 'next/head'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Menu } from './Menu'

export interface Props {
  session: AuthSession | null
}

export function Layout({ session, children }: PropsWithChildren<Props>) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favi.ico" />
        <title>temari-admin</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="p-4 border-b flex justify-between">
          <h1>
            <Link href="/admin">
              <a className="">temari-admin</a>
            </Link>
          </h1>
          <Menu session={session} />
        </header>
        <main className="flex-1 p-4">{children}</main>
        <footer className="bg-sky-900 text-white p-4">
          <ul className="flex">
            <li className="hover:underline underline-offset-8 px-4">
              <Link href="/">
                <a>temari_top</a>
              </Link>
            </li>
            <li className="hover:underline underline-offset-8 px-4">
              <Link href="/admin">
                <a>admin_top</a>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}
