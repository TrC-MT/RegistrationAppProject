import TuitionAmount from './tuitionAmount';
import NumClasses from './numClasses';

export default function SideStudentProfileInfo({render}){

    if(render == 'Student'){
        return(
            <>
                <div id="side-student-profile-info-container">
                    <TuitionAmount></TuitionAmount>
                    <NumClasses></NumClasses>
                </div>
            </>
        )
    }
    
}