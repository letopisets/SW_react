const Footer = () => {
    return (
        <footer className="h-20 rounded-b-2xl bg-grey-color grid grid-cols-7 items-center clear-both">
            <div className={'bg-red-color border-black border-2 col-span-2 rounded-md px-2 py-1 cursor-pointer hover:bg-red-600 col-start-3 text-center'}>Send me an <span className="text-black uppercase">email</span></div>
        </footer>
    )
}
export default Footer