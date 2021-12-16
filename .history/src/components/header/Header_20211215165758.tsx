type headerText = {
    header: string
}

const Header = () => {
    const header: headerText = 'User List'
    return (
        <header>{header}</header>
    )
}

export default Header
