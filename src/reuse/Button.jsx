export default function Button({title ,link='#'}){
    return <a className="text-[#154444] py-4 px-6  bg-white transition-all duration-300 hover:bg-transparent hover:text-white hover:border-solid hover:border-black border-transparent border-2" href={link}>{title}</a>
}
