function LoginForm({ loginHandler },{post}) {

    return(

        <>
        <form typeof="type" onSubmit={loginHandler} >
            <label name="username">User Name</label>
            <input type="text" name="username" id="username"/>
            <label name="password">Password</label>
            <input type="password" name="password" id="password"/>
            <button type="submit"  id="btn" onClick={post}>SIGN IN</button>
        </form>
        {
            
        }
        </>
    )
    
}
export default LoginForm;