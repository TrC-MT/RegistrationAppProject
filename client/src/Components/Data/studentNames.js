

export default function StudentNames({names}){

    var options = [];
    for(let i = 0; i < names.length; i++){
        options[i] = <option value={names[i]}>{names[i]}</option>
    }
    return(
        options
    )
}