const computerStore = (() => {
    let store = [];

    const getStore = () => store;
    const setStore = (newStore) => {
        store.push(newStore)
    };

    const resetStore = () => {
        store = [];
    }

    return (newStore) => {
        if (newStore) setStore(newStore);
        return [getStore, setStore, resetStore];
    }
})();

const store = {
    computerStore,
}

module.exports = store;