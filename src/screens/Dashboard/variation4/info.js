import tick from '../../../images/dashboard/tick.png'
import cross from '../../../images/dashboard/cross.png'
import Uk from '../../../images/dashboard/uk.png'
import Germany from '../../../images/dashboard/germany.png'
import Spain from '../../../images/dashboard/Spain.png'
import company from '../../../images/dashboard/curentOrganization.png'
import Jurisdiction from '../../../images/dashboard/jurisdiction.png'
import Charges from '../../../images/dashboard/charges.png'
import Solvent from '../../../images/dashboard/charges.png'
import legalOrders from '../../../images/dashboard/legalOrders.png'



export const info = ({
    card1: {
        gradient: true,
        //mainTitle: 'Company Info',
        headings: [
            {
                title: 'Company Name',
                image: company,
                lg: 4,
                xs: 12
            },
            {
                title: 'Jurisdiction',
                image: Jurisdiction,
                lg: 4,
                xs: 12
            },
            {
                title: 'Solvent',
                image: Charges,
                lg: 2,
                xs: 12
            },
            {
                title: 'Charges',
                image: Solvent,
                lg: 2,
                xs: 12
            },
        ],
        rows: [
            {
                items: [
                    {
                        text: 'Hubble Ltd',
                        lg: 4,
                    },
                    {
                        image: Uk,
                        text: 'United Kingdom',
                        lg: 4
                    },
                    {
                        image: tick,
                        lg: 2
                    },
                    {
                        image: cross,
                        lg: 2
                    },
                ]
            },

            {
                items: [
                    {
                        text: 'Hubble Ltd',
                        lg: 4
                    },
                    {
                        image: Germany,
                        text: 'Germany',
                        lg: 4
                    },
                    {
                        image: tick,
                        lg: 2
                    },
                    {
                        image: cross,
                        lg: 2
                    },
                ]
            },
            {
                items: [
                    {
                        text: 'Hubble Ltd',
                        lg: 4
                    },
                    {
                        image: Spain,
                        text: 'Spain',
                        lg: 4
                    },
                    {
                        image: tick,
                        lg: 2
                    },
                    {
                        image: cross,
                        lg: 2
                    },
                ]
            },
            {
                items: [
                    {
                        text: 'Hubble Ltd',
                        lg: 4
                    },
                    {
                        image: Uk,
                        text: 'United Kingdom',
                        lg: 4
                    },
                    {
                        image: tick,
                        lg: 2
                    },
                    {
                        image: cross,
                        lg: 2
                    },
                ]
            },
        ]
    },

    card2: {

        gradient: true,
        // mainTitle: 'Legal Info',
        headings: [
            {
                title: 'Legal Orders',
                image: legalOrders,
                lg: 4,
                xs: 12
            },
            {
                title: 'Charges',
                image: Charges,
                lg: 4,
                xs: 12
            }
        ],

        rows: [
            {
                items: [
                    {
                        text: 'County Court ',
                        lg: 4
                    },
                    {
                        image: cross,
                        lg: 4
                    },
                ]
            },
            {
                items: [
                    {
                        text: 'Declaratory Judgement',
                        lg: 4
                    },
                    {
                        image: tick,
                        lg: 4
                    },
                ]
            },
            {
                items: [
                    {
                        text: 'Content Judgement',
                        lg: 4
                    },
                    {
                        image: cross,
                        lg: 4
                    },
                ]
            },
            {
                items: [
                    {
                        text: 'Interlocutory Judgement',
                        lg: 4
                    },
                    {
                        image: tick,
                        lg: 4
                    },
                ]
            },

        ]

    },

    card3: {

        gradient: true,
        //mainTitle: 'Assets Info',

        headings: [
            {
                title: 'Assets',
                image: legalOrders,
                lg: 4,
                xs: 12
            },

        ],

        rows: [
            {
                items: [
                    {
                        text: '',
                        lg: 4
                    },
                    {
                        text: '',
                        lg: 4
                    },
                ]
            },
            {
                items: [
                    {
                        text: '',
                        lg: 4
                    },
                    {
                        text: '',
                        lg: 4
                    },
                ]
            },
            {
                items: [
                    {
                        text: '',
                        lg: 4
                    },
                    {
                        text: '',
                        lg: 4
                    },
                ]
            },
            {
                items: [
                    {
                        text: '',
                        lg: 4,
                        xs: 12
                    },
                    {
                        text: '',
                        lg: 4,
                        xs: 12
                    },
                ]
            },
        ]

    },


    card4: {
        gradient: true,
        //mainTitle: 'Company Info',
        headings: [
            {
                title: 'List Names',
                image: legalOrders,
                lg: 4,
                xs: 12
            },
            {
                title: 'Charges',
                image: Charges,
                lg: 4,
                xs: 12
            }
        ],
        rows: [
            {
                items: [
                    {
                        text: 'United Nations Sanctions List',
                        lg: 4
                    },
                    {
                        image: tick,
                        lg: 4
                    },
                ]
            },
            {
                items: [
                    {
                        text: 'Subject to Financial Sanctions',
                        lg: 4
                    },
                    {
                        image: cross,
                        lg: 4
                    },
                ]
            },
            {
                items: [
                    {
                        text: 'Financial Services Register',
                        lg: 4
                    },
                    {
                        image: tick,
                        lg: 4
                    },
                ]
            },
            {
                items: [
                    {
                        text: 'Insolvency Register',
                        lg: 4
                    },
                    {
                        image: cross,
                        lg: 4
                    },
                ]
            },

        ]

    },
})