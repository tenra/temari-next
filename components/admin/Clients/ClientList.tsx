import React, { useState, useEffect } from 'react'
import { useClient } from '../../../hooks/useClient'
import { AuthSession } from '@supabase/supabase-js'
import Modal from '../../Modal'

export const ClientList : React.FC = () => {
    const {clients} = useClient()
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="bg-sky-500 py-2 px-2 my-2 mx-2">
                利用者の新規追加
            </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <p>モーダルの中身</p>
            </Modal>

            <div>クライアントリスト</div>
            {clients.map(({id, name}) => (
                <li key={id}>{id}:{name}</li>
            ))}
        </>
    )
}
