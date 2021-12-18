

const Comment = (code) => {

    const list = code.comment

    return (
        <div>
            <ol>
            {list.map((item) => <li key={item._id}>
               <p> {item.comment} </p> 
            </li>)}
            </ol>
        </div>
    )
}
export default Comment