import { dataFetcher } from '../util/dataFetcher';
import { API_DOMAIN, TOP_STORIES, STORY_URL } from '../util/config/env.json';


const topStoriesApi = `${API_DOMAIN}${TOP_STORIES}`;
const singleStoryApi = `${API_DOMAIN}${STORY_URL}`;

/**
 * @method getToStoriesID
 * @summary fetching array data for all the top stories
 * @return {Promise} array of stories
 */
export const getToStoriesID = async () => dataFetcher(topStoriesApi).then(({data}) => data);


/**
 * @method getSingleStory
 * @summary fetching data for a particular story by its ID's
 * @param {Number} storyId - ID of each story.
 * @return {Promise} single object containing story data
 */
export const getSingleStory = async (storyId) => dataFetcher(`${singleStoryApi + storyId}.json`).then(({data}) => data);