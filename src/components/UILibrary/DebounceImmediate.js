const debounceImmediate = (func, delay) => {
    let inDebounce;
    return function() {
        const context = this;
        const args = arguments;
        if (inDebounce) {
            clearTimeout(inDebounce);
            inDebounce = setTimeout(() => func.apply(context, args), delay);
        } else {
            func.apply(context, args);
            inDebounce = setTimeout(() => {
                inDebounce = void 0;
            }, delay);
        }
    };
};

export default debounceImmediate;
