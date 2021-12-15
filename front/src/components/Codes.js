import Code from "./Code"

const Codes = ({codes}) => {
    return (
        <div>
            <h1>Codes</h1>
            {codes.map((code) => (
            <Code key={code.id} code={code} />
            ))}
        </div>
    )
}

export default Codes