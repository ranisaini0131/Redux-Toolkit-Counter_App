import React from 'react'
import { useAddAccountsMutation, useDeleteAccountsMutation, useGetCounterQuery, useUpdateAccountsMutation } from '../api/adminSlice.js'

const Admin = () => {

    const { data, error, isLoading } = useGetCounterQuery()
    const [addAccounts, response] = useAddAccountsMutation();
    const [deletAccounts, deleteResponse] = useDeleteAccountsMutation();
    const [updateAccount]=useUpdateAccountsMutation();
    return (
      <>
      <h1>Admin</h1>
      {
                data && data.map(account => <p>{account.id} : {account.amount}
                    <button onClick={() => deletAccounts(account.id)}>Delete Account -</button>
                    
                    <button onClick={() => updateAccount({ id: account.id,amount: 222})}>Update Account</button>
                </p>)
            }
            <button onClick={() => addAccounts(data.length + 1, 5000)}>Add Account +</button>
            </>
  )
}

export default Admin