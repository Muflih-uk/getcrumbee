import { useState } from "react";

interface ButtonProps {
    color: string;
    title: string;
    bg: string;
}

const Button: React.FC<ButtonProps> = ({ color, title, bg }) => {

    const [open, setOpen] = useState(false);
    const onPressed = () => {
        if(title == "Add to Cart"){
            setOpen(!open);
        }
    }

    return(
        <>
            <button onClick={onPressed} className={`cursor-pointer rounded-full px-8 shadow-black/20 shadow-xl py-4 bg-(${color})`}>
                <div className={`font-bold text-(${bg})`}>{title}</div>
            </button>
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="bg-white rounded-xl p-6 w-80 text-center shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold mb-2">Added to Cart 🛒</h2>
                        <p className="mb-4">
                            Item has been successfully added.
                        </p>

                        <button
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 bg-(--primary-color) text-white rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Button;