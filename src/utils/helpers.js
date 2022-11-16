export function formatPrice(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number / 100);
}

export const getUniqueValues = (data, type) => {
    if (type === 'colors') return ['all', ...new Set(data.map((item) => item[type]).flat())];

    return ['all', ...new Set(data.map((item) => item[type]))];
}
