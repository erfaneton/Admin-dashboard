const xAxisData = [
    {
        'name': 'Jan',
        'sale': 120_000
    },
    {
        'name': 'Feb',
        'sale': 98_300
    },
    {
        'name': 'Mar',
        'sale': 12_060
    },
    {
        'name': 'Apr',
        'sale': 99_000
    },
    {
        'name': 'May',
        'sale': 59_100
    },
    {
        'name': 'Jun',
        'sale': 83_220
    },
    {
        'name': 'Jul',
        'sale': 33_900
    },
    {
        'name': 'Agu',
        'sale': 18_598
    },
    {
        'name': 'Sep',
        'sale': 0
    },
    {
        'name': 'Oct',
        'sale': 73_078
    },
    {
        'name': 'Nov',
        'sale': 12_900
    },
    {
        'name': 'Dev',
        'sale': 97_000
    },

]

const newMembers = [
    {
        id: 1,
        username: 'Negin Nobakht',
        title: 'Weblog',
        img: '/images/Neg.jpg',
    },
    {
        id: 2,
        username: 'Amin Shabkohi',
        title: 'Web Developer',
        img: '/images/Amin.jpg',
    },
    {
        id: 3,
        username: 'Ariya Roshangar',
        title: 'Seo Eng',
        img: '/images/Ariya.jpg',
    },
    {
        id: 4,
        username: 'Arshia Shafiei',
        title: 'Hacker',
        img: '/images/Arshia.jpg',
    }
]
const TransActions = [
    {
        id: 1,
        customer: 'Ali Nazari',
        date: '12 Dev 2023',
        amount: '1.300',
        status: 'Pending',
        img: '/images/Ali.jpg'
    },
    {
        id: 2,
        customer: 'Amin Shabkohi',
        date: '12 Dev 2023',
        amount: '3.200',
        status: 'Declined',
        img: '/images/Amin.jpg'
    },
    {
        id: 3,
        customer: 'Alex Farmer',
        date: '11 Dev 2023',
        amount: '200',
        status: 'Approved',
        img: '/images/Alex.jpg'
    },
    {
        id: 4,
        customer: 'CJ Johanson',
        date: '10 Dev 2023',
        amount: '9.800',
        status: 'Approved',
        img: '/images/Cj.jpg'
    }
]

const userRows = [
    {
        id: 1,
        username: 'Negin Nobakht',
        avatar: '/images/Neg.jpg',
        status: 'active',
        TransActions: '$12.399',
        email: 'erfanshafiei.ea@gmail.com'
    },
    {
        id: 2,
        username: 'Arshia Shafiei',
        avatar: '/images/Arshia.jpg',
        status: 'non-active',
        TransActions: '$399',
        email: 'erfanshafiei.ea@gmail.com'
    },
    {
        id: 3,
        username: 'Ali Nazari',
        avatar: '/images/Ali.jpg',
        status: 'active',
        TransActions: '$14.399',
        email: 'erfanshafiei.ea@gmail.com'
    },
    {
        id: 4,
        username: 'CJ Johanson',
        avatar: '/images/Cj.jpg',
        status: 'non-active',
        TransActions: '$7.399',
        email: 'erfanshafiei.ea@gmail.com'
    },
    {
        id: 5,
        username: 'Ariya Roshangar',
        avatar: '/images/Ariya.jpg',
        status: 'non-active',
        TransActions: '$0',
        email: 'erfanshafiei.ea@gmail.com'
    },
    {
        id: 6,
        username: 'Amin Shabkohi',
        avatar: '/images/Amin.jpg',
        status: 'active',
        TransActions: '$4.830',
        email: 'erfanshafiei.ea@gmail.com'
    },
    {
        id: 7,
        username: 'Sina Molaie',
        avatar: '/images/Sina.jpg',
        status: 'non-active',
        TransActions: '$11.499',
        email: 'erfanshafiei.ea@gmail.com'
    },
    {
        id: 8,
        username: 'Mobina Shomali',
        avatar: '/images/Mobina.jpg',
        status: 'non-active',
        TransActions: '$11.233',
        email: 'erfanshafiei.ea@gmail.com'
    },
    {
        id: 9,
        username: 'Alex Farmer',
        avatar: '/images/Alex.jpg',
        status: 'non-active',
        TransActions: '$20.300',
        email: 'erfanshafiei.ea@gmail.com'
    },
    {
        id: 10,
        username: 'Mohammad Shafiei',
        avatar: '/images/Mohammad.jpg',
        status: 'active',
        TransActions: '$935',
        email: 'erfanshafiei.ea@gmail.com'
    },
]
const Products = [
    {
        id: 1,
        title: 'Asus',
        avatar: '/images/Asus.jpg',
        price: 1200
    },
    {
        id: 2,
        title: 'Apple',
        avatar: '/images/Apple.jpg',
        price: 999
    },
    {
        id: 3,
        title: 'Dell',
        avatar: '/images/Dell.jpg',
        price: 220
    },
    {
        id: 4,
        title: 'Hp',
        avatar: '/images/Hp.jpg',
        price: 730
    },
    {
        id: 5,
        title: 'Lenovo',
        avatar: '/images/Lenovo.jpg',
        price: 699
    },
    {
        id: 6,
        title: 'Vite',
        avatar: '/images/Vite.jpg',
        price: 399
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: 1200,
    },
    {
        name: 'Mar',
        sales: 3800,
    },
    {
        name: 'Jun',
        sales: 500,
    },
    {
        name: 'Sep',
        sales: 3300,
    },
    {
        name: 'Dev',
        sales: 4000,
    }
]

export { xAxisData, newMembers, TransActions, userRows, Products, productsData }