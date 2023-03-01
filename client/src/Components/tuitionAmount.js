

export default function TuitionAmount({render}){


    var total_tuition = 50;
            //fetch the total tuition of the student from the server, set it to total_tuition

        return(
            <>
                <div id="tuition-amount-container" className="side-student-profile-info">
                    <strong>Tuition due: {total_tuition}</strong>
                </div>
            </>
        )

}