function Contact(){

    return (
        <div className='container w-30'>

            <h1 classname="display-1 text-center">Contact Us</h1>
            <form>
                <label className='form-label'>Username</label>
                <input type='text' className='form-control'></input>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control'></input>
                <button d-flex mx-auto mt-4 btn btn-success>Login</button>
            </form>
        </div>
    );
}


export default Contact;