declare module 'remark-react' {
  export declare namespace remarkReact {
    interface Parse extends Plugin<[RemarkReactOptions?]> {}

    type RemarkReactOptions = import('mdast-util-from-markdown').Options
  }

  declare const remarkReact: remarkReact.Parse

  export = remarkReact
}
