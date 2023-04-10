export default function Header(){
    return (
        <div className="bg-gradient-to-r from-[#5f6984] to-[#0f1f47] p-2">
            <div className="text-left text-lg py-3 m-auto flex justify-center">
                <input className="rounded text-lg mr-3 w-74 p-2 w-[450px]" type="text" placeholder="State, City or town"/>
                <button className="rounded bg-red-600 px-9 py-2 text-white">Let's go</button>
            </div>
        </div>
    )
}