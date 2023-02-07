import { Routes, Route } from "react-router-dom";
import configs from 'configs';

import "./App.scss";
import BMlanding from "pages/BMblocks/BMlanding";
import BMgame from "pages/BMblocks/BMgame";
import BMgalaxy from "pages/BMblocks/BMgalaxy";
import BMmusic from "pages/BMblocks/BMmusic";
import BMcard from "pages/BMblocks/BMcard";
import BMmega from "pages/BMblocks/BMmega";
import BMjewel from "pages/BMblocks/BMjewel";
import BMlearn from "pages/BMblocks/BMlearn";
import AntverseMint from "pages/BMmints/AntverseMint";

function App() {
  return (
    <Routes>
      <Route path=`/${configs.BASE_URL}/` element={<BMlanding />} />
      <Route path=`/${configs.BASE_URL}/bmgame` element={<BMgame />} />
      <Route path=`/${configs.BASE_URL}/bmgalaxy` element={<BMgalaxy />} />
      <Route path=`/${configs.BASE_URL}/bmmusic` element={<BMmusic />} />
      <Route path=`/${configs.BASE_URL}/bmcard` element={<BMcard />} />
      <Route path=`/${configs.BASE_URL}/bmmega` element={<BMmega />} />
      <Route path=`/${configs.BASE_URL}/bmjewel` element={<BMjewel />} />
      <Route path=`/${configs.BASE_URL}/bmlearn` element={<BMlearn />} />
      <Route path=`/${configs.BASE_URL}/antversemint` element={<AntverseMint />} />
    </Routes>
  );
}

export default App;
