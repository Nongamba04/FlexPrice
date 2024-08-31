
export default function SignUpButton() {
return (
<>
<button class="flex items-center gap-2 p-4 text-lg font-bold text-white bg-blue-600 rounded-2xl transition duration-200 hover:bg-gray-700 group">
    Sign up
    <div class="flex items-center justify-center">
    <div class="relative w-2.5 h-0.5 bg-blue-600 transition-transform duration-200 ease-in-out transform group-hover:bg-white group-hover:translate-x-1">
        <div class="absolute top-[-1.9px] right-[3px] border-white border-r-2 border-b-2 w-[6px] h-[6px] rotate-[-45deg] transition-transform duration-200 ease-in-out transform group-hover:translate-x-1"></div>
    </div>
</div>

</button>

</>
)
};