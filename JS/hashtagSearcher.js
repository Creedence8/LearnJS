/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    return  tweet.split(" ")
            .filter(function (word, index) {
                return word.startsWith("#");
            })
            .map(function (word, index) {
                return word.slice(1)
            });

};
