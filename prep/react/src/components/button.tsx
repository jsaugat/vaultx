import React, { useState } from "react"

// src/components/Button.tsx
export interface ButtonProps {
    label: string
    variant?: "primary" | "secondary" | "danger" | "outline" | "ghost"
    size?: "small" | "medium" | "large"
    disabled?: boolean
    loading?: boolean
    fullWidth?: boolean
    onClick?: () => void
    icon?: React.ReactNode
    iconPosition?: "left" | "right"
}

export function Button({
    label,
    variant = "primary",
    size = "medium",
    disabled = false,
    loading = false,
    fullWidth = false,
    onClick,
    icon,
    iconPosition = "left",
}: ButtonProps) {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        if (disabled || loading) return
        setClicked(true)
        onClick?.()
        setTimeout(() => setClicked(false), 200)
    }

    const buttonId = `button-${variant}-${size}-${Math.random().toString(36).substr(2, 9)}`

    const baseStyles: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        fontWeight: 600,
        border: "none",
        borderRadius: "6px",
        cursor: disabled || loading ? "not-allowed" : "pointer",
        transition: "all 0.2s ease",
        position: "relative",
        overflow: "hidden",
        width: fullWidth ? "100%" : "auto",
        opacity: disabled ? 0.6 : 1,
        transform: clicked ? "scale(0.98)" : "scale(1)",
    }

    const variantStyles: Record<string, React.CSSProperties> = {
        primary: {
            backgroundColor: "#007bff",
            color: "white",
        },
        secondary: {
            backgroundColor: "#6c757d",
            color: "white",
        },
        danger: {
            backgroundColor: "#dc3545",
            color: "white",
        },
        outline: {
            backgroundColor: "transparent",
            color: "#007bff",
            border: "2px solid #007bff",
        },
        ghost: {
            backgroundColor: "transparent",
            color: "#007bff",
        },
    }

    const sizeStyles: Record<string, React.CSSProperties> = {
        small: {
            padding: "6px 12px",
            fontSize: "14px",
            minHeight: "32px",
        },
        medium: {
            padding: "10px 20px",
            fontSize: "16px",
            minHeight: "40px",
        },
        large: {
            padding: "14px 28px",
            fontSize: "18px",
            minHeight: "48px",
        },
    }

    const currentVariant = variantStyles[variant]
    const currentSize = sizeStyles[size]

    const buttonStyle: React.CSSProperties = {
        ...baseStyles,
        ...currentVariant,
        ...currentSize,
    }

    const Spinner = () => (
        <span
            style={{
                display: "inline-block",
                width: "16px",
                height: "16px",
                border: "2px solid currentColor",
                borderTopColor: "transparent",
                borderRadius: "50%",
                animation: "spin 0.6s linear infinite",
            }}
        />
    )

    return (
        <>
            <style>
                {`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                    #${buttonId}:hover:not(:disabled) {
                        ${variant === "primary" ? "background-color: #0056b3;" : ""}
                        ${variant === "secondary" ? "background-color: #545b62;" : ""}
                        ${variant === "danger" ? "background-color: #c82333;" : ""}
                        ${variant === "outline" ? "background-color: #f0f8ff;" : ""}
                        ${variant === "ghost" ? "background-color: #f0f8ff;" : ""}
                    }
                    #${buttonId}:active:not(:disabled) {
                        transform: scale(0.97);
                    }
                `}
            </style>
            <button
                id={buttonId}
                style={buttonStyle}
                onClick={handleClick}
                disabled={disabled || loading}
                aria-label={loading ? `${label} (loading)` : label}
            >
                {loading && <Spinner />}
                {!loading && icon && iconPosition === "left" && icon}
                <span>{label}</span>
                {!loading && icon && iconPosition === "right" && icon}
            </button>
        </>
    )
}
