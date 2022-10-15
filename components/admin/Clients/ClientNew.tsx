import React, { useState, useEffect } from 'react'
import { useClient } from '../../../hooks/useClient'
import { supabase } from '../../../libs/supabaseClient'
import { AuthSession } from '@supabase/supabase-js'
import Modal from '../../Modal'

export const ClientNew : React.FC = () => {
    const [createing, setCreateing] = useState(false)
    const [name, setName] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { loading, error } = useClient()

    async function createClient({
        name,
    }: {
        name: string
    }) {
        try {
            setCreateing(true)
            //const user = supabase.auth.user()!

            const creates = {
                name,
            }
            console.log(`create new Client`);

            const { error } = await supabase.from('clients').upsert(creates, {
                returning: 'minimal', // Don't return the value after inserting
            })

            if (error) {
                throw error
            }
        } catch (error: any) {
            alert(error.message)
        } finally {
            setCreateing(false)
        }
    }

    if (loading) {
        return <p>Loading…</p>
    }

    if (error) {
        return <p>An error occured when fetching your profile information.</p>
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="bg-sky-500 py-2 px-2 my-2 mx-2">
                利用者の新規追加
            </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <form className="flex flex-col space-y-4">
                    <div className="form-group">
                        <label className="label" htmlFor="username">
                        Name
                        </label>
                        <input
                        className="field"
                        disabled={createing}
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                        className="btn"
                        onClick={() => createClient({ name })}
                        disabled={createing}
                        >
                        {createing ? 'Createing…' : 'Create'}
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    )
}
