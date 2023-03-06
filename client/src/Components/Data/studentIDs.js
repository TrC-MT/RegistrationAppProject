

export default function StudentIDs({render}){
    let options = [];
    for(let i = 0; i < render.student_IDs.length; i++){
        options[i] = <option value={render.student_IDs[i]}>{render.student_IDs[i]}</option>
    }
    const result = options.filter(option =>
        option.props.value.toString().includes(`${render.filter}`)
    )
    return result
}
