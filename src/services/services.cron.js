import { DELAY_TIME_MILISECONDS } from "../constants";
import * as service from "../services/services.post";
let currentScheduledTask = null;

// Call to proxy for to get data
const processData = async () => {
    return await service.processPost();
};

/**
 * @param {callback} callback
 * schedule the next request with a periodict task
 */
const scheduleTask = async callback => {
    return setTimeout(async () => {
        await periodicTask(callback);
    }, DELAY_TIME_MILISECONDS);
};

/**
 * @param {callback} callback
 * Call to proxy, schedule the next request and after return the current data from view
 */
const periodicTask = async callback => {
    try {
        // Proccess data logic for update the posts
        const posts = await processData();
        // schedule Task again
        currentScheduledTask = scheduleTask(callback);
        callback(posts);
    } catch (error) {
        console.error(error.message, error);
    }
};

/**
 * @param {callback} callback
 * Make the first task
 */
export const initTask = async callback => {
    periodicTask(callback);
};

// destroy cron
export const endTask = () => clearTimeout(currentScheduledTask);


