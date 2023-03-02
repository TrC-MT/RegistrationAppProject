


export default function NumClasses({render}){

        //get the num_classes from server

        var num_classes = 8;

        return(
            <div id="num-classes" className="side-student-profile-info">
                <strong>Number of schedualed classes: {num_classes}</strong>
            </div>
        )

}