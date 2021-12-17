import Code from "./Code"

const Codes = ({codes}) => {

   // console.log(codes._id + " Inside codes.js")

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