import { Layout } from '../../components/admin/AdminLayout'
import { useSession } from '../../hooks/useSession'

export default function Home() {
  const session = useSession()

  return <Layout session={session}>Welcome!</Layout>
}
