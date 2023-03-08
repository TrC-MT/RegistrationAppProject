import '../../Styles/ComponentStyles/coursesTableStyles.css'

import CoursesTableTags from "./coursesTableTags"

export default function CoursesTable({pieces}){
    
    return(
        <>
            <div className='table-box'>
                <h4 id={pieces.ID + '-table-title'} className="table-title">{pieces.ID}</h4>
                <table id={pieces.ID + "-courses-table"}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Tuition</th>
                            <th>
                                <button>{pieces.button}</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <CoursesTableTags render={{courses: courses, filter: pieces.filter, num: pieces.num, sn: pieces.sn}}></CoursesTableTags>
                    </tbody>
                </table>
            </div>
        </>
    )
}

let courses = [
    {name: 'Web Development', description: 'One of the best classes possible. You should schedual it right away.', tuition: 1300},
    {name: 'Haunted Mansion Makeover', 
        description: 'Learn how to be the spookiest house on Halloween. Unless someone else in your neihborhood takes this class, then you would have to share.',
        tuition: 5324}, 
    {name: 'Water Skiing', description: 'Go to a large body of water, and ride on top of it.', tuition: 9876},
    {name: 'Unknown', 
        description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', 
        tuition: 0}, 
    {name: 'UnknownB', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
    {name: 'UnknownC', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
    {name: 'D', description: 'none', tuition: 5}, 
    {name: 'e', description: 'none', tuition: 5}, 
    {name: 'f', description: 'none', tuition: 5},
    {name: 'UnknownD', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
    {name: 'UnknownE', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
    {name: 'UnknownF', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
    {name: 'UnknownG', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
    {name: 'UnknownH', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 

]
