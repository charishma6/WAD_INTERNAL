function Login(){

    return (
        <div className='container w-30'>

            <h1 className="display-1 text-center">Login</h1>
            <form>
                <label className='form-label'>Username</label>
                <input type='text' className='form-control'></input>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control'></input>
              
            </form>
            <button d-flex mx-auto mt-4 btn btn-success>Login</button>
        </div>
    );
}


export default Login;