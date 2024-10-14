import Title from "@/components/Title"
import PageRunner from "@/components/PageRunner"
import "./globals.css";
import MenuBar from "@/components/MenuBar";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body >
        <div className="bg-plantsplash pb-5 min-h-screen bg-repeat">
        <div className='w-5/6 h-auto bg-green-800 flex flex-col justify-center items-center align-middle m-auto py-2'>
        <Title content = "PLAPP" variant = "primary"/>
        <Title variant = "subTitle"content={`-Cataloguing and caring for your plants-`} className={"text-white"}/>
        <MenuBar/>
        </div>
          <PageRunner>
          {children}
          </PageRunner>
          </div>
          </body>
      </html>
    )}