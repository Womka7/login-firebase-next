import React from "react";

interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    placeholder:string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}