function FormDataLogin() {

    const handleSubmit = (e)=> {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        
        console.log(formData.get("username"));
        console.log(formData.get("password"));

        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>FormDataLogin</h2>
            <input name = "username" placeholder="username"/>
            <input name = "password" type="password" placeholder="password"/>
            <input type="submit" value="LOGIN"/>
        </form>
    )
}

export default FormDataLogin;