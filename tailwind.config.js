module.exports = {
    mode: 'jit',
    purge: [
        './**.html',
        './**.scss'
    ],
    theme: {
        container: {
            padding: '1rem',
        },
        extend: {
            colors: {
                'primary': '#b70000',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
