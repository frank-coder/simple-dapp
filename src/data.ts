// The named list of all type definitions
export const types = {
  Message: [
    { name: 'contents', type: 'string' },
    {name: 'url', type: 'string'},
    {name: 'issuedAt', type: 'string'}
  ],
} as const

export const message = {
    contents: 'Sign in with Ethereum to the Dapp',
    url: '\thttps://simple-dapp-fjhx.vercel.app/',
    issuedAt: (new Date()).toDateString(),
} as const
