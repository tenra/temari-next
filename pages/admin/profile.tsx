import { Layout } from '../../components/admin/AdminLayout'
import { ProfileForm } from '../../components/admin/ProfileForm'
import { useSession } from '../../hooks/useSession'

export default function ProfilePage() {
    const session = useSession()

    if (!session) return null

    return (
        <Layout session={session}>
            <ProfileForm session={session} />
        </Layout>
    )
}
