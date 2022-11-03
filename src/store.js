const COMPUTERSTORE = (() => {
    let computerStore = [];

    const GETSTORE = () => computerStore;
    const SETSTORE = (newStore) => {
        computerStore.push(newStore)
    };

    return (newStore) => {
        if (newStore) SETSTORE(newStore);
        return [GETSTORE(), SETSTORE];
    }
})();

const USERSTORE = (() => {
    let userStore = [];

    const GETSTORE = () => userStore;
    const SETSTORE = (newStore) => [...userStore, ...newStore];

    return (newStore) => {
        SETSTORE(newStore);
        return [GETSTORE(), SETSTORE];
    }
})

const STORE = {
    COMPUTERSTORE,
    USERSTORE,
}

module.exports = STORE;