type TextFieldProps = {
    type: "text" | "email" | "password";
    placeholder: string;
    variant?: "input_white" | "input_green";
}

export function TextField({ type, placeholder, variant }: TextFieldProps) {
    return (
        <input className={`border ${variant} p-2 m-2`} type={type} placeholder={placeholder} />
    )
}

type TextareaProps = {
    placeholder: string;
    variant?: "input_white" | "input_green";
}

export function Textarea({ placeholder, variant }: TextareaProps) {
    return (
        <textarea className={`border ${variant} p-2 m-2`} placeholder={placeholder} />
    )
}

export function RadioButton() {
    return (
        <div>Input</div>
    )
}