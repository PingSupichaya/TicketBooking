export default function Login({loginText="ADMIN LOG IN", isAdmin=true}){
    return(
        <div className="login">
            <p>{loginText}</p>
            <ul>
                <li>Username</li>
                <li><input type="text" placeholder="taenosaurhandsomeandcool" /></li>
                <li>Password</li>
                <li><input type="password" placeholder="●●●●●●●●●●●●●●●" /></li>
            </ul>
            <p1>{isAdmin ? '': 'Forgot your password?'}</p1>
        </div>
    );
}