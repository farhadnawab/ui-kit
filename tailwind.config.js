module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                '64px': '64px',
                '56px': '56px',
                '48px': '48px',
                '40px': '40px',
                '32px': '32px',
                '24px': '24px',
                '20px': '20px',
                '16px': '16px',
                '14px': '14px',
                '12px': '12px'
            },
            colors: {
                gray: {
                    '50':'#F3F4F4',
                    '100': '#DBDEDF',
                    '200': '#C3C7C8',
                    '300': '#A7ADB2',
                    '400': '#8D959B',
                    '500': '#6E7880',
                    '600': '#5C656C',
                    '700': '#495055',
                    '800': '#393D41',
                    '900': '#25282B'
                },
                blue: {
                    '50':'#F1F9FF',
                    '100': '#CFE8FF',
                    '150': '#A7D4FF',
                    '250': '#7BBFFF',
                    '350': '#50ABFF',
                    '500': '#2595FF',
                    '650': '#257EE7',
                    '750': '#246DD3',
                    '850': '#2155BB'
                },
                red: {
                    '50':'#FFF2F4',
                    '100': '#FFDBDD',
                    '150': '#F7B2B0',
                    '250': '#E8847E',
                    '350': '#E66156',
                    '450': '#EB4A34',
                    '600': '#DF3826',
                    '750': '#C72A1D',
                    '900': '#B21B0C'
                },
                yellow: {
                    '50':'#FFF8E1',
                    '100': '#FEECB3',
                    '200': '#FEE082',
                    '300': '#FDD550',
                    '400': '#FDCA2A',
                    '600': '#FDB305',
                    '700': '#FDA004',
                    '850': '#FD8203',
                    '900': '#FD6F02'
                },
                green: {
                    '50':'#E4F6E9',
                    '100': '#BEE8C8',
                    '200': '#93D8A4',
                    '300': '#61CA7F',
                    '400': '#33BE63',
                    '600': '#00A33E',
                    '700': '#009132',
                    '850': '#006B19',
                    '900': '#006012'
                }
            }
        },
    },
    variants: {
        extend: {
            textColor: ['visited', 'disabled'],
            backgroundColor: ['visited', 'disabled'],
            borderColor: ['visited', 'disabled']
        },
    },
    plugins: [],
    important: true
}