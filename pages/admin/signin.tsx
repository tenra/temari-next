import Router from 'next/router'
import { useEffect } from 'react'
import { Layout } from '../../components/admin/AdminLayout'
import { SigninForm } from '../../components/admin/SigninForm'
import { useSession } from '../../hooks/useSession'

export default function SigninPage() {
    const session = useSession()

    useEffect(() => {
        if (session) {
            Router.push('/admin')
        }
    })

    if (session) return null

    return (
        <Layout session={session}>
            <SigninForm />
        </Layout>
    )
}
