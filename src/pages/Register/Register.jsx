import { Link } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar/Navbar";


const Register = () => {
    const handleRegister =e=>{
        e.preventDefault();
        const email= e.target.email.value;
        const password =e.target.password.value;
        const name =e.target.name.value;
        const photo =e.target.photo.value;
        console.log(name,photo,email,password)
    }
    return (
        <div>
                <div>
            <Navbar></Navbar>
            <div className="hero mt-10">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Please Register</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={ handleRegister}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>New to this website? please <Link to='/login'>Login</Link> </p>
      </form>
    </div>
  </div>
</div>
            
        </div>
        </div>
    );
};

export default Register;