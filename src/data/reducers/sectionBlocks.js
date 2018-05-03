import {
    GET_SECTION_BLOCKS,
    STARTED_FETCHING_SECTION_BLOCKS,
    FINISHED_FETCHING_SECTION_BLOCKS,
    
  } from '../constants/ActionType';
  
  const sectionBlocks = (state = { blockUrls: [], startedFetching: false, finishedFetching: false }, action) => {
    switch (action.type) {
      case GET_SECTION_BLOCKS:
        return {
          ...state,
          blockUrls: action.blockUrls,
        };
      case STARTED_FETCHING_SECTION_BLOCKS:
        return {
          ...state,
          startedFetching: true,
          finishedFetching: false,
        };
      case FINISHED_FETCHING_SECTION_BLOCKS:
        return {
          ...state,
          startedFetching: false,
          finishedFetching: true,
        };
      default:
        return state;
    }
  };
  
  export default sectionBlocks;
  