import React, { useState, useEffect } from 'react'
import { useClient } from '../../../hooks/useClient'
import { ClientNew } from './ClientNew'

export const ClientList : React.FC = () => {
    const {clients} = useClient()

    return (
        <>
            <ClientNew />
            <div>クライアントリスト</div>
            {clients.map(({id, name}) => (
                <li key={id}>{id}:{name}</li>
            ))}
        </>
    )
}
