let uniqueId = 0;

const generateUniqueId = () => {
    uniqueId += 1;
    return uniqueId;
};

export const getUniqueId = (prefix) => {
    const currentId = generateUniqueId();
    return `${prefix || "uniqueid"}_${currentId}`;
}
