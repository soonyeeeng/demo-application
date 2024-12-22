import { combineEpics } from 'redux-observable';
import { suggestionsEpic, suggestionsDetailEpic } from './suggestionsEpics';

// Combine the epics
const rootEpic = combineEpics(
  suggestionsEpic,        
  suggestionsDetailEpic   
);

export default rootEpic;
