export const Footer = (): JSX.Element => {
    return <div>Reseaux sociaux</div>
}

type JeanJarrNavBarProps = {
    name: string,
}
export const JeanJarrNavBar = ({name}:JeanJarrNavBarProps): JSX.Element => {
    return (
        <div>Welcome to the Zeylda website dear {name} !</div>
    )
}