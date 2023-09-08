import type { GetServerSideProps } from 'next'
 
export const getServerSideProps: GetServerSideProps<any> = async () => {
    try {
        await fetch("exception")
    } catch (e: any) {
        console.log("We just caught some bad code hehe")
        let appInsights = await import('applicationinsights')
        appInsights.defaultClient.trackException({exception:e});
    }
    return { props: { success: false }}
  }

export default function Test() {
    return (
        <>
            Hello from Test page!
        </>
    )
}