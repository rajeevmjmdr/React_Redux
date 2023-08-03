import "./Admin.css";
import {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} from "../../api/AdminApi";
const Admin = () => {
  const { data, error, isLoading } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();
  return (
    <div className="position">
      <h1 className="text-center">ADMIN</h1>
      {data &&
        data.map((account) => (
          <div className="d-flex align-items-center justify-content-center mt-2">
            <div>
              {account.id} : {account.amount}
              <span className="value"></span>
              <button
                className="btn btn-primary btn-sm"
                aria-label="Delete"
                onClick={() => deleteAccount(account.id)}
              >
                Delete
              </button>
              <span className="value"></span>
              <button
                className="btn btn-primary btn-sm"
                aria-label="Update"
                onClick={() => updateAccount({ id: account.id, amount: 100 })}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary btn-sm"
          aria-label="Add Account"
          onClick={() => addAccount({ id: data.length + 1, amount: 600 })}
        >
          + Add Account
        </button>
      </div>
      <hr className="solid"></hr>
    </div>
  );
};
export default Admin;
