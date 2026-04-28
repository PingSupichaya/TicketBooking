

export default function Login({loginText="ADMIN LOG IN", isAdmin=true}){
    return(
        <div className="login-container">
            <div className="login">
                <p>{loginText}</p>
                <div style={{ fontSize: "0.7rem" }}>
                    <label>Username</label>
                </div>
                <div className="login-element">
                    <input type="text" placeholder="taenosaurhandsomeandcool" />
                </div>
                <div style={{ fontSize: "0.7rem" }}>
                    <label>Password</label>
                </div>
                <div className="login-element">
                    <input type="password" placeholder="●●●●●●●●●●●●●●●" />
                </div>
                <div style={{ fontSize: "0.7rem" }}>
                    <a href="https://docs.google.com/document/d/14MAH9JZzoUUzkbhYF4LNNQLGgW1WwZwG8gJlCJYJAug/edit?tab=t.0">{isAdmin ? '': 'Forgot your password?'}</a>
                </div>
                <button>{isAdmin ? 'LOG IN' : 'SIGN IN'}</button>
                <div style={{ textAlign: "center", marginTop: "15px" }}>
                    <a href="https://docs.google.com/document/d/14MAH9JZzoUUzkbhYF4LNNQLGgW1WwZwG8gJlCJYJAug/edit?tab=t.0">{isAdmin ? '': 'Create new account'}</a>
                </div>
            </div>
        </div>
    );
}