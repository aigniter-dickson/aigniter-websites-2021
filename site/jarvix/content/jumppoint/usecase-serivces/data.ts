type PageSectionContent = {
  title: string
  content: any
  imageSrc?: string
}

type PageSection = {
  title: string
  contents: PageSectionContent[]
}

type PageSectionRecords = Record<string, PageSection>

type PageData = {
  indexSection: string
  title: string
  sections: PageSectionRecords
}

type PageDataRecords = Record<string, PageData>

type PageRecords = {
  // indexPage: string
  pages: PageDataRecords
}

const pages: Record<
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
> = {
  'use-cases': {
    index: 'food',
    title: '你的業務類型',
    label: '你的業務類型',
    sections: {
      food: {
        title: '凍肉、蔬果等食品',
        contents: [
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-usecases-1.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-usecases-1.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
        ],
      },
      beauty: {
        title: '化妝品、日用品等貨品',
        contents: [
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-usecases-2.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-usecases-2.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
        ],
      },
      retail: {
        title: '零售服務',
        contents: [
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-usecases-3.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-usecases-3.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
        ],
      },
      'cross-border': {
        title: '跨境電商貨運配送',
        contents: [
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-usecases-4.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-usecases-4.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
        ],
      },
    },
  },
  services: {
    index: 'standard-delivery',
    title: 'jumppoint服務',
    label: 'jumppoint服務',
    sections: {
      'standard-delivery': {
        title: '凍肉、蔬果等食品',
        contents: [
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-services-1.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-services-1.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
        ],
      },
      'sameday-delivery': {
        title: '化妝品、日用品等貨品',
        contents: [
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-services-2.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-services-2.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
        ],
      },
      compare: {
        title: '零售服務',
        contents: [
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-services-3.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-services-3.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
        ],
      },
      inventory: {
        title: '跨境電商貨運配送',
        contents: [
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-services-4.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
          {
            title: '-18度、0-4度和室溫的選項',
            imageSrc: '/images/jumppoint/landing/brief-services-4.png',
            content:
              '若您正考慮以零售的方式岀售您的凍貨產品，我們提供-18度、0-4度和室溫的選項，以即日或預約 送貨的形式門對門將食物送到客人府上，打破線上購買凍肉需要大量批發的限制，更打破預約送 貨、數日後客人才能收到食物的束縛。',
          },
        ],
      },
    },
  },
}

export const data = {
  index: 'use-cases',
  pages,
}

// data.pages['services'].sections['food'].title

export type UsecasesOrServicesData = typeof data

export default data
