import React, { useState, useEffect } from 'react'
import { useClient } from '../../../hooks/useClient'
import { AuthSession } from '@supabase/supabase-js'

export const ClientList : React.FC = () => {
    const {clients} = useClient()

    return (
        <>
            <div>クライアントリスト</div>
            {clients.map(({id, name}) => (
                <li key={id}>{id}:{name}</li>
            ))}
        </>
    )
}
