import Home from './routes/Home.html';
import PreviousConsults from './routes/PreviousConsults.html';
import PersonDetails from './routes/PersonDetails.html';

const routes = {
  '/': Home,
  '/PreviousConsults': PreviousConsults,
  '/PersonDetails/': PersonDetails,
  '/PersonDetails/:id': PersonDetails,
};

export default routes;
