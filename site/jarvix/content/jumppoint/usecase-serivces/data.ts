import jsonData from './data.json'

// type PageSectionContent = {
//   title: string
//   content: any
//   imageSrc?: string
// }

// type PageSection = {
//   title: string
//   contents: PageSectionContent[]
// }

// type PageSectionRecords = Record<string, PageSection>

// type PageData = {
//   indexSection: string
//   title: string
//   sections: PageSectionRecords
// }

// type PageDataRecords = Record<string, PageData>

// type PageRecords = {
//   // indexPage: string
//   pages: PageDataRecords
// }

export const data: {
  index: string
  pages: Record<
    string, // page id
    {
      title: string // page title
      label: string
      index: string // index section
      sections: Record<
        string, // section id
        {
          title: string
          contents: Array<{
            title: string
            content: any
            imageSrc: string
          }>
        }
      >
    }
  >
} = jsonData

export type UsecasesOrServicesData = typeof data

export default data
