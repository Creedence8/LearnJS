/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var obj = {};
    hashtags.forEach(function(word, index) {
        obj[word.toLocaleLowerCase()]=true;
    })
    return Object.keys(obj).join(", ");

};
