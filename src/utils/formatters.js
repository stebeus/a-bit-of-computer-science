const formatArray = (array) => array.join(', ');

const formatHashMapEntries = ({ key, value }) => `[${key}, ${value}]`;

export { formatArray, formatHashMapEntries };
