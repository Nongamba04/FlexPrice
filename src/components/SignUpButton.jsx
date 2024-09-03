
export default function SignUpButton() {
return (
<>
<button className="flex items-center justify-center gap-2 p-2 max-w-[8rem] md:max-w-[12rem] text-lg font-bold text-black bg-white rounded-lg transition duration-200 hover:bg-gray-700 hover:text-white group">
    Sign up
    <div className="flex items-center justify-center">
    <div className="relative w-2.5 h-0.5 bg-white transition-transform duration-200 ease-in-out transform group-hover:bg-white group-hover:translate-x-1">
        <div className="absolute top-[-1.9px] right-[3px] border-white border-r-2 border-b-2 w-[6px] h-[6px] rotate-[-45deg] transition-transform duration-200 ease-in-out transform group-hover:translate-x-1"></div>
    </div>
</div>

</button>

</>
)
};