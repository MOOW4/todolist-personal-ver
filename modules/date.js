export function getDate() {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    let date = new Date().toLocaleDateString("en-GB", options);
    return date;
}