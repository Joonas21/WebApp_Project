import Code from "./Code"

const Codes = ({codes}) => {

    return (
        <div>
            <h1>Code snippets</h1>
            {codes.map((code) => (
            <Code key={code._id} code={code} />
            ))}
        </div>
    )
}

export default Codes