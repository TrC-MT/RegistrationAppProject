


export default function NumClasses({render}){

        var num_classes = 8;


        //get the num_classes from server
        fetch('/numberStuScheduledClasses', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            num_classes = data;
        })


        return(
            <div id="num-classes" className="side-student-profile-info">
                <strong>Number of scheduled classes: {num_classes}</strong>
            </div>
        )

}