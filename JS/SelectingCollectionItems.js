/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query() {
    var array = arguments[0];
    return arguments[1](arguments[2](array));

}

/**
 * @params {String[]}
 */
function select() {
    var selectArray = [].slice.call(arguments);
    return function selectIt(array) {
        return array.map(function(item, index) {
            var feature = Object.keys(item).find((element, index, array)=>{return !selectArray.includes(element)});
            delete item[feature];
            return item;
        })
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function FilterIt(array) {
        return array.filter(function (item, index) {
                var isFine = false;
                Object.keys(item).forEach(function (feature, index) {
                    if (feature === property && (values.some(function(element, index, array)    {return element === item[feature]}))) {isFine=true;}
                })
                return isFine;
            })
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
