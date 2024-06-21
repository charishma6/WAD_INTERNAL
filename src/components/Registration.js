function Register(){

    return (
        <div className='container w-30'>

            <h1 className="display-1 text-center">SignUp</h1>
            <form>
                <label className='form-label'>FirstName</label>
                <input type='text' className='form-control'></input>
                <label className='form-label'>LastName</label>
                <input type='text' className='form-control'></input>
                <label className='form-label'>Username</label>
                <input type='text' className='form-control'></input>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control'></input>
                <label className='form-label'>Address</label>
                <input type='text' className='form-control'></input>
                <label className='form-label'>Phone number</label>
                <input type='number' className='form-control'></input>
                <label className='form-label'>Email</label>
                <input type='email' className='form-control'></input>
                <label className='form-label'>Occupation</label>
                <input type='text' className='form-control'></input>
                <br></br>
                <select>
                <option value='Gender'>Gender</option>
                <option value="Gender">Male</option>
                <option value="Gender">Female</option>
                </select>
                <br></br>
                <label className='form-label'>Age</label>
                <input type='number' className='form-control'></input>
                <label className='form-label'>Other email</label>
                <input type='email' className='form-control'></input>
                <label className='form-label'>other mobile number</label>
                <input type='text' className='form-control'></input>
                <label className='form-label'>date of birth</label>
                <input type='date' className='form-control'></input>

               
            </form>
            <button btn btn-success>SignUp</button>
        </div>
    );
}


export default Register;