const today = new Date();
const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);

const dayOfWeek = monthStart.getDay();

console.log(dayOfWeek);