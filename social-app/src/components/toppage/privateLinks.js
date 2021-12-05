function privateLinks(props) {
    let logout = props.logout;
    return(
        <>
            <span className="toppageLink1" onClick={logout}>Logout</span>
        </>
    )
}