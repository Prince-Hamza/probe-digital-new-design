import tick from '../../../images/dashboard/tick.png'
import cross from '../../../images/dashboard/cross.png'
import uk from '../../../images/dashboard/uk.png'

export const info = ({
    card1: {
        headings: [
            {
                title: 'Company Name',
                lg: 4,
            },
            {
                title: 'Jurisdiction',
                lg: 4
            },
            {
                title: 'Solvent',
                lg: 2
            },
            {
                title: 'Charges',
                lg: 2
            },
        ],
        rows: [
            {
                items: [
                    {
                        text: 'Hubble Ltd',
                        lg: 4
                    },
                    {
                        image: uk,
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
                        image: uk,
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
                        image: uk,
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
                        image: uk,
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
        headings: [
            {
                title: 'Legal Orders',
                lg: 4,
            },
            {
                title: 'Charges',
                lg: 4
            }
        ],

        rows: [
            {
                items: [
                    {
                        text: 'County Court Judgements (JCC) ',
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

    }


})