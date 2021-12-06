function privateLinks(props) {
    let logout = props.logout;
    return(
        <>
            <span className="toppageLink2" onClick={logout}>Logout</span>
        </>
    )
}

export default privateLinks;