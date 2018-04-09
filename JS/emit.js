module.exports = {

    listeners: {},

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (module.exports.listeners[event]==undefined) {
            module.exports.listeners[event]=[];
        }
        module.exports.listeners[event].push([subscriber, handler]);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        module.exports.listeners[event].forEach((item, index)=>{
            if (item[0]===subscriber) {item[0]=undefined;}
        }, this )
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
         module.exports.listeners[event].forEach((item, index)=>{
            if(item[0]!==undefined) {item[1].call(item[0]);}
        })
        return this;
    }
};
