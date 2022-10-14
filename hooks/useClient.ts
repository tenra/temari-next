import { AuthSession } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { definitions } from '../types/supabase'
import { supabase } from '../libs/supabaseClient'

export const useClient = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchClients()
    }, [])

    const fetchClients = async () => {
        const datas : any = await supabase.from('clients').select('*');
        setClients(datas.body)
    }

    return {clients, fetchClients };
}
