import { Layout } from '../../components/admin/AdminLayout'
import { ClientList } from '../../components/admin/Clients/ClientList'
import { SigninForm } from '../../components/admin/SigninForm'
import { useSession } from '../../hooks/useSession'

export default function Home() {
  const session = useSession()

  if (session) {
    return (
      <Layout session={session}>
        Welcome!
        <ClientList />
      </Layout>
    )
  } else {
    return (
      <Layout session={session}>
          <SigninForm />
      </Layout>
    )
  }
}
