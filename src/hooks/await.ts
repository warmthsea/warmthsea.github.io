/**
 * await time
 */
export const useAwait = (times: number): Promise<void> => {
    let timers: NodeJS.Timeout;
    return new Promise((resolve, reject) => {
        timers = setTimeout(() => {
            timers && clearTimeout(timers);
            resolve();
        }, times);
    });
};