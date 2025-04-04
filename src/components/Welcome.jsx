const Welcome = ({generatePost})=>{
    return <center className="welcomeMsg">
        <h1>Welcome to our Page</h1>
        <button type="button" onClick={generatePost} className="btn btn-primary">Get Random Post</button>
    </center>
}
export default Welcome;