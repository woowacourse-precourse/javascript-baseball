const computerStore = (() => {
    let store = [];

    const getStore = () => store;
    const setStore = (newStore) => {
        store.push(newStore)
    };

    return (newStore) => {
        if (newStore) setStore(newStore);
        return [getStore(), setStore];
    }
})();

const STORE = {
    computerStore,
}

module.exports = STORE;