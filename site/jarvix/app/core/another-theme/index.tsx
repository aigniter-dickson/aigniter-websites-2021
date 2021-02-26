export const AnotherTheme = ({ children }: import('react').PropsWithChildren<{}>) => (
  <div>
    <style jsx>{`
      import 'app/core/styles/app-base.css'
      import 'app/core/styles/app-components.css'
      import 'app/core/styles/app-utilities.css'
      import 'app/core/styles/style.css'
    `}</style>
    {children}
  </div>
)
