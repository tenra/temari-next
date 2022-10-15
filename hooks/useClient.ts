import { AuthSession } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { definitions } from '../types/supabase'
import { supabase } from '../libs/supabaseClient'

export const useClient = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any | null>(null)

    useEffect(() => {
        fetchClients()
    }, [])

    const fetchClients = async () => {
        const datas : any = await supabase.from('clients').select('*');
        setClients(datas.body)
    }

    return {loading, error, clients, fetchClients };
}
