import { useState } from 'react'
import '../Styles/ComponentStyles/loadingbarStyles.css'

export default function Loadingbar({render}){

    if(render == true) {
        move()
        return(
            <div className="progress-loadingbar">
                {/* <div className="loadingbar" onClick={(e) => move(e.target)}>10%</div> */}
                <span className='hide-load-bar'>LOADING...</span>
                <div className="loadingbar">0%</div>
            </div>
        )
    }

    // function move(target){
     function move(){
        console.log('moving')
        var i = 0;
        if(i == 0){
            var elem = document.getElementsByClassName('loadingbar')[0]
            var width = 0;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                  clearInterval(id);
                  i = 0;
                  document.getElementsByClassName('progress-loadingbar')[0].style.display = 'none'
                } else {
                  document.getElementsByClassName('progress-loadingbar')[0].style.display = 'block';
                  width++;
                  elem.style.width = width + "%";
                  elem.innerHTML = width + "%";
                }
            }
        }
    }
}