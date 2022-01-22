// App.js 는 영화를 보여주지 않고 ( 이전에는 영화를 보여주는 페이지였음 ) 
// rounter를 render하는 역할로 변경 ( rounter는 URL를 보고있는 component임 )
// MovieApp => rountes => URL 주소에 따라 1. Home.js를 render
//                                      2. Detail.js를 render

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function MovieApp() {
    return(
    <Router>
        <Switch> {/*  Switch : route ( URL )를 찾아서 -> 한번에 하나의 router를 render */}
            <Route path="/movie/:id">
                <Detail />
            </Route>
            <Route path="/">   {/*Home.js를 render */}
                <Home />
            </Route>
        </Switch> 
    </Router>
    );
}

export default MovieApp;