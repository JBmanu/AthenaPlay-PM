import {defineConfig} from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

let reportPath = '/report'
let attachmentsPath = reportPath + '/attachments'
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
                {text: 'Report',
                    items: [
                        {text: 'Contesto', link: `${reportPath}/0-contesto`},
                        {text: 'Process scoping meeting', link: `${reportPath}/1-scoping`},
                        {text: 'Valutazione proposte del committente', link: `${reportPath}/2-valutazione-proposte-committente`},
                        {text: 'Project Overview Statement', link: `${reportPath}/3-POS`},
                        {text: 'Analisi dei rischi', link: `${reportPath}/4-POS-AnalisiRischi`},
                        {text: 'Requirements Breakdown Structure', link: `${reportPath}/5-RBS`},
                        {text: 'PMLC Model', link: `${reportPath}/6-PMLC-model`},
                        {text: 'Traduzione', link: `${reportPath}/7-traduzione`},
                    ]
                },
                { text: 'Allegati',
                    items: [
                        {text: 'POS-Project Overview Statement', link: `${attachmentsPath}/POS-Project-Overview-Statement`},
                    ]

                }
            ],

            socialLinks: [
                {icon: 'github', link: 'https://github.com/JBmanu/AthenaPlay-PM'}
            ]
        }
    })
)
