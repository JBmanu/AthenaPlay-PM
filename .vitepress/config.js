import {defineConfig} from 'vitepress'
import {withMermaid} from "vitepress-plugin-mermaid";

let reportPath = '/report'
let scopingPath = reportPath + '/scoping'
// https://vitepress.dev/reference/site-config


export default withMermaid(
    defineConfig({
        base: '/AthenaPlay-PM/',
        title: "AthenaPlay-PM",
        description: "Ulisse an Train Infrastructure Similator",
        themeConfig: {
            // https://vitepress.dev/reference/default-theme-config
            nav: [
                {text: 'Home', link: '/'},
            ],

            sidebar: [
                {
                    text: 'Report',
                    items: [
                        {text: 'Contesto', link: `${reportPath}/0-contesto`},
                        {text: 'Scoping', link: `${reportPath}/1-scoping`},
                        {text: 'Valutazione proposte del committente', link: `${reportPath}/2-valutazione-proposte-committente`},
                        {text: 'Project Overview Statement', link: `${reportPath}/3-POS`},
                        {text: 'Analisi dei rischi', link: `${reportPath}/4-POS-AnalisiRischi`},
                        {text: 'Requirements Breakdown Structure', link: `${reportPath}/5-RBS`},
                        {text: 'PMLC Model', link: `${reportPath}/6-PMLC-model`},
                        {text: 'Traduzione', link: `${reportPath}/7-traduzione`},
                    ]
                },
                {
                    text: 'Scoping',
                    collapsed: true,
                    items: [
                        {text: '1-Meeting', link: `${scopingPath}/1-meeting`},
                        {text: '2-Meeting', link: `${scopingPath}/2-meeting`},
                        {text: '3-Meeting', link: `${scopingPath}/3-meeting`},
                        {text: 'Market Analysis', link: `${scopingPath}/Market-Analysis`},
                        {text: 'POS', link: `${scopingPath}/POS`},
                        {text: 'Risk Analysis', link: `${scopingPath}/Risk-Analysis`},
                        {text: 'Financial Analyses', link: `${scopingPath}/Financial-Analyses`},
                    ]

                }
            ],

            socialLinks: [
                {icon: 'github', link: 'https://github.com/JBmanu/AthenaPlay-PM'}
            ]
        }
    })
)
