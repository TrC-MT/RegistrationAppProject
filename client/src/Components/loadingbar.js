import '../Styles/ComponentStyles/loadingbarStyles.css'

export default function Loadingbar({render}){

    if(render == true) {
        console.log('rendering')
        return(
            <div className="progress-loadingbar">
                <div className="loadingbar" onClick={(e) => move(e.target)}>10%</div>
            </div>
        )
    }

    function move(target){
        console.log(target)
        var i = 0;
        if(i == 0){
            var elem = target
            var width = 10;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                  clearInterval(id);
                  i = 0;
                } else {
                  width++;
                  elem.style.width = width + "%";
                  elem.innerHTML = width + "%";
                }
            }
        }  
    }
    

}