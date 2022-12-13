import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/admin/dashboard')
    
  }
  return (
    <main className="grid lg:grid-cols-1 place-items-center lg:my-36">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="font-normal text-sm">Name</label>
          <br />
          <input
          value={name}
          onChange = {e => setName(e.target.value)}
            type="text"
            className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
            required
          />
        </div>

        <div className="mb-3">
          <label className="font-normal text-sm">Password</label>
          <br />
          <input
          value={password}
          onChange = {e => setPassword(e.target.value)}
            type="password"
            className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
            required
          />
        </div>

        
        <button
          type="submit"
          className="btn btn-warning  w-[100%] h-[39px] rounded-md mt-5 justify-center"
        >
          <span className="text-base text-white">Sign in</span>
        </button>
       

        <Link to={'/'}>
        <button
          className="btn btn-error w-[100%] h-[39px] rounded-md mt-5 justify-center"
        >
          <span className="text-base text-white">Back</span>
        </button>
        </Link>
      </form>
    </main>
  );
};

export default AdminLogin;
